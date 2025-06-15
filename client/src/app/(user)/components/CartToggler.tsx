import React from 'react'
import { MdOutlineShoppingBag } from "react-icons/md";

const CartToggler = () => {
  return (
    <div className='fixed top-auto bottom-[86px] md:bottom-[36px] lg:bottom-[36px] right-[20px] md:right-[36px] lg:right-[36px] w-[54px] md:w-[72px] lg:w-[72px] h-[54px] md:h-[72px] lg:h-[72px] z-[10999] cursor-pointer box-border '>
        <div className='bg-[#fff] w-full h-full shadow-2xl flex items-center justify-center text-[#353030] rounded-full'>
            <MdOutlineShoppingBag className='text-[25px] md:text-[36px] lg:text-[36px]'/>
        </div>
        <div className='absolute top-0 left-[-2px] h-[18px] w-auto min-w-[18px] flex items-center justify-center bg-[#cf2e2e] rounded-full z-[20] font-semibold text-[12px] text-[#fff] p-0.5'>
            1
        </div>
    </div>
  )
}

export default CartToggler