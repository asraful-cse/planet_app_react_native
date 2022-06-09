import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Pressable,
} from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import PlanetHeader from "../components/planet-header";
import Text from "../components/text/text";
import {
  MercurySvg,
  EarthSvg,
  JupiterSvg,
  MarsSvg,
  NeptuneSvg,
  SaturnSvg,
  UranusSvg,
  VenusSvg,
} from "../svg";

// -------------------------------------------------------------
const PlanetSection = ({ title, value }) => {
  return (
    <View style={styles.planetSection}>
      <Text preset="h4" style={{ textTransform: "uppercase" }}>
        {title}
      </Text>
      <Text preset="h4">{value}</Text>
    </View>
  );
};
// -------------------------------------------------------------
export default function Details({ navigation, route }) {
  const planet = route.params.planet;
  const { name, description, rotationTime, revolutionTime, radius, avgTemp } =
    planet;
  console.log("PLANET-------->", planet);

  const renderImage = (name) => {
    switch (name) {
      case "mercury":
        return <MercurySvg />;
      case "earth":
        return <EarthSvg />;
      case "jupiter":
        return <JupiterSvg />;
      case "mars":
        return <MarsSvg />;
      case "neptune":
        return <NeptuneSvg />;
      case "saturn":
        return <SaturnSvg />;
      case "uranus":
        return <UranusSvg />;
      case "venus":
        return <VenusSvg />;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true} />
      <ScrollView>
        <View style={styles.imageView}>{renderImage(name)}</View>

        <View style={styles.detialView}>
          <Text preset="h2" style={styles.name}>
            {name}
          </Text>
          <Text preset="h4" style={styles.description}>
            {description}
          </Text>
          <Pressable style={styles.source}>
            <Text>Source : </Text>
            <Text style={styles.wikipedia}>Wikipedia</Text>
          </Pressable>
        </View>

        <View style={{ height: 40 }}></View>

        <PlanetSection title="ROTATION TIME" value={rotationTime} />
        <PlanetSection title="REVOLUTION TIME" value={revolutionTime} />
        <PlanetSection title="RADIUS" value={radius} />
        <PlanetSection title="AVERAGE TEMP." value={avgTemp} />
      </ScrollView>
    </SafeAreaView>
  );
}
// ---------------------------------------------------------------
// ---------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  imageView: {
    padding: spacing[10],
    alignItems: "center",
    justifyContent: "center",
  },
  detialView: {
    marginTop: spacing[8],
    marginHorizontal: spacing[6],
  },
  name: {
    textTransform: "uppercase",
    textAlign: "center",
    alignItems: "center",
    color: colors.white,
  },
  description: {
    textAlign: "center",
    marginTop: spacing[5],
    lineHeight: 21,
  },
  source: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing[6],
  },
  wikipedia: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  planetSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[4],
    borderColor:colors.white,
    marginHorizontal: spacing[6],
    marginBottom: spacing[4],
  },
});
