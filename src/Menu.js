import {
  Animated,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "./compoment/Header";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useEffect, useMemo, useRef, useState } from "react";
import data from "./data";
let listOrder = [];

function Menu({ navigation }) {
  const [selectedIdCenter, setselectedIdCenter] = useState(null);
  const [selectedIdBottom, setSelectedIdBottom] = useState(null);

  const [fullList, setFullList] = useState(data);
  const [title, setTitle] = useState("");

  // Fillerter FlatList Item d
  const filteredList = useMemo(() => {
    if (title.toUpperCase() === "") return fullList;
    return fullList.filter(
      (item) => title.toUpperCase() === item.title.toUpperCase()
    );
  }, [title, fullList]);

  const onClick = (title) => () => {
    setTitle(title);
  };

  //  Add to list Order
  const handelOrder = (item1) => {
    let flag = false;
    listOrder.map((x) => {
      if (x.id === item1.id) {
        x.total = x.total + 1;
        flag = true;
      }
    });

    if (!flag) {
      listOrder.push({ ...item1, total: 1 });
    }
  };
  // Top FlatList
  const renderItem = ({ item }) => {
    const Item = ({ item, onPress }) => (
      <TouchableOpacity
        style={[styles.item, styles.flex_center_row]}
        onPress={onPress}
      >
        <Image style={styles.FlatList_img} source={{ uri: item.url }} />
        <View style={[styles.item_about]}>
          <Text style={[styles.title, { height: "40%", width: "90%" }]}>
            {item.name}
          </Text>
          <Text
            style={[styles.title_discrible, { height: "35%", width: "90%" }]}
          >
            Công ty Cổ Phần Phúc Long Heritage - ĐKKD: 0316 871719 do sở KHĐT
            TPHCM cấp lần đầu ngày 21/05/2021
          </Text>
          <View
            style={[styles.item_about__bottom, { height: "25%", width: "90%" }]}
          >
            <Text style={styles.price}>{item.price}</Text>
            <TouchableOpacity
              style={styles.btn_content}
              onPress={() => navigation.navigate("Cart", { list: listOrder })}
            >
              <Text style={styles.btn_content__text}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );

    return <Item item={item} onPress={() => setselectedIdCenter(item.id)} />;
  };

  // FlatList Button
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "Coffee",
    },
    {
      id: 2,
      title: "Tea",
    },
    {
      id: 3,
      title: "Milk",
    },
    {
      id: 4,
      title: "",
    },
  ]);

  const ItemCenter = ({ item, onTitle, backgroundColor, textColor }) => (
    <TouchableOpacity
      onPress={onClick(onTitle)}
      style={[styles.item, styles.item_center, backgroundColor]}
    >
      <Text style={[styles.title_item_center, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderItemCenter = ({ item }) => {
    const backgroundColor = item.id === selectedIdCenter ? "#808000" : "";
    const color = item.id === selectedIdCenter ? "white" : "black";

    return (
      <ItemCenter
        item={item}
        onTitle={item.title}
        onPress={() => setselectedIdCenter(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  // Main

  const ItemBottom = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, backgroundColor, styles.touch_botom]}
    >
      <View style={styles.f_image}>
        <Image style={styles.FlatList_img_bottom} source={{ uri: item.url }} />
      </View>

      <View style={[styles.f_title, { flexDirection: "column" }]}>
        <Text style={[styles.f_title__title]}>{item.name}</Text>
        <Text style={styles.f_title__price}>{item.price}</Text>
      </View>
      <View style={[styles.cart_bottom]}>
        <Text style={styles.price}>{item.title}</Text>
        <TouchableOpacity
          style={styles.btn_content_bottom}
          // onPress={() => navigation.navigate("Cart", { list: listOrder })}
          onPress={() => handelOrder(item)}
        >
          <Text style={styles.btn_content__text}>Add</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const renderItemBottom = ({ item }) => {
    const backgroundColor = item.id === selectedIdBottom ? "#2f3337" : "#000";
    const color = item.id === selectedIdBottom ? "white" : "black";

    return (
      <ItemBottom
        item={item}
        onPress={() => setSelectedIdBottom(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, [animation]);
  const animatedStyles = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "360deg"],
        }),
      },
    ],
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <Ionicons name="menu" size={30} />
        <View style={[styles.flex_center_row]}>
          <Text style={styles.header_title}>Viet Nam</Text>
          <MaterialIcons
            style={styles.icon_right}
            color={"#808000"}
            name="arrow-drop-down"
            size={30}
          />
        </View>
        <View style={[styles.flex_center_row]}>
          <Ionicons
            style={styles.icon_right}
            name="chatbox-outline"
            size={30}
          />
          <TouchableOpacity>
            <Animated.View style={[animatedStyles]}>
              <Ionicons
                style={[styles.icon_right]}
                name="notifications-outline"
                size={30}
              />
            </Animated.View>
          </TouchableOpacity>

          {/* <Ionicons
            style={[
              styles.icon_right,
              // { transform: [{ rotate: rotation }] }
            ]}
            name="notifications-outline"
            size={30}
          /> */}
        </View>
      </Header>
      <View style={[styles.FlatList, styles.flex_center_row]}>
        <FlatList
          data={data}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          scrollEventThrottle={32}
        />
      </View>

      <View style={[styles.FlatList_center, styles.flex_center_row]}>
        <FlatList
          data={categories}
          renderItem={renderItemCenter}
          keyExtractor={(item) => item.id}
          extraData={selectedIdCenter}
          horizontal
        />
      </View>

      <View style={[styles.FlatList_bottom, styles.flex_center_row]}>
        <FlatList
          data={filteredList}
          renderItem={renderItemBottom}
          numColumns={2}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEBCD",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  flex_center_row: {
    alignItems: "center",
    flexDirection: "row",
  },
  icon_right: {
    paddingLeft: 10,
  },
  header_title: {
    color: "#808000",
    fontSize: 18,
  },

  // item
  FlatList: {
    marginVertical: 20,
    width: 360,
    height: "20%",
  },
  FlatList_img: {
    height: 150,
    width: 135,
    resizeMode: "contain",
  },
  FlatList_img_bottom: {
    height: 150,
    width: 135,
    resizeMode: "contain",
  },
  item: {
    width: 360,
    backgroundColor: "#5B715A",
    borderColor: "#808000",
    borderWidth: 2,
    borderRadius: "10%",
  },
  item_about: {
    width: 220,
    height: "80%",
    alignItems: "flex-start",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  title_discrible: {
    fontSize: 14,
    color: "#fff",
  },
  price: {
    fontSize: 22,
    textDecorationStyle: "solid",
    color: "yellow",
  },
  //
  btn_content: {
    width: 100,
    height: 35,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#808000",
    borderWidth: 2,
    // borderRadius: "10%",
    borderBottomRightRadius: "10%",
    borderTopLeftRadius: "10%",
    backgroundColor: "#808000",
  },
  btn_content_bottom: {
    width: 50,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#808000",
    borderWidth: 2,
    borderBottomRightRadius: "10%",
    borderTopLeftRadius: "10%",
    backgroundColor: "#808000",
  },
  item_about__bottom: {
    with: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  btn_content__text: {
    textTransform: "uppercase",
    color: "#fff",
  },

  // FlatList_center
  FlatList_center: {
    height: 40,
    width: "90%",
  },
  item_center: {
    width: 100,
    height: 40,
    marginRight: 20,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  title_item_center: {
    textAlign: "center",
  },
  // FlatList_bottom
  FlatList_bottom: {
    marginTop: 20,
    height: 460,
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  touch_botom: {
    marginRight: 15,
    height: 300,
    marginBottom: 15,
    width: "48%",
    // padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  f_image: {
    height: "60%",
  },
  f_title: {
    width: "100%",
    display: "flex",

    alignItems: "center",
    justifyContent: "space-between",
  },
  f_title__title: {
    fontSize: 16,
    color: "#fff",
  },
  f_title__price: {
    fontSize: 18,
    color: "#808000",
    fontWeight: "700",
  },
  cart_bottom: {
    paddingLeft: 10,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
