import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto pb-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[12rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-2 ">
          <div className="basis-1/3">
            <h4 className="font-lg mb-10 text-zinc-500 capitalize ">Social</h4>
            {["instagram", "twitter (x?)", "LinkdenIn"].map((item, index) => (
              <a className=" block mt-2 capitalize text-zinc-500" href="">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="font-lg mb-10 text-zinc-500 capitalize ">Social</h4>
            {["instagram", "twitter (x?)", "LinkdenIn"].map((item, index) => (
              <a className=" block mt-2 capitalize text-zinc-500" href="">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right">
              Refokus is a top Webflow Agency combining high-end design with
              Webflow Development expertise.
            </p>
            <img
              className="mt-3"
              src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto ">
        {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map(
          (elem, index) => (
            <a
              key={index}
              className="text-sm text-zinc-500 font-semibold ml-10"
            >
              {elem}
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default Footer;
