import Typography from "../../shared/components/ui/typography";
import Screen from "../../shared/components/templates/screen";
import Box from "../../shared/components/ui/box";
import SignInForm from "../../modules/sign-in/components/sign-in-form";
import { router } from "expo-router";

const SignInScreen = () => {
  return (
    <Screen>
      <Box gap={16} mb={16} pt={72}>
        <Typography textAlign="center" variant="headline1" fontWeight="700">
          Login
        </Typography>
        <Typography variant="paragraph1">
          Login to continue using the app
        </Typography>
      </Box>

      <SignInForm />

      <Box
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        mt={16}>
        <Typography>Don't have an account? </Typography>
        <Typography
          variant="link"
          fontWeight="600"
          onPress={() => router.push("/auth/sign-up")}>
          Sign up
        </Typography>
      </Box>
    </Screen>
  );
};

export default SignInScreen;
