import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";
import profile from "./assets/profile.jpg";

function App() {
  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.image} />

      <View style={styles.detailContainer}>
        <Text style={styles.label}>School</Text>
        <Text style={[styles.label, styles.info]}>Codetraingh</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Email Address</Text>
        <Text style={[styles.label, styles.info]}>ablorhgideon@gmail.com</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label2}>Name</Text>
        <Text style={[styles.label, styles.info]}>Gideon A. Osekre</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label2}>Nick Name</Text>
        <Text style={[styles.label, styles.info]}>Escobar</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label2}>Emergency Contact</Text>
        <Text style={[styles.label, styles.info]}>+233 (0) 24 776 4481</Text>
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>UPDATE PROFILE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  detailContainer: {
    justifyContent: "center",
    marginVertical: 6,
    paddingHorizontal: 40,
  },
  image: {
    marginTop: 70,
    width: 120,
    height: 120,
    marginBottom: 40,
    alignSelf: "center",
    borderRadius: 60,
  },
  label: {
    color: "#777777",
    fontSize: 15,
  },
  info: {
    color: "black",
    fontSize: 17,
  },
  label2:{
    color: "#0c96f1",
  },
  btn: {
    alignSelf: "center",
    backgroundColor: "green",
    borderRadius: 50,
    marginTop: 60,
    paddingVertical: 15
  },
  text:{
    color: "#fff",
    marginHorizontal: 100
  },
});

export default App;
