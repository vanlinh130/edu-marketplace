import Image from "next/image";
import Link from "next/link";
import React from "react";
import data from "../../../data/data.json";

const Posts = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-2.5">
      <div className="px-2.5 pt-[30px] pb-[35px]">
        <div className="mb-[35px]">
          <h1 className="text-[#1E2132] text-[28px] font-bold">Bài viết</h1>
        </div>
        <div className="p-2.5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px]">
            {data
              .filter((product) => product.isFree === true)
              .map((product, index) => (
                <div
                  key={index}
                  className="col-span-1 bg-[#fff] rounded-[10px] flex border-[1px] border-[#eee] border-solid hover:shadow"
                >
                  <div className="flex flex-col">
                    <Link
                      href={`/san-pham/${product.slug}`}
                      className="mb-[20px]"
                    >
                      <div className="relative h-[170px] md:h-[223px] lg:h-[241px] w-full">
                        <Image
                          src={product.thumbnailUrl}
                          alt=""
                          fill
                          className="object-cover rounded-t-[10px]"
                        />
                        <div className="absolute top-0 right-0 bg-[#4E5CFF] font-medium rounded-[999px] py-1 px-3.5 text-[#fff] uppercase m-5 text-[12px]">
                          Chung
                        </div>
                      </div>
                    </Link>
                    <div className="px-[30px] mt-[20px] mb-[25px] text-center">
                      <Link href={`/san-pham/${product.slug}`}>
                        <h2 className="text-[21px] leading-[24px] font-bold capitalize text-[#D67083]">
                          {product.title}
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
