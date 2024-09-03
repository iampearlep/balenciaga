"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { IoMdHeartEmpty, IoIosSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div className="mx-auto w-11/12">
      <div className="hidden md:flex flex-row items-center justify-between uppercase py-6">
        <div className="flex flex-row justify-between w-7/12">
          <div className="flex flex-row justify-between items-center font-medium text-[0.9rem] gap-x-6">
            <Link href="/">Men</Link>
            <Link href="/women">Women</Link>
            <Link href="/">Kids</Link>
            <Link href="/">Explore</Link>
            <Link href="/">New</Link>
          </div>
          <div className="text-neutral-900 text-2xl font-bold tracking-widest">
            <Link href="/">Balenciaga</Link>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center gap-x-6">
          <button>
            <Link href="/">
              <IoIosSearch className="w-5 h-4" />
            </Link>
          </button>

          <button>
            <Link href="/">
              <AiOutlineUser className="w-5 h-4" />
            </Link>
          </button>

          <button>
            <Link href="/">
              <HiOutlineShoppingBag className="w-5 h-4" />
            </Link>
          </button>

          <button>
            <Link href="/">
              <IoMdHeartEmpty className="w-5 h-4" />
            </Link>
          </button>
        </div>
      </div>

      {/* Mobile Screens */}

      <div>
        <div className="flex md:hidden flex-row justify-between items-center py-6">
          <div className="flex flex-row gap-x-3 items-center justify-center font-medium">
            <button onClick={handleToggle}>
              {isToggle ? (
                <AiOutlineClose className="w-5 h-4" />
              ) : (
                <SlMenu className="w-5 h-4" />
              )}
            </button>
            <Link href="/">EN</Link>
          </div>

          <div className="text-xl font-semibold uppercase tracking-widest">
            <Link href="/">Balenciaga</Link>
          </div>
          <div className="flex flex-row items-center gap-x-3">
            <button>
              <Link href="/">
                <IoMdHeartEmpty className="w-5 h-4" />
              </Link>
            </button>

            <button>
              <Link href="/">
                <HiOutlineShoppingBag className="w-5 h-4" />
              </Link>
            </button>
          </div>
        </div>

        {isToggle && (
          <div className="fixed top-0 right-0 h-full  w-full bg-[#bebebe] z-30 flex flex-col justify-start items-start">
            <div className="flex flex-row justify-between items-center ">
              <h1
                className={`absolute top-7 left-5 text-xl font-semibold uppercase tracking-widest`}
              >
                <Link href="/" className="cursor-pointer">
                  Balenciaga
                </Link>
              </h1>
              <button onClick={handleToggle} className="absolute top-9 right-5">
                <AiOutlineClose className="w-5 h-4" />
              </button>
            </div>
            <div className="mt-40 max-h-screen overflow-y-auto w-full">
              <div className="flex flex-col gap-7 items-start justify-start font-semibold text-xl px-5 ">
                <Link
                  href="/"
                  onClick={handleToggle}
                  className="cursor-pointer w-full py-2"
                >
                  Home
                </Link>
                <Link
                  href="/"
                  onClick={handleToggle}
                  className="cursor-pointer w-full py-2"
                >
                  Men
                </Link>
                <Link
                  href="/"
                  onClick={handleToggle}
                  className="cursor-pointer w-full py-2"
                >
                  Women
                </Link>
                <Link
                  href="/"
                  onClick={handleToggle}
                  className="cursor-pointer w-full py-2"
                >
                  Kids
                </Link>
                <Link
                  href="/"
                  onClick={handleToggle}
                  className="cursor-pointer w-full py-2"
                >
                  Explore
                </Link>
                <Link
                  href="/"
                  onClick={handleToggle}
                  className="cursor-pointer w-full py-2"
                >
                  New
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
