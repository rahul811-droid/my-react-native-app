import { Link } from "expo-router";
import { Text, View } from "react-native";

const Index = () => {
  return (
    <View
      style={{
        backgroundColor: "teal",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontWeight: "bold", color: "white", textAlign: "center" }}>
        Welcome to android application development! Happy Coding! make smile face
      </Text>
      <Link href="/about" style={{ marginTop: 20, color: "yellow" }}>
        Go to About
      </Link>
    </View>
  );
};

export default Index;
