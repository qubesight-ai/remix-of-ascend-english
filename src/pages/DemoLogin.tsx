import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const DemoLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const autoLogin = async () => {
      try {
        // Call edge function to get demo session tokens
        const { data, error: fnError } = await supabase.functions.invoke('demo-login', {
          method: 'POST',
        });

        if (fnError || !data?.access_token) {
          console.error('Demo login error:', fnError);
          setError("Error al cargar la demo");
          return;
        }

        // Set the session using the tokens from the edge function
        const { error: sessionError } = await supabase.auth.setSession({
          access_token: data.access_token,
          refresh_token: data.refresh_token,
        });

        if (sessionError) {
          console.error('Session error:', sessionError);
          setError("Error al cargar la demo");
          return;
        }

        navigate("/");
      } catch (err) {
        console.error('Demo login failed:', err);
        setError("Error al cargar la demo");
      }
    };
    autoLogin();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {error ? (
          <p className="text-destructive">{error}</p>
        ) : (
          <>
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-muted-foreground">Cargando demo...</p>
          </>
        )}
      </div>
    </div>
  );
};

export default DemoLogin;
