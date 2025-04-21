import { Tabs } from "expo-router";
import HapticTab from "@/shared/components/global/haptic-tab";
import TabBarBackground from "@/shared/components/global/tab-bar-background";
import { COLORS } from "@/shared/constants";
import BookIcon from "@/shared/components/icons/book";
import ChartIcon from "@/shared/components/icons/chart";
import SettingsIcon from "@/shared/components/icons/settings";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Books",
          tabBarIcon: ({ focused }) => (
            <BookIcon color={focused ? "primary" : "overlay"} />
          ),
        }}
      />
      <Tabs.Screen
        name="insights"
        options={{
          title: "Insights",
          tabBarIcon: ({ focused }) => (
            <ChartIcon color={focused ? "primary" : "overlay"} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <SettingsIcon color={focused ? "primary" : "overlay"} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
