import { View, Text, Image, ImageBackground } from "react-native";

const logoImage = require("./assets/adaptive-icon.png");
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>


      {/* Image Background Core Component  */}
      <ImageBackground source={logoImage} style={{ flex: 1 }}>
        <Text>IMAGE TEXT</Text>
      </ImageBackground>



      {/* Image Core Component */}
      <Image source={logoImage} style={{ width: 300, height: 300 }} />
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={{ width: 300, height: 300 }}
      />
      {/* Image Core Component */}



      {/* Text Core Component */}
      <Text>
        <Text style={{ color: "white" }}>Hello</Text> World
      </Text>
      {/* Text Core Component */}



      {/* View Core Component */}
      <View style={{ backgroundColor: "blue", height: 200, width: 200 }}></View>
      <View
        style={{ backgroundColor: "green", height: 200, width: 200 }}
      ></View>
      {/* View Core Component */}
    </View>
  );
}
