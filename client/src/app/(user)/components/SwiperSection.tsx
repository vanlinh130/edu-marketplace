"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { TiChevronLeft } from "react-icons/ti";
import { TiChevronRight } from "react-icons/ti";
import Image from "next/image";
import { useProductsQuery } from "@/queries/useProducts";

const SwiperSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const { data: products } = useProductsQuery();

  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        breakpoints={{
          "@0.75": { slidesPerView: 2, spaceBetween: 20 },
          "@1.00": { slidesPerView: 3, spaceBetween: 40 },
          "@1.50": { slidesPerView: 4, spaceBetween: 50 },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {products?.data.filter((product) => product.is_free === true)
          .map((product, index) => (
            <SwiperSlide
              key={index}
              className="col-span-1 bg-[#fff] rounded-[10px] flex border-[1px] border-[#eee] border-solid hover:shadow"
            >
              <div className="flex flex-col">
                <Link href={`/san-pham/${product.slug}`}>
                  <div className="relative h-[140px] w-full">
                    <Image
                      src={product.thumbnail_url || ''}
                      alt=""
                      fill
                      className="object-cover rounded-t-[10px]"
                    />
                  </div>
                </Link>
                <div className="p-[15px] text-center">
                  <div className="mt-2.5 mb-[5px]">
                    <Link href={`/san-pham/${product.slug}`}>
                      <h2 className="text-[16px] leading-[24px] font-bold capitalize text-[#AE0085]">
                        {product.title}
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

        <div
          ref={nextRef}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10  cursor-pointer"
        >
          <TiChevronLeft className="text-[24px]" />
        </div>
        <div
          ref={prevRef}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
        >
          <TiChevronRight className="text-[24px]" />
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperSection;
