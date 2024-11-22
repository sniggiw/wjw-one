import IndexItem from "@/components/IndexItem";
import { Swiper, SwiperItem } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function Index() {
  useLoad(() => {
    console.log("Page Index loaded.");
  });

  return (
    <Swiper className="indexSwiper">
      <SwiperItem className="indexSwiperItem">
        <IndexItem />
      </SwiperItem>
      <SwiperItem className="indexSwiperItem">
        <IndexItem />
      </SwiperItem>
      <SwiperItem className="indexSwiperItem">
        <IndexItem />
      </SwiperItem>
    </Swiper>
  );
}
