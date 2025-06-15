import Image from "next/image";
import Link from "next/link";
import React from "react";
import data from "../../../data/data.json";
import { FaGifts } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { LikeIcon } from "@/components/icons";

const Gifts = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-2.5">
      <div className="px-2.5 pt-[30px] pb-[35px]">
        <div className="mb-[35px]">
          <h1 className="text-[#1E2132] text-[28px] font-bold">Quà tặng</h1>
        </div>
        <div className="flex flex-col">
          <div className="pt-3 pb-1.5 mx-5">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
              <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <div className="p-2.5">
                  <div className="flex items-center justify-center">
                    <div className="text-[50px] text-[#D67083]">
                      <FaGifts />
                    </div>
                  </div>
                  <div className="text-center text-[20px] font-normal text-[#54595F] mt-5 mx-0 md:mx-5 lg:mx-5">
                    <p className="mb-[27px]">
                      Các file này là quà tặng miễn phí mình chia sẻ riêng trong
                      nhóm Zalo như một món quà đặc biệt dành cho bạn nào thực
                      sự cần
                    </p>
                    <p className="mb-[27px]">
                      Vào nhóm Zalo của VanLinh để lấy pass nha
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <Button className="flex items-center text-[#fff] bg-[#2964F9] text-[20px] font-medium py-3 px-8 hover:bg-[#2964F9] cursor-pointer">
                      <LikeIcon />
                      <span>Vào nhóm Zalo</span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-span-1 ">
                <div className="flex items-center justify-center">
                  <div className="relative h-[314px] md:h-[186px] lg:h-[303px] w-[224px] md:w-[132px] lg:w-[216px]">
                    <Image
                      src="https://debyquynh.com/wp-content/uploads/2025/05/IMG_6710-1-1097x1536.jpg"
                      alt=""
                      fill
                      className="object-cover rounded-t-[10px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2.5">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
              {data
                .filter((product) => product.isFree === true)
                .map((product, index) => (
                  <div
                    key={index}
                    className="col-span-1 bg-[#fff] flex border-[1px] border-[#eee] border-solid shadow-2xl"
                  >
                    <div className="flex flex-col p-2.5">
                      <Link
                        href={`/san-pham/${product.slug}`}
                        className="mb-[20px]"
                      >
                        <div className="relative h-[174px] md:h-[180px] lg:h-[140px] w-full">
                          <Image
                            src={product.thumbnailUrl}
                            alt=""
                            fill
                            className="object-cover"
                          />
                        </div>
                      </Link>
                      <div className="mt-[20px] text-center">
                        <h2 className="text-[20px] mb-[27px] leading-[24px] font-bold capitalize text-[#D67083]">
                          {product.title}
                        </h2>
                        <p className="text-[#7A7A7A] font-normal text-[16px]">{product.description}</p>
                      </div>
                      <div className="flex flex-col mt-1">
                        <div className="mb-[27px] text-center">
                          <p className="text-[#ff0000] font-normal text-[16px]">Nhập mật khẩu để lấy link download</p>
                        </div>
                        <div className="mb-[32px]">
                          <form className="flex items-center justify-center">
                            <input type="password" placeholder="Password" className="w-[125px] py-2.5 px-5 text-[#333333] bg-[#fff] text-[16px] border-[1px] border-solid border-[#D6D9DD] outline-0" />
                            <input type="submit"  value='Mở' className="text-[#fff] uppercase bg-[#D67083] border-none py-2.5 px-5 text-[16px] cursor-pointer hover:bg-[#333333]"/>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
