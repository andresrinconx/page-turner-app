import { useAuthStore } from "../lib/store/useAuthStore";
import { Redirect, Route } from "expo-router";

const Root = () => {
  const { user } = useAuthStore();

  return <Redirect href={(user ? "(tabs)" : "(auth)/sign-in") as Route} />;
};

export default Root;
