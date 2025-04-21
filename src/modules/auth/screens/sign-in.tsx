import Box from "@/shared/components/ui/box";
import Typography from "@/shared/components/ui/typography";
import SignInForm from "@/modules/auth/components/sign-in-form";
import { router } from "expo-router";
import Screen from "@/shared/components/templates/screen";

const SignInScreen = () => {
  return (
    <Screen>
      <Box style={{ gap: 16, marginBottom: 16, paddingTop: 72 }}>
        <Typography
          style={{ textAlign: "center" }}
          variant="headline1"
          fontWeight="700">
          Login
        </Typography>
        <Typography variant="paragraph1">
          Login to continue using the app
        </Typography>
      </Box>

      <SignInForm />

      <Box
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 16,
        }}>
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
