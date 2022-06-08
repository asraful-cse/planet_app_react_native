import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Text from "../components/text/text";
import { colors } from "../theme/colors";
import PlanetHeader from "../components/planet-header";

export default function Details({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true}/>
      <Text style={{ color: colors.green }}> This is a Details Page</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
