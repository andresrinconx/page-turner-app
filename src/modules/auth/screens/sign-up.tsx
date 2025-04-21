import Box from "@/shared/components/ui/box";
import Typography from "@/shared/components/ui/typography";
import SignUpForm from "@/modules/auth/components/sign-up-form";
import ChevronLeftIcon from "@/shared/components/icons/chevron-left";
import { router } from "expo-router";
import Screen from "@/shared/components/templates/screen";

const SignUpScreen = () => {
  return (
    <Screen>
      <ChevronLeftIcon onPress={() => router.back()} color="overlay" />

      <Box style={{ flex: 1, justifyContent: "center", paddingTop: 48 }}>
        <Box style={{ marginBottom: 16 }}>
          <Typography
            style={{ textAlign: "center" }}
            variant="headline1"
            fontWeight="700">
            Sign up
          </Typography>
          <Typography style={{ marginTop: 16 }} variant="paragraph1">
            Enter your personal information
          </Typography>
        </Box>

        <SignUpForm />
      </Box>
    </Screen>
  );
};

export default SignUpScreen;
