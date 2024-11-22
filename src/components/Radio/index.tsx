import Like from "@/components/Like";
import { Image, Text, View } from "@tarojs/components";
import { Random } from "mockjs";

export default function Radio() {
  return (
    <View className="p-4 mb-4 bg-white">
      <View className="text-center text-xs text-slate-400 pb-6">
        - 收音机 -
      </View>
      <View>
        <View className="relative">
          <Image
            src={`https://picsum.photos/id/${Random.integer(1, 200)}/200/150`}
            className="w-full rounded-lg"
          />
          <View className="absolute top-2 left-2 flex items-end gap-2 text-white">
            <Text className="text-sm font-bold leading-none">ONE</Text>
            <Text className="text-xs leading-none">
              第{Random.integer(1, 9999)}期
            </Text>
          </View>
        </View>

        <View className="w-full flex justify-between items-center gap-6 px-2 py-4">
          <View className="flex items-center gap-3">
            <Image
              src={`https://picsum.photos/id/${Random.integer(200, 300)}/50/50`}
              className="w-6 h-6 rounded-full"
            />
            <Text className="text-xs text-slate-400">{Random.cname()}</Text>
          </View>
          <View className="flex items-center gap-6">
            <Like />
            <Image
              src={require(`@/static/moreOperationsIcons/share.png`)}
              className="w-6 h-6"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
