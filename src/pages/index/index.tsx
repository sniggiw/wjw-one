import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function Index() {
  useLoad(() => {
    console.log("Page Index loaded.");
  });

  return (
    <View className="text-rose-600">
      <Text>This is wjw one project!</Text>
    </View>
  );
}
