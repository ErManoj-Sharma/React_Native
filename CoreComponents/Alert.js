import { View, Alert, Button } from "react-native";

const logoImage = require("./assets/adaptive-icon.png");
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="Alert"
        onPress={() => Alert.alert("Invalid data")}
        color="midnightblue"
      />
      <Button
        title="Alert2"
        onPress={() => Alert.alert("Invalid data", "DOB Incorrect")}
        color="midnightblue"
      />

      <Button
        title="Alert3"
        onPress={() =>
          Alert.alert("Invalid data", "DOB Incorrect", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
            },
            {
              text: "Ok",
              onPress: () => console.log("Ok Pressed"),
            },
          ])
        }
        color="midnightblue"
      />
    </View>
  );
}
