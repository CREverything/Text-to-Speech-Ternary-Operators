import * as Speech from "expo-speech";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Header } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Alert } from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  speak = () => {
    var thingToSay = this.state.name;

    thingToSay == ""
      ? Alert.alert("Please type something to convert.")
      : Speech.speak(thingToSay);
  };

  render() {
    return (
      <View style={styles.container}>
        <Header centerComponent={{ text: "Text2Speech" }} />
        <TextInput
          placeholder="Enter the word"
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
          style={{
            borderRadius: 5,
            borderWidth: 2,
            marginTop: 100,
            paddingLeft: 10,
            width: 100,
            height: 20,
          }}
        ></TextInput>
        <TouchableOpacity
          style={{ borderRadius: 5, backgroundColor: "blue", marginTop: 50 }}
          onPress={this.speak}
        >
          <Text style={{ color: "white" }}>Convert the Text to Speech</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
