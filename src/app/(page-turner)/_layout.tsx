import { getSession } from "@/modules/auth/services/get-session";
import supabase from "@/shared/config/supabase";
import { Stack, Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import Box from "@/shared/components/ui/box";
import Spinner from "@/shared/components/ui/spinner";

const PageTurnerLayout = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [isCheckingSession, setIsCheckingSession] = useState(true);

  useEffect(() => {
    (async () => {
      const session = await getSession();
      setSession(session);
      setIsCheckingSession(false);
    })();

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  if (isCheckingSession) {
    return (
      <Box style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Spinner color="primary" />
      </Box>
    );
  }

  if (!session) {
    return <Redirect href="/auth/sign-in" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="add-book" options={{ presentation: "modal" }} />
    </Stack>
  );
};

export default PageTurnerLayout;
