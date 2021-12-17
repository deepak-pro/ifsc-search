import React, { useState, useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function HomeScreen({ navigation }) {
  const [ifscCode, setIfscCode] = useState("SBIN0030344");

  const getIFSCData = (ifscCode) => {
    fetch("https://ifsc.razorpay.com/" + ifscCode)
      .then((response) => response.json())
      .then((data) => {
        if (data === "Not Found") {
          Alert.alert("Invalid IFSC");
        } else {
          console.log(data);
          navigation.navigate("Details", { data: data });
        }
      });
  };

  const handleChange = (text) => {
    setIfscCode(text);
  };

  const handleSubmit = () => {
    getIFSCData(ifscCode);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Search IFSC</Text>
      <TextInput
        autoCapitalize="characters"
        maxLength={11}
        style={styles.keyboard}
        onChangeText={handleChange}
        placeholder="Enter IFSC code here"
        onSubmitEditing={handleSubmit}
        value={ifscCode}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  keyboard: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    height: 50,
    marginHorizontal: 20,
    fontSize: 20,
  },
  button: {
    backgroundColor: "green",
    height: 50,
    margin: 20,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    marginHorizontal: 20,
  },
});
