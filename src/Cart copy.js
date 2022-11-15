import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "./compoment/Header";
import Ionicons from "react-native-vector-icons/Ionicons";
import data from "./data";
import images from "../assets";
import { useState } from "react";

function Cart({ navigation }) {
  const [count, setCount] = useState(1);

  const handleCountUp = () => {
    setCount(() => count + 1);
  };

  const handleCountDown = () => {
    setCount(() => count - 1);
  };

  const Item = ({ item, index }) => (
    <View style={styles.item}>
      <View style={[styles.f_image, styles.fext_center]}>
        <Image
          style={styles.FlatList_img_bottom}
          source={{ uri: images.bacxiu }}
        />
      </View>

      <View style={[styles.f_title, styles.fext_center_collum]}>
        <Text style={[styles.f_title__title]}>{item.name}</Text>
        <Text style={styles.f_title__price}>{item.price}</Text>
      </View>

      <View style={[styles.cart_bottom]}>
        <TouchableOpacity style={styles.btn_count} onPress={handleCountUp}>
          <Text>+</Text>
        </TouchableOpacity>
        <Text style={styles.count_item}>{count}</Text>
        <TouchableOpacity style={styles.btn_count} onPress={handleCountDown}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  //   const renderItem = ({ item, index }) => <Item item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <Ionicons name="menu" size={30} onPress={() => navigation.goBack()} />
        <View style={styles.top_check}>
          <View></View>
          <Text style={styles.title_check}>Checkout</Text>
          <Ionicons
            style={styles.icon_right}
            name="chatbox-outline"
            size={30}
          />
        </View>
      </Header>
      {/* Flat List */}
      <View style={styles.container_FlatList}>
        <FlatList
          data={data}
          renderItem={Item}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEBCD",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  top_check: {
    width: "90%",

    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title_check: {
    fontSize: 18,
    fontWeight: "500",
  },
  container_FlatList: {
    height: "30%",
    width: "90%",
    resizeMode: "contain",
  },
  item: {
    width: "100%",
    height: 110,
    backgroundColor: "#fff",

    // borderWidth: 2,
    borderRadius: "10%",
    flexDirection: "row",
    marginTop: 10,
  },
  fext_center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  // img
  FlatList_img_bottom: {
    height: 90,
    width: 100,
    resizeMode: "contain",
  },
  f_image: {
    backgroundColor: "black",
    width: "30%",
    height: 110,
    borderLeftWidth: 2,
    borderTopLeftRadius: "10%",
    borderBottomLeftRadius: "10%",
    flexDirection: "row",
  },
  f_title: {
    width: "55%",

    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    paddingLeft: 20,
  },
  cart_bottom: {
    width: "14%",
    height: "100%",
    backgroundColor: "#808000",
    borderRadius: "10%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    margin: 2,
  },
  f_title__title: {
    fontSize: 16,
    width: "80%",
    color: "#000",
  },
  f_title__price: {
    fontSize: 18,
    color: "#808000",
    fontWeight: "700",
  },
  count_item: {
    fontSize: 20,
    fontWeight: "700",
  },
  btn_count: {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5%",
  },
});
