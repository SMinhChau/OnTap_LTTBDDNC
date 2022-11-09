import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./Home";
import Menu from "./Menu";

const Tab = createBottomTabNavigator();

function TabsScreen({ navigation }) {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Menu") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Heart") {
              iconName = focused ? "heart" : "heart-outline";
            } else if (route.name === "Account") {
              iconName = focused
                ? "notifications-sharp"
                : "notifications-outline";
            } else if (route.name === "Account") {
              iconName = focused ? "person" : "person-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: "#808000",
          tabBarInactiveTintColor: "gray",
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: 90,
            // paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: "#000",
            // position: "absolute",
            borderTopWidth: 0,
          },
        })}
        tabBarOptions={{
          // activeTintColor: "#fff",
          // inactiveTintColor: "lightgray",
          activeBackgroundColor: "#000",
          inactiveBackgroundColor: "#000",
          style: {
            backgroundColor: "#CE4418",
            paddingBottom: 3,
          },
        }}
      >
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Tab.Screen
          name="Search"
          component={Home}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Tab.Screen
          name="Heart"
          component={Home}
          options={{ headerShown: false, tabBarVisible: false }}
        />

        <Tab.Screen
          name="Account"
          component={Home}
          options={{ headerShown: false, tabBarVisible: false }}
        />
      </Tab.Navigator>
    </>
  );
}

export default TabsScreen;
