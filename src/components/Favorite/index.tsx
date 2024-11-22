import { Image, View } from "@tarojs/components";
import { useState } from "react";

export default function Favorite() {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View onClick={handleClick}>
      {isFavorite ? (
        <Image
          src={require(`@/static/moreOperationsIcons/favorite_selected.png`)}
          className="w-6 h-6"
        />
      ) : (
        <Image
          src={require(`@/static/moreOperationsIcons/favorite.png`)}
          className="w-6 h-6"
        />
      )}
    </View>
  );
}
