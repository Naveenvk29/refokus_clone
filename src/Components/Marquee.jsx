const Marquee = ({ imageUrl }) => {
  return (
    <div className="flex w-full py-5 gap-20 whitespace-nowrap overflow-hidden">
      {imageUrl.map((url, index) => (
        <img key={index} src={url} alt="" className="w-[7vw] flex-shrink-0" />
      ))}
      {imageUrl.map((url, index) => (
        <img key={index} src={url} alt="" className="w-[7vw] flex-shrink-0" />
      ))}
    </div>
  );
};

export default Marquee;
