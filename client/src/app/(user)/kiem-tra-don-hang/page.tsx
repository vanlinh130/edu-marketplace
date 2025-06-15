import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const OrderReview = () => {
  return (
    <div className="px-2.5 w-full h-full bg-[#D6D9DD]">
      <div className="max-w-[700] mx-auto py-2.5">
        <div className="flex flex-col gap-4 p-2.5 md:p-10 lg:p-10 my-[50px] bg-[#FFFFFF]">
          <div className="text-center">
            <h2 className="text-[#000000] font-semibold text-[24px]">
              KIỂM TRA ĐƠN HÀNG
            </h2>
          </div>
          <form className="mb-[32px]">
            <p className="mb-[27px] text-[16px] text-[#5A5A5A]">
              Để kiểm tra đơn hàng của bạn xin vui lòng nhập ID đơn hàng của bạn
              vào ô dưới đây và nhấn nút &quot;Kiểm tra&quot;. ID đơn hàng đã được gửi cho
              bạn qua biên lai và qua email xác nhận mà bạn nhận được. ID là dãy
              số phía sau chữ DQ trong nội dung chuyển khoản.
            </p>
            <div className="flex gap-4 w-full mb-1.5">
              <div className="w-[50%] flex flex-col gap-2.5">
                <label className="text-[16px]">ID Đơn hàng</label>
                <Input type="text" placeholder="Tìm thấy trong email xác nhận đơn hàng của bạn." />
              </div>
              <div className="w-[50%] flex flex-col gap-2.5">
                <label className="text-[16px]">Email thanh toán</label>
                <Input type="email" placeholder="Email được sử dụng trong quá trình thanh toán." />
              </div>
            </div>
            <div className="py-1">

              <Button value='Kiểm tra' className="bg-[#385DFF] text-[#fff] text-[14px] font-normal hover:bg-[#1E42DD] cursor-pointer px-[28px]">Kiểm tra</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
