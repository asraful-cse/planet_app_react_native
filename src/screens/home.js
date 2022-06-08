import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  keyExtractor,
  Pressable,
} from "react-native";
import React from "react";
import Text from "../components/text/text";
import PlanetHeader from "../components/planet-header";
import { colors } from "../theme/colors";
import { PLANET_LIST } from "../data/planet-list";
import { spacing } from "../theme/spacing";
import { AntDesign } from "@expo/vector-icons";
export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <FlatList
        contentContainerStyle={styles.list}
        data={PLANET_LIST}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => {
          const { name, color } = item;
          return (
            <Pressable
              onPress={() => {
                navigation.navigate("Details", { planet: item });
              }}
              style={styles.item}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={[styles.circle, { backgroundColor: color }]}
                ></View>
                <Text style={styles.itemName} preset="h4">
                  {name}
                </Text>
              </View>
              <AntDesign name="right" size={16} color="white" />
            </Pressable>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing[4],
  },

  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },

  itemName: {
    marginLeft: spacing[2],
    textTransform: "uppercase",
  },

  list: {
    padding: spacing[2],
  },
  separator: {
    borderBottomColor: colors.white,
    borderWidth: 0.5,
  },
});
