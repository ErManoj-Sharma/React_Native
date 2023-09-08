import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Stylesheet Api</Text>

      <View style={[styles.lightBlueBg, styles.box]}>Light Blue Box</View>
      <View style={[styles.lightGreenBg, styles.box]}>Light Green Box</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
  },
  title: {
    backgroundColor: "red",
    color: "white",
  },
  box: {
    width: 100,
    height: 100,
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    //margin:10
    marginVertical: 10,
    // border
    borderWidth: 2,
    borderColor: "white",
    borderStyle: "solid",
    borderRadius: "5",
    // backgroundColor: "white", // property at last take presedence
  },
  lightBlueBg: {
    backgroundColor: "lightblue",
  },
  lightGreenBg: {
    backgroundColor: "lightgreen",
  },
});

// Note: Border Radius in View is Application on Adnroid and IOS,
//  while borderRadius in Text only apply on Android
