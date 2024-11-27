import { View, Image } from "@tarojs/components";
import classNames from "classnames";
import { useState } from "react";
import styles from "./index.module.scss";
import { Random } from "mockjs";

export default function Filter() {
  const [isFold, setIsFold] = useState(true);

  const [list, setList] = useState([
    ...[...Array(10)].map((_, index) => {
      return {
        id: index + 1,
        photo: `https://picsum.photos/id/${Random.integer(1, 100)}/100/100`,
        date: Random.date("yyyy-MM-dd"),
      };
    }),
  ]);
  
  return (
    <View
      className={classNames(
        "fixed top-0 left-0 w-full bg-white z-10 px-4 flex flex-col",
        !isFold && "h-screen"
      )}
    >
      <View
        className="flex justify-between items-center h-[60px]"
        onClick={() => setIsFold(!isFold)}
      >
        <View className="flex items-end gap-1 w-full">
          <View className="text-xl leading-none">27</View>
          <View className="leading-none text-xs">Nov.2024</View>
          <View
            className={classNames(styles.triangle, !isFold && styles.active)}
          ></View>
          <View className="text-xs text-slate-500 ml-auto">
            地球 对流层 -273.15℃
          </View>
        </View>
      </View>

      {!isFold && (
        <View className={classNames("relative bg-white flex flex-col flex-1 pb-[80px] overflow-y-scroll", styles.scrollContainer)}>
          <View className="flex justify-between items-center py-4">
            <View className="border-b border-slate-100 w-[40%]"></View>
            <View className="text-sm text-slate-400">11月</View>
            <View className="border-b border-slate-100 w-[40%]"></View>
          </View>
          <View className="flex justify-between flex-wrap w-full">
            {list.map((item) => {
              return (
                <View
                  key={item.id}
                  className="w-5/12 flex flex-col items-center"
                >
                  <Image src={item.photo} className="w-full h-24" />
                  <View className="py-2 text-slate-500 text-sm">
                    {item.date}
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      )}

      {!isFold && (
        <View className="fixed bottom-0 left-0 w-full flex justify-center items-center bg-slate-50 text-sm text-slate-500 h-[80px]">
          {Random.date("yyyy-MM-dd")}
        </View>
      )}
    </View>
  );
}
