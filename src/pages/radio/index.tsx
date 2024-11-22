import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function Radio() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="radio">
      <Text>This is radio page!</Text>
    </View>
  );
}
