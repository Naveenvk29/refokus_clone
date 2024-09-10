import { motion } from "framer-motion";

const Marquee = ({ imageUrl, direction }) => {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        className="flex flex-shrink-0 gap-20 py-8 pr-20"
      >
        {imageUrl.map((url, index) => (
          <img key={index} className="w-[5vw] flex-shrink-0" src={url} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        className="flex flex-shrink-0 gap-20 py-8 pr-20"
      >
        {imageUrl.map((url, index) => (
          <img key={index} className="w-[5vw] flex-shrink-0" src={url} />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
