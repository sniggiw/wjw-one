import { View, Text } from "@tarojs/components";

export default function SlideToPrevious() {
  const text = "<<  滑动查看 上一个";
  return (
    <View className="w-full h-20 flex justify-center items-center text-xs text-slate-400 bg-white">
      <Text className="scale-90 leading-none">{text}</Text>
    </View>
  );
}
