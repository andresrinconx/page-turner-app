import { Platform } from "react-native";
import { Tabs } from "expo-router";
import HapticTab from "../../components/global/haptic-tab";
import TabBarBackground from "../../components/global/tab-bar-background";
import { COLORS } from "../../lib/constants";
import BookIcon from "../../components/icons/book";
import ChartIcon from "../../components/icons/chart";
import SettingsIcon from "../../components/icons/settings";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Books",
          tabBarIcon: ({ color }) => <BookIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="insights"
        options={{
          title: "Insights",
          tabBarIcon: ({ color }) => <ChartIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
