import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Recents from "./screens/Recents";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRoute="Home"
        activeColor="#02ad94"
        inactiveColor="#dedede"
        barStyle={{ backgroundColor: "#0f0f0f", padding: 4 }}
        style={{ backgroundColor: "#000" }}
        
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={30}  />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="camera-metering-spot" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Recents"
          component={Recents}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
