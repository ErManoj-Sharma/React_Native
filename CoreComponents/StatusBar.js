import { View, Button, StatusBar } from "react-native";

const logoImage = require("./assets/adaptive-icon.png");
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      {/* status bar is specific to andriod */}
      <StatusBar
        backgroundColor={green} // change background color
        barStyle={"default"} // dark-content , light-content
        hidden // hide status bar
      />
    </View>
  );
}
