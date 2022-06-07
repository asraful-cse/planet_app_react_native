import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import { colors } from "./src/theme/colors";
import { spacing } from "./src/theme/spacing";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    "AntoniaText-Medium": require("./assets/fonts/AntoniaText-Medium.ttf"),
    "FontsFree-Net-Drafting-Bold": require("./assets/fonts/FontsFree-Net-BEJITA-Bold.ttf"),
    "FontsFree-Net-Drafting-Regular": require("./assets/fonts/FontsFree-Net-DraftingMono-Regular.ttf"),
  });
  if (! loaded) {
     return <Text>Font is loading.....</Text>
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={{
            marginTop: spacing[24],
            backgroundColor: colors.cadetblue,
            fontSize: 30,
            textAlign: "center",
          }}
        >
          Simple React Native app
        </Text>
        <Text style={{ fontSize: 30, textAlign: "center" , fontFamily:'FontsFree-Net-Drafting-Regular'}}>
          React native Apps
        </Text>
        <StatusBar style="auto" />
      </View>

      <View>
        <Image
          style={{
            height: 150,
            width: 150,
            alignSelf: "center",
            marginTop: spacing[8],
            marginBottom: spacing[8],
          }}
          source={require("./assets/favicon.png")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.burlywood,
  },
});
