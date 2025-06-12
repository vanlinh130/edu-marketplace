import React from 'react'
import { Input } from './ui/input'
import { IoSearchOutline } from 'react-icons/io5'
import Link from 'next/link'
import { IoMdClose } from 'react-icons/io'

interface SearchProps {
  show: boolean; 
  onClose: () => void; 
}

const Search = ({ show, onClose } : SearchProps) => {
  return (
    <div
          className={`
          absolute w-full left-0 top-0 h-[76px] bg-white shadow z-[2] 
          transition-opacity duration-300 ease-in-out
          ${
            show
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        >
          <div className="relative max-w-[1200px] mx-auto">
            <form
              role="search"
              className="max-w-[calc(100%-64px)] md:max-w-[500px] lg:max-w-[500px] flex items-center ml-[15px] md:mx-auto lg:mx-auto my-0 h-[76px] relative"
            >
              <Input
                type="text"
                placeholder="Search"
                className="mx-2 bg-[#F2F4F5] text-[14px] text-[#D6D9DD] font-normal py-2.5 pr-[15px] pl-[35px] "
              />
              <IoSearchOutline className="text-[16px] text-[#1E213 absolute [top:calc(50%-8px)] left-[18px] text-[#647385]" />
            </form>
            <Link
              href=""
              className="absolute right-2.5 [top:calc(50%-11px)] hover:opacity-95 mr-3"
              onClick={onClose}
            >
              <IoMdClose className="text-[20px] text-[#1E2132] font-normal" />
            </Link>
          </div>
        </div>
  )
}

export default Search