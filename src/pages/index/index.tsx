import DailySignature from "@/components/DailySignature";
import Read from "@/components/Read";
import Radio from "@/components/Radio";
import SlidToPrevious from "@/components/SlideToPrevious";
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
      <Read />
      <Radio />
      <SlidToPrevious />
    </View>
  );
}
