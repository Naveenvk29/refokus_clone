import { motion } from "framer-motion";
import Product from "./Product";
import { useState } from "react";
const Products = () => {
  const products = [
    {
      title: "Architel",
      desc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "cula",
      desc: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      desc: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "Maniv",
      desc: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      desc: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo",
      desc: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (item) => {
    setPos(item * 23);
  };

  return (
    <div className="mt-32 relative">
      {products.map((item, index) => {
        return (
          <Product key={index} values={item} mover={mover} count={index} />
        );
      })}
      <div className="absolute top-0 w-full h-full  pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className=" window absolute w-[32rem] h-[23rem] left-[45%]  overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full "
          >
            <video
              loop
              muted
              src="../videos/Cula_promo_new_4_3.mp4"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full "
          >
            <video
              loop
              muted
              src="../videos/Maniv-Compressed.mp4"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full "
          >
            <video
              loop
              muted
              src="../videos/showcase_4_3.mp4"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full "
          >
            <video
              loop
              muted
              src="../videos/rocketchat.webm"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full "
          >
            <video
              loop
              muted
              src="../videos/rainfall.webm"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full "
          >
            <video
              loop
              muted
              src="../videos/summon.webm"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full "
          >
            <video
              loop
              muted
              src="../videos/Cula_promo_new_4_3.mp4"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
