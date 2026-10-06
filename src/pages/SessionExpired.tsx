import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Monitor, LogOut, BookOpen } from 'lucide-react';

export default function SessionExpired() {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    window.location.href = '/auth';
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-3xl orb-aqua flex items-center justify-center mx-auto mb-4 shadow-aqua relative overflow-hidden group">
            <span className="text-white font-display font-black text-3xl drop-shadow-md">L</span>
            <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-white blur-[0.4px] opacity-90 animate-pulse"></div>
          </div>
          <h1 className="font-display font-black text-3xl text-foreground text-shadow-sm tracking-tight">Luma</h1>
          <p className="text-primary font-bold text-sm mt-0.5">Learn brighter.</p>
        </div>

        <Card className="text-center">
          <CardHeader>
            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
              <Monitor className="w-8 h-8 text-destructive" />
            </div>
            <CardTitle className="text-xl">Session Ended</CardTitle>
            <CardDescription className="text-base">
              You've been signed out on this device
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Your account was accessed from another device. Each account is limited to <strong>2 devices</strong> at a time.
            </p>
            
            <div className="p-4 rounded-lg bg-secondary/50 text-sm text-left">
              <p className="font-medium text-foreground mb-2">Why did this happen?</p>
              <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                <li>You logged in on a new device</li>
                <li>This was the oldest active session</li>
                <li>It was automatically signed out</li>
              </ul>
            </div>

            <Button 
              className="w-full mt-4"
              onClick={handleSignOut}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign In Again
            </Button>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Need more devices? Contact your administrator.
        </p>
      </div>
    </div>
  );
}
