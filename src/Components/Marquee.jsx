import React from "react";

const Marquee = ({ imageUrl }) => {
  console.log(imageUrl);

  return (
    <div className="flex w-full py-5 gap-20 whitespace-nowrap overflow-hidden">
      {imageUrl.map((url) => (
        <img src={url} alt="" className="w-[7vw] flex-shrink-0" />
      ))}
      {imageUrl.map((url) => (
        <img src={url} alt="" className="w-[7vw] flex-shrink-0" />
      ))}
    </div>
  );
};

export default Marquee;
