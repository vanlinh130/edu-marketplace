import Link from "next/link";
import React from "react";
import { FaSquarePhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";
import { LuChevronRight } from "react-icons/lu";

const contacts = [
  {
    label: "Điện thoại: 0388579912",
    href: "tel:0787945995",
    icon: <FaSquarePhone />,
  },
  {
    label: "Email: linhvanle@gmail.com",
    href: "mailto:linhvanle@gmail.com",
    icon: <FaEnvelope />,
  },
  { label: "Facebook", href: "https://www.facebook.com", icon: <FaFacebook /> },
  {
    label: "Youtube",
    href: "https://www.youtube.com",
    icon: <IoLogoYoutube />,
  },
  { label: "Tiktok", href: "https://www.tiktok.com", icon: <IoLogoTiktok /> },
];

const generalPolicys = [
  { label: "Chính sách bảo mật", icon: <LuChevronRight /> },
  { label: "Hướng dẫn mua hàng", icon: <LuChevronRight /> },
  { label: "Thanh toán vào giao hàng", icon: <LuChevronRight /> },
  { label: "Chính sách hoàn tiền", icon: <LuChevronRight /> },
  { label: "Tuyên bố từ chối trách nhiệm", icon: <LuChevronRight /> },
];

const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-[#E36F83] px-2.5 w-full">
        <div className="mx-auto flex items-center justify-center py-2.5 max-w-[1145px]">
          <div className="p-2.5">
            <div className="p-2.5 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
              <div className="p-2.5 col-span-1 flex flex-col">
                <div className="text-[22px] font-bold text-[#fff]">
                  <p>LIÊN HỆ</p>
                </div>
                <ul className="flex flex-col gap-1">
                  {contacts.map((item) => {
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="flex flex-row items-center gap-1.5 text-[#fff]"
                        >
                          {item.icon}
                          <span className="text-[16px]">{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="p-2.5 col-span-1 flex flex-col">
                <div className="text-[22px] font-bold text-[#fff]">
                  <p>CHÍNH SÁCH CHUNG</p>
                </div>
                <ul className="flex flex-col gap-1">
                  {generalPolicys.map((item) => {
                    return (
                      <li key={item.label}>
                        <div className="flex flex-row items-center gap-1.5 text-[#fff]">
                          {item.icon}
                          <span className="text-[16px]">{item.label}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="p-2.5 col-span-1 md:col-span-2 lg:col-span-2  flex flex-col">
                <div className="text-[22px] font-bold text-[#fff]">
                  <p>LƯU Ý QUAN TRỌNG</p>
                </div>
                <ul className="flex flex-col gap-1 ml-[27px]">
                  <li className="list-disc text-[#fff]">
                      <span className="text-[16px]">
                        Quý khách vui lòng thanh toán ĐÚNG NỘI DUNG YÊU CẦU.
                        Ngay sau khi thanh toán thành công, hệ thống sẽ gửi sản
                        phẩm về email cho quý khách.
                      </span>
                  </li>
                  <li className="list-disc text-[#fff]">
                      <span className="text-[16px]">
                        Với những trường hợp chuyển khoản không đúng nội dung yêu cầu, shop xin phép không hỗ trợ!
                      </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
