import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import images from "../assets/index";

import Icon from "react-native-vector-icons/FontAwesome";

function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewImg}>
        <Image style={styles.logo} source={{ uri: images.background }} />
      </View>
      <View style={styles.content_top}>
        <View style={styles.content}>
          <Text style={styles.title}>Discover premium coffee around you</Text>
        </View>
      </View>
      <View style={[styles.content_bottom, styles.center_center]}>
        <TouchableOpacity
          style={[
            styles.btn_content,
            styles.center_center,
            { flexDirection: "row" },
          ]}
        >
          <Icon name="facebook-square" color="blue" size={30} />
          <Text style={styles.text_btn}>Sing in with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btn_content,
            styles.center_center,
            { flexDirection: "row" },
          ]}
        >
          <Icon name="google-plus" color="blue" size={30} />
          <Text style={styles.text_btn}>Sing in with Google</Text>
        </TouchableOpacity>

        <Text style={styles.title_center}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("TabsScreen")}>
          <Text style={styles.title_bottom}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  viewImg: {
    height: "50%",
    width: "100%",
    resizeMode: "contain",
    justifyContent: "flex-end",
  },
  logo: {
    height: 400,
    resizeMode: "contain",
  },
  content_top: {
    width: "80%",
    height: "15%",
  },
  content: {
    width: "60%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  content_bottom: {
    height: "35%",
    width: "100%",
    justifyContent: "space-around",
  },
  center_center: {
    display: "flex",

    alignItems: "center",
  },
  btn: {
    width: "80%",

    paddingVertical: 10,
  },
  btn_content: {
    width: "85%",
    height: 55,
    paddingVertical: 10,
    justifyContent: "center",
    borderColor: "#808000",
    borderWidth: 2,
    borderRadius: "10%",
  },
  title: {
    fontSize: 30,
    color: "#fff",
  },
  title: {
    fontSize: 35,
    color: "#fff",
  },
  title_center: {
    fontSize: 20,
    color: "#fff",
  },
  title_bottom: {
    fontSize: 24,
    color: "yellow",
    textDecorationLine: "underline",
    textTransform: "uppercase",
  },
  text_btn: {
    fontSize: 22,
    paddingLeft: 10,
    color: "#fff",
    fontWeight: "500",
    textTransform: "uppercase",
  },
});
