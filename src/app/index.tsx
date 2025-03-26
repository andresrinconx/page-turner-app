import { Session } from "@supabase/supabase-js";
import { useEffect } from "react";
import { Redirect, Route } from "expo-router";
import { useState } from "react";
import supabase from "../lib/config/supabase";

const Root = () => {
  const [session, setSession] = useState<Session | null>(null);

  const getSession = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    setSession(session);
  };

  useEffect(() => {
    getSession();

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return <Redirect href={(session ? "(tabs)" : "sign-in") as Route} />;
};

export default Root;
