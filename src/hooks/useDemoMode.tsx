import { useMemo } from 'react';
import { useAuth } from '@/contexts/AuthContext';

const DEMO_EMAIL = 'qubetest@tutamail.com';

export function useDemoMode() {
  const { user } = useAuth();

  const isDemoUser = useMemo(() => {
    return user?.email === DEMO_EMAIL;
  }, [user?.email]);

  return { isDemoUser };
}
