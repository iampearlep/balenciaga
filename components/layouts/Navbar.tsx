"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { IoMdHeartEmpty, IoIosSearch, IoIosLogOut } from "react-icons/io";
import { SlMenu } from "react-icons/sl";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { CartDrawer } from "../CartDrawer";
import { AnimatePresence, motion } from 'framer-motion'
import AnimatedText from "../AnimatedText";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { user, logOut } = useAuthStore((state) => ({
    user: state.user,
    logOut: state.logOut,
  }));

  const router = useRouter();

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleLogOut = async () => {
    await logOut();
    router.push("/");
  };

  const getInitials = () => {
    if (user?.displayName) {
      return user.displayName.charAt(0).toUpperCase();
    }
    if (user?.email) {
      return user.email.charAt(0).toUpperCase();
    }
    return <AiOutlineUser className="w-5 h-4" />;
  };


  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Men", href: "/men" },
    { title: "Women", href: "/women" },
    { title: "Kids", href: "/" },
    { title: "Explore", href: "/explore" },
    { title: "New", href: "/new" },
  ];


  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      }
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  }

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      }
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      }
    }
  }

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <div className="mx-auto w-11/12">
      <div className="hidden md:flex flex-row items-center justify-between uppercase py-6">
        <div className="flex flex-row justify-between w-7/12">
          <div className="flex flex-row justify-between items-center font-medium text-[0.9rem] gap-x-6">
          {navLinks.slice(1, 6).map((link, index) => {
            return (
              <div key={index} className="relative">
               <Link href={link.href}>
               <AnimatedText title={link.title} />
               </Link>
              </div>
            )
          })}
          </div>
          <div className="text-neutral-900 text-2xl font-bold tracking-widest">
            <Link href="/">Balenciaga</Link>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center gap-x-6">
          <button className="px-3">
            <Link href="/">
              <IoIosSearch className="w-5 h-4" />
            </Link>
          </button>

          <div className="flex items-center gap-x-6">
            {user ? (
              <div className="flex items-center gap-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-neutral-900 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                    {getInitials()}
                  </div>
                </div>
                <button
                  onClick={handleLogOut}
                  className="flex items-center space-x-2 text-red-500 hover:text-red-700"
                >
                  <IoIosLogOut className="w-5 h-4" />
                </button>
              </div>
            ) : (
              <Link href="/login">
                <AiOutlineUser className="w-5 h-4" />
              </Link>
            )}
          </div>

          <CartDrawer />

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
            <button onClick={toggleMenu}>
              {open ? (
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
          <div className="flex flex-row items-center gap-x-0.5">
            <div>
              {user ? (
                <div className="flex items-center gap-x-2.5">
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 bg-neutral-900 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                      {getInitials()}
                    </div>
                  </div>
                  <button
                    onClick={handleLogOut}
                    className="flex items-center space-x-2 text-red-500 hover:text-red-700"
                  >
                    <IoIosLogOut className="w-5 h-4" />
                  </button>
                </div>
              ) : (
                <Link href="/login">
                  <AiOutlineUser className="w-5 h-4" />
                </Link>
              )}
            </div>

            <CartDrawer />
          </div>
        </div>
        <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-full z-30 origin-top bg-black text-white p-10"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between items-center">
                <h1 className="text-xl uppercase">Balenciaga</h1>
                <p
                  className="cursor-pointer"
                  onClick={toggleMenu}
                >
                  <AiOutlineClose className="w-5 h-4" />
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden">
                      <motion.div key={index} variants={mobileLinkVars} className="uppercase text-2xl">
                        <Link href={link.href} onClick={toggleMenu}>{link.title}</Link>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
};
export default Navbar;
