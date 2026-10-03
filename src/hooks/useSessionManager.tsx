import { useEffect, useRef, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

const SESSION_TOKEN_KEY = 'tem_teaching_session_token';
const HEARTBEAT_INTERVAL = 60000; // 1 minute

// Generate a unique session token for this browser/device
function generateSessionToken(): string {
  const existing = localStorage.getItem(SESSION_TOKEN_KEY);
  if (existing) return existing;
  
  const token = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
  localStorage.setItem(SESSION_TOKEN_KEY, token);
  return token;
}

// Get device info for display
function getDeviceInfo(): string {
  const ua = navigator.userAgent;
  let device = 'Unknown Device';
  
  if (ua.includes('iPhone')) device = 'iPhone';
  else if (ua.includes('iPad')) device = 'iPad';
  else if (ua.includes('Android')) device = 'Android';
  else if (ua.includes('Mac')) device = 'Mac';
  else if (ua.includes('Windows PC')) device = 'Windows PC';
  else if (ua.includes('Linux')) device = 'Linux';
  
  // Add browser info
  let browser = '';
  if (ua.includes('Chrome') && !ua.includes('Edg')) browser = 'Chrome';
  else if (ua.includes('Safari') && !ua.includes('Chrome')) browser = 'Safari';
  else if (ua.includes('Firefox')) browser = 'Firefox';
  else if (ua.includes('Edg')) browser = 'Edge';
  
  return browser ? `${device} - ${browser}` : device;
}

export function useSessionManager(userId: string | undefined) {
  const heartbeatRef = useRef<NodeJS.Timeout | null>(null);
  const sessionToken = useRef<string>(generateSessionToken());

  // Register or update this session
  const registerSession = useCallback(async () => {
    if (!userId) return { success: false, kicked: false };

    try {
      const token = sessionToken.current;
      const deviceInfo = getDeviceInfo();

      // Get all sessions for this user
      const { data: sessions, error: fetchError } = await supabase
        .from('user_sessions')
        .select('*')
        .eq('user_id', userId)
        .order('last_active_at', { ascending: true });

      if (fetchError) throw fetchError;

      // Check if this session already exists
      const existingSession = sessions?.find(s => s.session_token === token);

      if (existingSession) {
        // Update last active time
        await supabase
          .from('user_sessions')
          .update({ last_active_at: new Date().toISOString() })
          .eq('id', existingSession.id);
        
        return { success: true, kicked: false };
      }

      // Insert new session (no device limit - admin can manage sessions manually)

      // Insert new session
      const { error: insertError } = await supabase
        .from('user_sessions')
        .insert({
          user_id: userId,
          session_token: token,
          device_info: deviceInfo,
        });

      if (insertError) throw insertError;

      return { success: true, kicked: false };
    } catch (error) {
      console.error('Error registering session:', error);
      return { success: false, kicked: false };
    }
  }, [userId]);

  // Check if this session is still valid
  const checkSession = useCallback(async (): Promise<boolean> => {
    if (!userId) return false;

    try {
      const token = sessionToken.current;
      
      const { data, error } = await supabase
        .from('user_sessions')
        .select('id')
        .eq('user_id', userId)
        .eq('session_token', token)
        .single();

      if (error || !data) {
        return false;
      }

      // Update last active
      await supabase
        .from('user_sessions')
        .update({ last_active_at: new Date().toISOString() })
        .eq('id', data.id);

      return true;
    } catch {
      return false;
    }
  }, [userId]);

  // Remove this session (on logout)
  const removeSession = useCallback(async () => {
    if (!userId) return;

    try {
      const token = sessionToken.current;
      
      await supabase
        .from('user_sessions')
        .delete()
        .eq('user_id', userId)
        .eq('session_token', token);
    } catch (error) {
      console.error('Error removing session:', error);
    }
  }, [userId]);

  // Clear session token from localStorage
  const clearLocalSession = useCallback(() => {
    localStorage.removeItem(SESSION_TOKEN_KEY);
  }, []);

  // Start heartbeat to keep session alive
  useEffect(() => {
    if (!userId) {
      if (heartbeatRef.current) {
        clearInterval(heartbeatRef.current);
        heartbeatRef.current = null;
      }
      return;
    }

    // Initial registration
    registerSession();

    // Periodic heartbeat
    heartbeatRef.current = setInterval(() => {
      checkSession();
    }, HEARTBEAT_INTERVAL);

    return () => {
      if (heartbeatRef.current) {
        clearInterval(heartbeatRef.current);
        heartbeatRef.current = null;
      }
    };
  }, [userId, registerSession, checkSession]);

  return {
    registerSession,
    checkSession,
    removeSession,
    clearLocalSession,
    sessionToken: sessionToken.current,
  };
}
