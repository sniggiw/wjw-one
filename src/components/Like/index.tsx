import { Image, View, Text } from "@tarojs/components";
import { useState } from "react";
import { Random } from "mockjs";

export default function Like() {
  const [isLike, setIsLike] = useState(false);
  const handleClick = () => {
    setIsLike(!isLike);
  };

  return (
    <View onClick={handleClick} className="flex items-center h-full">
      {isLike ? (
        <Image
          src={require(`@/static/moreOperationsIcons/like_selected.png`)}
          className="w-6 h-6"
        />
      ) : (
        <Image
          src={require(`@/static/moreOperationsIcons/like.png`)}
          className="w-6 h-6"
        />
      )}
      <Text className="text-xs text-gray-400 ml-1">{Random.integer(0, 10000)}</Text>
    </View>
  );
}
