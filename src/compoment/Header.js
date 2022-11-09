import { SafeAreaView, StyleSheet, Text, View } from "react-native";

function Header({ children }) {
  return <View style={styles.container}>{children}</View>;
}

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    display: "flex",
    paddingHorizontal: 15,
    backgroundColor: "#FFF8DC",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
