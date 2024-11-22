import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function Discovery() {
  useLoad(() => {
    console.log("Page Discovery loaded.");
  });

  return (
    <View className="discovery">
      <Text>This is discovery page!</Text>
    </View>
  );
}
