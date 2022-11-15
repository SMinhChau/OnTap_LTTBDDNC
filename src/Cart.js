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
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

function Cart({ navigation }) {
  const [listCart, setListCart] = useState([]);

  // params
  const route = useRoute();
  useEffect(() => {
    if (route.params != null) setListCart(route.params.list);
  }, [listCart]);

  const handleCountTop = (cart) => {
    setListCart((items) => {
      items.map((item) => {
        if (item.id === cart.id) {
          console.log("item.id", item.id);
          return {
            ...item,
            total: item.total + 1,
          };
        } else {
          console.log("return", items);
          return [
            ...items,
            {
              ...cart,
              total: 1,
            },
          ];
        }
      });
    });
  };

  const handleCountDown = (cart) => {};

  const Item = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <View style={[styles.f_image, styles.fext_center]}>
          <Image
            style={styles.FlatList_img_bottom}
            source={{ uri: item.url }}
          />
        </View>

        <View style={[styles.f_title, styles.fext_center_collum]}>
          <Text style={[styles.f_title__title]}>{item.name}</Text>
          <Text style={styles.f_title__price}>{item.price}</Text>
        </View>

        <View style={[styles.cart_bottom]}>
          <TouchableOpacity
            style={styles.btn_count}
            onPress={() => handleCountTop(item)}
          >
            <Text>+</Text>
          </TouchableOpacity>
          <Text style={styles.count_item}>{item.total}</Text>
          <TouchableOpacity
            style={styles.btn_count}
            onPress={handleCountDown(item)}
          >
            <Text>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

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
        {listCart ? (
          <FlatList
            data={listCart}
            renderItem={Item}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text style={[styles.f_title__title]}>Giỏ hàng rỗng </Text>
        )}
      </View>
      <View style={styles.conten_total}>
        <Text style={[styles.f_title__title]}>Total: </Text>
        <Text style={[styles.f_title__title]}>{total}</Text>
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
  conten_total: {
    paddingTop: 20,
    width: "90%",
    height: "60%",

    flexDirection: "row",
  },
});
