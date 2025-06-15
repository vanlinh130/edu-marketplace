import { Button } from "@/components/ui/button";
import { FaRegBell } from "react-icons/fa6";
import { FaRegGem } from "react-icons/fa";
import { FaGifts } from "react-icons/fa6";
import data from "../../data/data.json";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import SwiperSection from "./components/SwiperSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto">
      <div className="w-full">
        <main className="relative">
          <div className="flex flex-col">
            <div className="bg-banner bg-center bg-cover w-full min-h-[143px] md:min-h-[204px] lg:min-h-[394px]"></div>
            <div className="flex flex-wrap justify-normal">
              <div className="w-full max-w-[1140px] mx-auto py-2.5">
                <div className="flex flex-col gap-2.5 ">
                  <div className="flex flex-row justify-center gap-2.5 items-center">
                    <Button
                      variant="outline"
                      className="bg-[#E6E6E6] text-[#54595F] text-[16px] rounded-[36px] h-[44.8px] px-[15px] py-[12px] hover:bg-[#4E5CFF] hover:text-[#fff]"
                    >
                      <div className="flex items-center gap-[5px]">
                        <FaRegBell />
                        <span className="font-normal cursor-pointer">
                          Mới nhất
                        </span>
                      </div>
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-[#E6E6E6] text-[#54595F] text-[16px] rounded-[36px] h-[44.8px] px-[15px] py-[12px] hover:bg-[#4E5CFF] hover:text-[#fff]"
                    >
                      <div className="flex items-center gap-[5px]">
                        <FaRegGem />
                        <span className="font-normal cursor-pointer">
                          Trò chơi
                        </span>
                      </div>
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-[#ff0000] text-[16px] rounded-[36px] h-[44.8px] px-[15px] py-[12px] text-[#fff]"
                    >
                      <div className="flex items-center gap-[5px]">
                        <FaGifts />
                        <span className="font-normal cursor-pointer">
                          Quà tặng
                        </span>
                      </div>
                    </Button>
                  </div>
                  <div className="p-2.5">
                    <ul className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-5">
                      {data.map((product, index) => {
                        if (product.isFree === false)
                          return (
                            <li
                              key={index}
                              className="col-span-1 bg-[#fff] rounded-[10px] flex border-[1px] border-[#eee] border-solid hover:shadow-2xl"
                            >
                              <div className="flex flex-col">
                                <div className="relative">
                                  <Link
                                    href={`/san-pham/${product.slug}`}
                                  >
                                    <div className="relative h-[140px] w-full">
                                      <Image
                                        src={product.thumbnailUrl}
                                        alt=""
                                        fill
                                        className="object-cover rounded-t-[10px]"
                                      />
                                    </div>
                                  </Link>
                                  <div className="absolute mx-[15px] flex items-center justify-end top-auto bottom-[-24px] left-0 right-0">
                                    <Link
                                      href=""
                                      className="mx-[2px] w-[42px] h-[42px] bg-[#C362AC] hover:bg-[#333] text-[#fff] shadow flex items-center justify-center rounded-[3px]"
                                    >
                                      <FaCartShopping className="text-[20px]" />
                                    </Link>
                                  </div>
                                </div>
                                <div className="p-[15px] text-center">
                                  <div className="mt-5 mb-2.5">
                                    <span className="font-semibold text-[18px] text-[#000000]">
                                      {product.price.toLocaleString("vi-VN")} ₫
                                    </span>
                                  </div>
                                  <div className="">
                                    <Link href={`/san-pham/${product.slug}`}>
                                      <h2 className="text-[16px] leading-[24px] font-bold capitalize text-[#AE0085]">
                                        {product.title}
                                      </h2>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </li>
                          );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F5F5F5]">
              <div className="flex flex-col gap-5 pt-[12px] pb-5 w-full max-w-[1140px] mx-auto">
                <div className="px-2.5 md:px-0 lg:px-0">
                  <div className="w-full bg-[#C362AC] rounded-[6px] text-center">
                    <h2 className="font-bold uppercase text-[#fff] text-[24px] p-1">
                      HƯỚNG DẪN
                    </h2>
                  </div>
                </div>
                <div className="px-5 md:px-0 lg:px-0">
                  <SwiperSection />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
