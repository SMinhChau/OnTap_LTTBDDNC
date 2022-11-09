import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import images from "../assets/index";

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewImg}>
        <Image style={styles.logo} source={{ uri: images.background }} />
      </View>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  viewImg: {
    backgroundColor: "#000",
    height: "50%",
    width: "100%",
    resizeMode: "contain",
  },
  logo: {
    height: 300,
    resizeMode: "contain",
  },
});
