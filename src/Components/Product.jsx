import React from "react";
import Button from "./Button";

const Product = ({ values }) => {
  return (
    <div className="w-full py-20 text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl font-semibold capitalize">{values.title}</h1>
        <div className="det w-1/4 flex flex-col items-start ">
          <p className="mb-10">{values.desc}</p>
          <div className="flex items-center justify-center gap-5">
            {values.live && <Button />}
            {values.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
