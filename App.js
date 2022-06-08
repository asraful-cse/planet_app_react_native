import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
 
} from "react-native";
// import { colors } from "./src/theme/colors";
// import { spacing } from "./src/theme/spacing";
import { useFonts } from "expo-font";
// import { typography } from "./src/theme/typography";
import Text from "./src/components/text/text";
import Home from "./src/screens/home";
import Details from "./src/screens/details";
// ---------------------------------------------------------------------------
// copy and install this package____
// npm install @react-navigation/native-stack
// npm install @react-navigation/native-stack
// npm install @react-navigation/native
// ---------------------------------------------------------------------------
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// ----------------------------------------------------------------------------
// copy to the native doc -----------------------------------------------------
const Stack = createNativeStackNavigator();
// ----------------------------------------------------------------------------

export default function App() {
  const [loaded] = useFonts({
    "Antonio-Regular": require("./assets/fonts/Antonio-Regular.ttf"),
    "Antonio-Medium": require("./assets/fonts/Antonio-Medium.ttf"),
    "Antonio-Bold": require("./assets/fonts/Antonio-Bold.ttf"),
  });

  if (!loaded) {
    return <Text>Font is loading.....</Text>;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
