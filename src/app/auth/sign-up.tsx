import Box from "../../shared/components/ui/box";
import Screen from "../../shared/components/templates/screen";
import Typography from "../../shared/components/ui/typography";
import { router } from "expo-router";
import SignUpForm from "@/modules/sign-up/components/sign-up-form";
import ChevronLeftIcon from "@/shared/components/icons/chevron-left";

const SignUpScreen = () => {
  return (
    <Screen>
      <ChevronLeftIcon onPress={() => router.back()} color="overlay" />

      <Box flex={1} justifyContent="center" pt={48}>
        <Box mb={16}>
          <Typography textAlign="center" variant="headline1" fontWeight="700">
            Sign up
          </Typography>
          <Typography mt={16} variant="paragraph1">
            Enter your personal information
          </Typography>
        </Box>

        <SignUpForm />
      </Box>
    </Screen>
  );
};

export default SignUpScreen;
