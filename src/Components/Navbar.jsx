import Button from "./Button";
const Navbar = () => {
  return (
    <div className="max-w-screen-xl py-6 mx-auto flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center justify-center">
        <img
          src="https://cdn.prod.website-files.com/63b386e70e89095e936cc9c2/63bddf6c495c16eebdb45576_Refokus-w.svg"
          alt=""
        />
        <div className="links flex gap-14 ml-20">
          {["Home", "work", "culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span className="w-[2px] h-7 bg-zinc-700"></span>
            ) : (
              <a
                className="uppercase text-sm flex items-center justify-center gap-1 "
                key={index}
              >
                {index === 1 && (
                  <span
                    style={{
                      boxShadow: "0 0 0.45em #00FF19 ",
                    }}
                    className="inline-block w-1 h-1 bg-green-500 rounded-full"
                  ></span>
                )}

                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
