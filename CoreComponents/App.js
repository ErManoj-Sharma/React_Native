import { View, Alert, Button } from "react-native";
import Greet from "./components/Greet";
const logoImage = require("./assets/adaptive-icon.png");
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
    <Greet name="Manoj"/>
    <Greet name="Mj"/>
    </View>
  );
}
