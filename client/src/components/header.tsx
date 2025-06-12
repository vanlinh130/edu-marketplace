"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoMdGift } from "react-icons/io";
import { IoIosGift } from "react-icons/io";
import CommonConstants from "@/constants/common";
import { usePathname } from "next/navigation";
import { FiUserCheck } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Search from "./search";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [animation, setAnimation] = useState("");

  const openMenu = () => {
    setIsMenuOpen(true);
    setAnimation("animate-slide-in");
  };

  const closeMenu = () => {
    setAnimation("animate-slide-out");
  };

  // Sau khi chạy animation slideOut → mới set isMenuOpen = false (unmount)
  useEffect(() => {
    if (animation === "animate-slide-out") {
      const timer = setTimeout(() => {
        setIsMenuOpen(false);
      }, 300); 
      return () => clearTimeout(timer);
    }
  }, [animation]);

  const handleOpen = () => {
    setIsMenuOpen(!isMenuOpen) 
    openMenu();
  };

  const handleClose = () => {
    closeMenu(); 
  };

  const navItemsPc = [
    {
      href: CommonConstants.BAI_VIET_PATH,
      label: "Hướng dẫn",
      icon: FaRegStar,
      activeIcon: FaStar,
    },
    {
      href: CommonConstants.QUA_TANG_PATH,
      label: "Quà Tặng",
      icon: IoMdGift,
      activeIcon: IoIosGift,
    },
    {
      href: CommonConstants.KIEM_TRA_DON_HANG_PATH,
      label: "Kiểm tra đơn hàng",
      icon: FaRegStar,
      activeIcon: FaStar,
    },
    {
      href: CommonConstants.LOGIN_PATH,
      label: "Đăng nhập",
      icon: FiUserCheck,
    },
  ];

  return (
    <div className="fixed z-[612] w-full transition-all duration-200 shadow bg-[#ffffff] ">
      {/* side-header-container  */}
      <div className="max-w-[1200px] flex items-center justify-between mx-auto px-2.5 h-[76px]">
        <div
          className="block md:hidden lg:hidden w-[24px] h-[24px]"
          onClick={handleOpen}
        >
          <HiMiniBars3 className="text-[24px] text-[#1E2132] ml-2.5 cursor-pointer" />
        </div>
        <div className="min-w-[213px] flex items-center px-[15px] md:pr-[30px] lg:pr-[30px]">
          <Link href="/" className="">
            <Image
              src="/images/logo/logo02.png"
              alt=""
              width={213}
              height={76}
              className="py-2.5 h-[76px] object-contain"
            />
          </Link>
        </div>
        <nav className="hidden md:block lg:block flex-1">
          <div className="flex items-center justify-center">
            <ul className="m-auto flex ">
              {navItemsPc.map((item) => {
                const isActive = pathname === item.href;
                const Icon = isActive ? item.activeIcon : item.icon;
                return (
                  <li
                    key={item.href}
                    className={`px-[5px] h-[76px] flex items-center 
                     ${
                       isActive
                         ? "border-b-[2px] border-solid border-b-[#D67083] font-semibold"
                         : "font-normal"
                     }`}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 px-2.5 py-2 hover:bg-[#F2F4F5] rounded-[8px]"
                    >
                      {Icon && <Icon className="text-[24px] text-[#1E2132]" />}
                      <span className="text-[14px]">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
        <div className="flex items-center justify-end h-[76px]">
          <div className="flex items-center h-full pr-[15px] md:pr-0 lg:pr-0">
            <Link href="/" className="px-2" onClick={() => setShowSearch(true)}>
              <Tooltip>
                <TooltipTrigger>
                  <IoSearchOutline className="text-[24px] text-[#1E2132] cursor-pointer" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Search</p>
                </TooltipContent>
              </Tooltip>
            </Link>
            <span className="h-[24px] max-h-[24px] w-[0.5px] opacity-[0.2] bg-[#1E2132] mx-2 p-0"></span>
            <div className="relative px-2 flex items-center justify-center h-full">
              <DropdownMenu>
                <TooltipProvider>
                  <Tooltip>
                    <DropdownMenuTrigger asChild>
                      <TooltipTrigger asChild>
                        <Link
                          href="/"
                          className="relative inline-flex items-center justify-center"
                        >
                          <BsCart3 className="text-[24px] text-[#1E2132]" />
                          <div className="absolute top-0 right-[-4px] px-[6px] py-[1px] bg-[#385DFF] font-semibold rounded-full shadow text-[9px] leading-[1.6]">
                            <span className="text-[#FAFBFD] font-semibold">
                              0
                            </span>
                          </div>
                        </Link>
                      </TooltipTrigger>
                    </DropdownMenuTrigger>
                    <TooltipContent>Cart</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    <h2 className="font-semibold text-[#1E2132] text-[24px] mb-[27px]">
                      Giỏ hàng
                    </h2>
                    <Link
                      href={CommonConstants.GIO_HANG_PATH}
                      className="text-[14px] text-[#385DFF] font-medium"
                    >
                      Xem giỏ hàng
                    </Link>
                  </DropdownMenuLabel>
                  <div className="">
                    <DropdownMenuItem className="py-[15px] px-5 flex items-center justify-between gap-">
                      <div className="">
                        <Link
                          href=""
                          className="flex items-center justify-center"
                        >
                          <Image
                            src="/images/game/Game-Baby-three-PPT.png"
                            alt=""
                            height={36}
                            width={36}
                            className="rounded-[50%] "
                          />
                        </Link>
                      </div>
                      <div className="">
                        <Link href="" className="text-[14px] text-[#1E2132]">
                          Trò chơi Hộp mù Baby Three PowerPoint
                        </Link>
                      </div>
                      <div className="">
                        <span className="text-[13px] text-[#9B9C9F]">
                          <span>1 x 70.000 ₫</span>
                        </span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <div className="my-[15px] ml-[20px] text-[14px] text-[#9B9C9F]">
                        <strong className="font-normal">Tạm tính:</strong>
                        <span> 70.000 ₫</span>
                      </div>
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="hidden md:block lg:block items-center py-1.5 px-3">
              <Link
                href={CommonConstants.LOGIN_PATH}
                className="text-[14px] font-semibold text-[#1E2132] hover:text-[#D67083]"
              >
                Đăng nhập
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=""></div>

      {/* bb-mobile-panel-wrapper */}
      {isMenuOpen && (
        <div className={`bg-[#fff] w-full fixed top-0 h-full overflow-y-auto z-[999] block md:hidden lg:hidden animate-slide-in  ${animation}`}>
          <div className="relative flex flex-col min-h-full pb-[30px] z-[11]">
            <div className="shadow flex items-center justify-between z-[199] px-5 py-[15px]">
              <Link href="/" className="">
                <Image
                  src="/images/logo/logo02.png"
                  alt=""
                  width={213}
                  height={76}
                  className="h-[76px] object-contain"
                />
              </Link>
              <IoMdClose
                className="text-[20px] text-[#9B9C9F] font-normal cursor-pointer"
                onClick={handleClose}
              />
            </div>
            <nav className="flex flex-col w-full px-5 mt-5">
              <ul className="w-full m-0">
                {navItemsPc.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;
                  return (
                    <li key={item.href} onClick={() => setIsMenuOpen(false)}>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-2 w-full py-[12px] pl-[15px] rounded-[8px] ${isActive ? "bg-[#385DFF] text-[#fff]" : "text-[#1E2132]"}`}
                      >
                        <Icon  className="text-[24px]"/>
                        <span className="text-[14px]">{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* header-search-wrap  */}
      <Search show={showSearch} onClose={() => setShowSearch(false)} />
    </div>
  );
};

export default Header;
