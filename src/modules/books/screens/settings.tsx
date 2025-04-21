import signOut from "@/modules/auth/services/sign-out";
import Button from "@/shared/components/ui/button";
import Screen from "@/shared/components/templates/screen";

const SettingsScreen = () => {
  return (
    <Screen>
      <Button variant="ghost" onPress={() => signOut()}>
        Sign out
      </Button>
    </Screen>
  );
};

export default SettingsScreen;
