"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ title }: { title: string }) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="relative overflow-hidden cusor-pointer">
      <AnimatedWord title={title} animation={letterAnimation} isHovered={isHovered}/>
      <div className="absolute top-0">
        <AnimatedWord title={title} animation={letterTwoAnimation} isHovered={isHovered} />
      </div>
    </motion.div>
  );
};

export default AnimatedText;

const titleAnimation = {
    rest: {
        transition: {
            staggerChildren: 0.003,
        }
    },
    hover: {
        transition: {
            staggerChildren: 0.003,
        }
    }
}

const letterAnimation ={
    rest: {
        y:0,
    },
    hover: {
        y: -25,
        transition: {
            duration: 0.3,
            ease:[0.6, 0.01, 0.05, 0.95],
            type: "tween",
        }
    }
}

const letterTwoAnimation ={
    rest: {
        y:25,
    },
    hover: {
        y: 0,
        transition: {
            duration: 0.3,
            ease:[0.6, 0.01, 0.05, 0.95],
            type: "tween",
        }
    }
}

const AnimatedWord = ({ title, animation, isHovered }: { title: string, animation:any, isHovered:any }) => {
  return (
    <motion.span variants={titleAnimation} initial="rest" animate={isHovered? "hover" : "rest"} className="whitespace-nowrap relative">
      {title
        .split("")
        .map((character, index) =>
          character === "" ? (
            <span key={index}>&nbsp;</span>
          ) : (
            <motion.span variants={animation} className="relative inline-block whitespace-nowrap">
              {character}
            </motion.span>
          )
        )}
    </motion.span>
  );
};
