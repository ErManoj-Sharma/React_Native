import { View, Button, Text, Modal } from "react-native";
import { useState } from "react";
const logoImage = require("./assets/adaptive-icon.png");
export default function App() {
  const [isModelVisible, setIsModelVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="Press"
        onPress={() => {
          console.log("Button pressed");
          setIsModelVisible(true);
        }}
        color="midnightblue"
      />
      <Modal
        visible={isModelVisible}
        onRequestClose={() => {
          setIsModelVisible(false);
        }} //user press back button
        animationType="slide" // fade , none
        presentationStyle="pageSheet" //formSheet, fullscreen
      >
        <View style={{ flex: 1, backgroundColor: "pink", padding: 60 }}>
          <Text>Hello from modal</Text>
          <Button
            title="Close"
            onPress={() => {
              console.log("Button pressed");
              setIsModelVisible(false);
            }}
            color="midnightblue"
          />
        </View>
      </Modal>
    </View>
  );
}
