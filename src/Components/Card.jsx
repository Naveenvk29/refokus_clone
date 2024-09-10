import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, para, start, hover = "false" }) => {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === "true" ? "#7443ff" : "#333",
        padding: "30px",
      }}
      className={` bg-zinc-800 p-5 ${width} min-h-[30rem] flex flex-col justify-between `}
    >
      <div className="w-full flex items-center justify-between">
        <h3>one Herading</h3>
        <IoIosArrowRoundForward />
      </div>
      <h1 className="text-3xl font-medium mt-">Lorem ipsum</h1>
      <div className="down w-full mt-60">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tighter leading-none">
              start a Project
            </h1>
            <button className="rounded-full px-3 py-2 border-2 border-zinc-700  mt-5">
              Contact us
            </button>
          </>
        )}
        {para && (
          <p className="test-sm text-zinc-500 font-medium ">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
