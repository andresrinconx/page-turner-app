import Screen from "../../../shared/components/templates/screen";
import Button from "../../../shared/components/ui/button";
import signOut from "../../../modules/settings/actions/sign-out";

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
