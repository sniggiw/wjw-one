import Filter from "@/components/Filter";
import IndexItem from "@/components/IndexItem";
import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function Index() {
  useLoad(() => {
    console.log("Page Index loaded.");
  });

  return (
    <View className="pageIndex overflow-hidden pt-[60px]">
      <Filter />
      <IndexItem />
    </View>
  );
}
