import Ionicons from "@expo/vector-icons/Ionicons";

import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
/* IMPORT PAGES*/
import CameraScreen from "./screens/CameraScreen";
import ImageScreen from "./screens/ImageScreen";
import FeedScreen from "./screens/FeedScreen";

const Tab = createBottomTabNavigator();
/* Creation des Composants Screens 
function CameraScreen() {
  return (
    <View style={styles.page}>
      <Text>Camera</Text>
    </View>
  );
}

function ImageScreen() {
  return (
    <View style={styles.page}>
      <Text>Images</Text>
    </View>
  );
}

function FeedScreen() {
  return (
    <View style={styles.page}>
      <Text>Feed</Text>
    </View>
  );
}
*/

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Camera") {
            iconName = focused ? "camera" : "camera-outline";
          } else if (route.name === "Images") {
            iconName = focused ? "image" : "image-outline";
          } else if (route.name === "Feed") {
            iconName = focused ? "share-social" : "share-social-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Camera" component={CameraScreen} options={{ unmountOnBlur: true }} />
      <Tab.Screen name="Images" component={ImageScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

// TODO : REPRENDRE React Native 02 - Navigation partie installatio nde la nav bar avc exemple APP.js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
