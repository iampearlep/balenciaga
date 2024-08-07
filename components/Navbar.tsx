import Link from "next/link"
import { AiOutlineUser } from "react-icons/ai";
import { IoMdHeartEmpty, IoIosSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";


const Navbar = () => {
  return (
    <div className="mx-auto w-11/12">
        <div className="flex flex-row items-center justify-between uppercase py-6">
          <div className="flex flex-row justify-between w-7/12">
          <div className="flex flex-row justify-between items-center text-sm gap-x-6">
                <Link href="/">Men</Link>
                <Link href="/">Women</Link>
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
                <Link href="/"><IoIosSearch /></Link>
                </button>
          
            <button>
            <Link href="/"><AiOutlineUser /></Link>
                    </button>
           
            <button>
            <Link href="/"><HiOutlineShoppingBag /></Link>
                    </button>
           
            <button>
            <Link href="/"><IoMdHeartEmpty /></Link>
                    </button>
           
            </div>
        </div>
    </div>
  )
}
export default Navbar