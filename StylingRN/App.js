import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Stylesheet Api</Text>

      <View style={[styles.lightBlueBg,styles.box]}>Light Blue Box</View>
      <View style={[styles.lightGreenBg,styles.box]}>Light Green Box</View>
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
    padding: 10,
    backgroundColor: "white", // property at last take presedence
  },
  lightBlueBg: {
    backgroundColor: "lightblue",
  },
  lightGreenBg: {
    backgroundColor: "lightgreen",
  },
});
