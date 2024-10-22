import { ReactP5Wrapper } from "@p5-wrapper/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { homePageItemVariants } from "../utilities/variants.js";
import { RippleBtn } from "../components";


function sketch(p5) {
  const points = [];
  const mult = 0.01;
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    // p5.background(40)
    p5.background(255, 255, 255);
    p5.frameRate(20);
    p5.angleMode(p5.DEGREES);
    p5.noiseDetail(1);
    let density = 100;
    let space = p5.width / density;
    for (let i = 0; i < p5.width; i += space) {
      for (let j = 0; j < p5.height; j += space) {
        const p = p5.createVector(
          i + p5.random(-10, 10),
          j + p5.random(-10, 10),
        );
        points.push(p);
      }
    }
  };

  p5.draw = () => {
    p5.noStroke();
    // p5.fill(253,242,248,10)
    p5.fill(249, 168, 212, 30);
    for (let i = 0; i < points.length; i++) {
      const angle = p5.map(
        p5.noise(points[i].x * mult, points[i].y * mult),
        0,
        1,
        0,
        720,
      );
      points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)));
      p5.ellipse(points[i].x, points[i].y, 1);
    }
  };
}

export default function Home() {
  const navigate = useNavigate();
  return (
    <motion.div
      transition={{ staggerChildren: 1 }}
      className="relative z-10 flex h-screen w-screen flex-col items-center gap-8"
    >
      <motion.h1
        variants={homePageItemVariants}
        initial="hidden"
        animate="show"
        transition={{ duration: 2, ease: "easeInOut" }}
        className="mx-4 mt-4 w-[50%] rounded-xl border border-pink-500/30 bg-opacity-0 px-6 py-2 text-center font-kalniaGlaze text-5xl backdrop-blur-sm backdrop-filter lg:w-[60%]"
      >
        Corina's Portfolio
      </motion.h1>
      <motion.p
        variants={homePageItemVariants}
        initial="hidden"
        animate="show"
        transition={{ duration: 4, ease: "easeInOut" }}
        className="w-[50%] rounded-xl border border-pink-500/30 bg-opacity-0 px-6 py-2 text-center font-montserrat text-pink-800/80 backdrop-blur-sm backdrop-filter lg:w-[60%]"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi aspernatur molestiae modi eum, rem corrupti laudantium beatae velit enim ducimus consequuntur ipsam assumenda temporibus nisi neque unde consectetur id saepe magnam dignissimos? Dolore neque dolorem ducimus odit dignissimos voluptatum ea repellendus unde animi at et, dolor sed minima eius eveniet?
      </motion.p>

      <motion.div
        variants={homePageItemVariants}
        initial="hidden"
        animate="show"
        transition={{ duration: 6, ease: "easeInOut" }}
        onClick={() => navigate("/hub")}
      >
        <RippleBtn
          className={
            "mb-4 cursor-pointer rounded-xl border border-pink-500/30 bg-opacity-0 px-6 py-2 text-center font-montserrat text-2xl text-pink-800/80 backdrop-blur-sm backdrop-filter"
          }
          rippleColor={'bg-pink-300'}
        >
          Enter
        </RippleBtn>
      </motion.div>

      <div className="absolute -z-10">
        <ReactP5Wrapper sketch={sketch} />
      </div>
    </motion.div>
  );
}
