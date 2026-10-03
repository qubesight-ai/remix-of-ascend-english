import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

// Session-level cache to prevent re-checking on every navigation
const placementCache: { checked: boolean; needsExam: boolean; userId: string | null } = {
  checked: false,
  needsExam: false,
  userId: null,
};

export function usePlacementExam() {
  const { user, loading: authLoading } = useAuth();
  const [needsPlacementExam, setNeedsPlacementExam] = useState(false);
  const [loading, setLoading] = useState(true);
  const [placementCompleted, setPlacementCompleted] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const checkPlacementStatus = async () => {
      if (!user) {
        if (isMounted) {
          setLoading(false);
          setNeedsPlacementExam(false);
        }
        return;
      }

      // If already checked for this user in this session, use cached result
      if (placementCache.checked && placementCache.userId === user.id) {
        if (isMounted) {
          setNeedsPlacementExam(placementCache.needsExam);
          setPlacementCompleted(!placementCache.needsExam);
          setLoading(false);
        }
        return;
      }

      try {
        // Check if user has completed placement exam
        const { data, error } = await supabase
          .from('user_placement_exams')
          .select('id, assigned_level')
          .eq('user_id', user.id)
          .maybeSingle();

        if (!isMounted) return;

        if (error) {
          console.error('Error checking placement status:', error);
          setNeedsPlacementExam(false);
          placementCache.checked = true;
          placementCache.needsExam = false;
          placementCache.userId = user.id;
        } else {
          // User needs placement exam if no record exists
          const needsExam = !data;
          setNeedsPlacementExam(needsExam);
          setPlacementCompleted(!!data);
          
          // Cache the result for this session
          placementCache.checked = true;
          placementCache.needsExam = needsExam;
          placementCache.userId = user.id;
        }
      } catch (error) {
        console.error('Error checking placement status:', error);
        if (isMounted) {
          setNeedsPlacementExam(false);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    if (!authLoading) {
      checkPlacementStatus();
    }

    return () => {
      isMounted = false;
    };
  }, [user, authLoading]);

  const markPlacementComplete = () => {
    setNeedsPlacementExam(false);
    setPlacementCompleted(true);
    // Update cache when user completes or skips placement
    placementCache.checked = true;
    placementCache.needsExam = false;
    placementCache.userId = user?.id || null;
  };

  return {
    needsPlacementExam,
    loading: loading || authLoading,
    placementCompleted,
    markPlacementComplete,
  };
}
