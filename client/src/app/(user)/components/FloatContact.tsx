import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FloatContact = () => {
  return (
    <>
      <div className="fixed bottom-[20px] left-[20px] z-[99999] hidden md:block lg:block">
        <div  className="flex flex-col gap-[6px]">
          <Button className="bg-[#9F3139] rounded-[20px] text-[#fff] pl-0 pr-2 h-[32px] justify-start hover:bg-[#1E42DD]">
            <Link href="" className="flex items-center">
              <Image
                src="https://i.imgur.com/0oUMHBv.png"
                alt=""
                width={30}
                height={30}
              />
              <span className="px-2">Youtube</span>
            </Link>
          </Button>
          <Button className="bg-[#9F3139] rounded-[20px] text-[#fff] pl-0 pr-2 h-[32px] w-[85px] justify-start hover:bg-[#1E42DD] ">
            <Link href="" className="flex items-center">
              <Image
                src="https://i.imgur.com/tkpj5if.png"
                alt=""
                width={30}
                height={30}
              />
              <span className="px-2">Zalo</span>
            </Link>
          </Button>
          <Button className="bg-[#9F3139] rounded-[20px] text-[#fff] pl-0 pr-2 h-[32px] w-[95px] justify-start hover:bg-[#1E42DD]">
            <Link href="" className="flex items-center">
              <Image
                src="https://i.imgur.com/KMeDxeb.png"
                alt=""
                width={30}
                height={30}
              />
              <span className="px-2">Tiktok</span>
            </Link>
          </Button>
          <Button className="bg-[#9F3139] rounded-[20px] text-[#fff] pl-0 pr-2 h-[32px] justify-start hover:bg-[#1E42DD]">
            <Link href="" className="flex items-center">
              <Image
                src="https://i.imgur.com/pMtFhJr.png"
                alt=""
                width={30}
                height={30}
              />
              <span className="px-2">Facebook</span>
            </Link>
          </Button>
        </div>
      </div>

      <div
        className="fixed bottom-0 bg-[#fff] w-full border-t-[1px] border-solid boder-t-[#eaeaea] z-[99] block md:hidden lg:hidden"
        style={{ boxShadow: "2px 1px 9px #dedede" }}
      >
        <ul className="flex flex-row justify-between h-[77px]">
          <li className="w-[25%] py-1">
            <Link href="" className="flex flex-col items-center gap-2">
              <Image
                src="https://i.imgur.com/0oUMHBv.png"
                alt=""
                width={40}
                height={40}
              />
              <span className="text-[11px]">Youtube</span>
            </Link>
          </li>
          <li className="w-[25%] py-1">
            <Link href="" className="flex flex-col items-center gap-2">
              <Image
                src="https://i.imgur.com/tkpj5if.png"
                alt=""
                width={40}
                height={40}
              />
              <span className="text-[11px]">Zalo</span>
            </Link>
          </li>
          <li className="w-[25%] py-1">
            <Link href="" className="flex flex-col items-center gap-2">
              <Image
                src="https://i.imgur.com/KMeDxeb.png"
                alt=""
                width={40}
                height={40}
              />
              <span className="text-[11px]">Tiktok</span>
            </Link>
          </li>
          <li className="w-[25%] py-1">
            <Link href="" className="flex flex-col items-center gap-2">
              <Image
                src="https://i.imgur.com/pMtFhJr.png"
                alt=""
                width={40}
                height={40}
              />
              <span className="text-[11px]">Facebook</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FloatContact;
