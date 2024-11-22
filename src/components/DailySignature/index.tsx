import { Image, Text, View } from "@tarojs/components";
import { Random } from "mockjs";
import Favorite from "../Favorite";
import Like from "../Like";

export default function DailySignature() {
  return (
    <View className="p-4 bg-white">
      <View className="flex flex-col items-center rounded-lg overflow-hidden shadow-lg">
        <Image
          src="https://picsum.photos/200/150"
          className="w-full rounded-lg"
        />
        <View className="pt-2 pb-5 text-xs text-slate-400">
          摄影｜{Random.name()}
        </View>
        <View className="w-full text-zinc-800 text-sm px-4">
          {Random.csentence(10, 100)}
        </View>
        <View className="flex items-center text-xs mt-14 mb-6">
          <Text className="text-slate-400">{Random.name()}</Text>
        </View>
      </View>
      <View className="moreOperations flex items-center px-2 pt-6 pb-3">
        <View className="mr-auto flex items-center gap-1">
          <Image
            src={require(`@/static/moreOperationsIcons/square.png`)}
            className="w-6 h-6"
          />
          <View className="text-xs text-slate-400">小记</View>
        </View>
        <View className="flex gap-6">
          <Image
            src={require(`@/static/moreOperationsIcons/write.png`)}
            className="w-6 h-6"
          />
          <Favorite />
          <Like />
          <Image
            src={require(`@/static/moreOperationsIcons/share.png`)}
            className="w-6 h-6"
          />
        </View>
      </View>
    </View>
  );
}
