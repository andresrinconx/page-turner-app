import Box from "../components/ui/box";
import Screen from "../components/templates/screen";
import Typography from "../components/ui/typography";
import SignInForm from "../components/sign-in/sign-in-form";

const SignInScreen = () => {
  return (
    <Screen contentContainerStyle={{ flex: 1, justifyContent: "center" }}>
      <SignInForm />

      <Box>
        <Typography>Don't have an account?</Typography>
        <Typography>Sign up</Typography>
        {/* href="/sign-up" */}
      </Box>
    </Screen>
  );
};

export default SignInScreen;
