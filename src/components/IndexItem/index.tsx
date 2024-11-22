import DailySignature from "@/components/DailySignature";
import Read from "@/components/Read";
import Radio from "@/components/Radio";
import SlidToPrevious from "@/components/SlideToPrevious";
import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";

export default function IndexItem() {
  useLoad(() => {
    console.log("Page Index Item loaded.");
  });

  return (
    <View className="indexItem">
      <DailySignature />
      <Read />
      <Radio />
      <SlidToPrevious />
    </View>
  );
}
