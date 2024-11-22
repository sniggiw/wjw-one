import DailySignature from "@/components/DailySignature";
import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function Index() {
  useLoad(() => {
    console.log("Page Index loaded.");
  });

  return (
    <View>
      <DailySignature />
    </View>
  );
}
