import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Monitor, Smartphone, Tablet, Laptop, X, Loader2, Clock, RefreshCw } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface UserSession {
  id: string;
  user_id: string;
  session_token: string;
  device_info: string | null;
  last_active_at: string;
  created_at: string;
}

interface UserWithSessions {
  user_id: string;
  display_name: string | null;
  sessions: UserSession[];
}

export function UserSessionsPanel() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [usersWithSessions, setUsersWithSessions] = useState<UserWithSessions[]>([]);
  const [terminatingSession, setTerminatingSession] = useState<string | null>(null);
  const [confirmDialog, setConfirmDialog] = useState<{ open: boolean; session: UserSession | null; userName: string }>({
    open: false,
    session: null,
    userName: '',
  });

  const fetchSessions = async () => {
    setLoading(true);
    try {
      // Get all sessions
      const { data: sessions, error: sessionsError } = await supabase
        .from('user_sessions')
        .select('*')
        .order('last_active_at', { ascending: false });

      if (sessionsError) throw sessionsError;

      // Get all profiles
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('user_id, display_name');

      if (profilesError) throw profilesError;

      // Group sessions by user
      const userMap = new Map<string, UserWithSessions>();

      sessions?.forEach((session) => {
        if (!userMap.has(session.user_id)) {
          const profile = profiles?.find(p => p.user_id === session.user_id);
          userMap.set(session.user_id, {
            user_id: session.user_id,
            display_name: profile?.display_name || null,
            sessions: [],
          });
        }
        userMap.get(session.user_id)!.sessions.push(session);
      });

      setUsersWithSessions(Array.from(userMap.values()));
    } catch (error) {
      console.error('Error fetching sessions:', error);
      toast({
        title: 'Error',
        description: 'Failed to load user sessions',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const terminateSession = async (sessionId: string) => {
    setTerminatingSession(sessionId);
    try {
      const { error } = await supabase
        .from('user_sessions')
        .delete()
        .eq('id', sessionId);

      if (error) throw error;

      // Update local state
      setUsersWithSessions(prev => 
        prev.map(user => ({
          ...user,
          sessions: user.sessions.filter(s => s.id !== sessionId),
        })).filter(user => user.sessions.length > 0)
      );

      toast({
        title: 'Session Terminated',
        description: 'The user has been logged out from that device',
      });
    } catch (error) {
      console.error('Error terminating session:', error);
      toast({
        title: 'Error',
        description: 'Failed to terminate session',
        variant: 'destructive',
      });
    } finally {
      setTerminatingSession(null);
      setConfirmDialog({ open: false, session: null, userName: '' });
    }
  };

  const terminateAllUserSessions = async (userId: string, userName: string) => {
    setTerminatingSession(userId);
    try {
      const { error } = await supabase
        .from('user_sessions')
        .delete()
        .eq('user_id', userId);

      if (error) throw error;

      // Update local state
      setUsersWithSessions(prev => prev.filter(user => user.user_id !== userId));

      toast({
        title: 'All Sessions Terminated',
        description: `${userName || 'User'} has been logged out from all devices`,
      });
    } catch (error) {
      console.error('Error terminating sessions:', error);
      toast({
        title: 'Error',
        description: 'Failed to terminate sessions',
        variant: 'destructive',
      });
    } finally {
      setTerminatingSession(null);
    }
  };

  const getDeviceIcon = (deviceInfo: string | null) => {
    if (!deviceInfo) return <Monitor className="w-4 h-4" />;
    const info = deviceInfo.toLowerCase();
    if (info.includes('iphone') || info.includes('android')) return <Smartphone className="w-4 h-4" />;
    if (info.includes('ipad')) return <Tablet className="w-4 h-4" />;
    if (info.includes('mac') || info.includes('windows') || info.includes('linux')) return <Laptop className="w-4 h-4" />;
    return <Monitor className="w-4 h-4" />;
  };

  const formatLastActive = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
  };

  const isActive = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    return diffMs < 120000; // Active within last 2 minutes
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="py-8 flex items-center justify-center">
          <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  const totalSessions = usersWithSessions.reduce((acc, user) => acc + user.sessions.length, 0);

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="w-5 h-5" />
                Active Sessions
                <Badge variant="secondary">{totalSessions}</Badge>
              </CardTitle>
              <CardDescription>
                Manage user devices and terminate sessions if needed
              </CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={fetchSessions}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {usersWithSessions.length === 0 ? (
            <p className="text-muted-foreground text-center py-4">
              No active sessions
            </p>
          ) : (
            <div className="space-y-4">
              {usersWithSessions.map((user) => (
                <div key={user.user_id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{user.display_name || 'Unknown User'}</span>
                      <Badge variant="outline" className="text-xs">
                        {user.sessions.length} device{user.sessions.length !== 1 ? 's' : ''}
                      </Badge>
                    </div>
                    {user.sessions.length > 1 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive"
                        onClick={() => terminateAllUserSessions(user.user_id, user.display_name || 'User')}
                        disabled={terminatingSession === user.user_id}
                      >
                        {terminatingSession === user.user_id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          'Log out all'
                        )}
                      </Button>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    {user.sessions.map((session) => (
                      <div 
                        key={session.id}
                        className="flex items-center justify-between p-2 rounded-md bg-secondary/50"
                      >
                        <div className="flex items-center gap-3">
                          {getDeviceIcon(session.device_info)}
                          <div>
                            <p className="text-sm font-medium">
                              {session.device_info || 'Unknown Device'}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              <span>{formatLastActive(session.last_active_at)}</span>
                              {isActive(session.last_active_at) && (
                                <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[10px] px-1.5 py-0">
                                  Active
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          onClick={() => setConfirmDialog({ open: true, session, userName: user.display_name || 'User' })}
                          disabled={terminatingSession === session.id}
                        >
                          {terminatingSession === session.id ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <X className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={confirmDialog.open} onOpenChange={(open) => !open && setConfirmDialog({ open: false, session: null, userName: '' })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Terminate Session?</DialogTitle>
            <DialogDescription>
              This will log out {confirmDialog.userName} from their {confirmDialog.session?.device_info || 'device'}. 
              They will need to sign in again to continue using the platform.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmDialog({ open: false, session: null, userName: '' })}>
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={() => confirmDialog.session && terminateSession(confirmDialog.session.id)}
              disabled={terminatingSession !== null}
            >
              {terminatingSession ? (
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
              ) : null}
              Terminate Session
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
