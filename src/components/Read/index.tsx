import Like from "@/components/Like";
import { Image, View } from "@tarojs/components";
import { Random } from "mockjs";

export default function Read() {
  return (
    <View className="p-4 mb-4 bg-white">
      <View className="text-center text-xs text-slate-400 pb-6">- 阅读 -</View>
      <View>
        <View className="text-md text-zinc-800">{Random.ctitle(4, 10)}</View>
        <View className="text-xs text-slate-400 pt-2 pb-4">
          文 / {Random.cname()}
        </View>
        <View className="text-sm text-gray-500 pb-2">
          {Random.csentence(10, 30)}
        </View>
        <Image
          src={`https://picsum.photos/id/${Random.integer(1, 200)}/200/150`}
          className="w-full rounded-lg"
        />
        <View className="w-full flex justify-end items-center gap-6 px-2 py-4">
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
