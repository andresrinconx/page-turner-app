import { ThemedText } from "@/src/components/ui/ThemedText";
import { ThemedView } from "@/src/components/ui/ThemedView";

export default function HomeScreen() {
  return (
    <ThemedView className="flex-1 bg-white flex-row items-center gap-8">
      <ThemedText type="title" className="text-red-600">
        Welcome!
      </ThemedText>
    </ThemedView>
  );
}
