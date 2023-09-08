import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>React Native Stylesheet Api <Text style={styles.boldText}>In Bold</Text></Text>
      </View>
      <View style={[styles.lightBlueBg, styles.box, styles.boxShadow]}>
        Light Blue Box
      </View>
      <View style={[styles.lightGreenBg, styles.box, styles.andriodShadow]}>
        Light Green Box
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
  },
  darkMode: {
    backgroundColor: "black",
    color: "white",
  },
  darkModeText: {
    color: "white",
  },
  boldText:{
    fontWeight: "bold"
  },
  title: {
    backgroundColor: "red",
    color: "white",
  },
  box: {
    width: 250,
    height: 250,
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
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6, // boxShadow only apples to IOS
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  andriodShadow: {
    elevation: 10,
    shadowColor: "#333333",
  },
});

// Note: Border Radius in View is Application on Adnroid and IOS,
//  while borderRadius in Text only apply on Android

// boxShadow: h-offset v-offset blur spread color (IOS)
// to apply shadow on andriod we use elivation property

// Style of View(div) is not inherted in child (Text),
// we need to define style in child separately
// Style inhertitence suppoerted in Text subchilds

// Inhetetice of Style for View to Text not work , but Text to Text works