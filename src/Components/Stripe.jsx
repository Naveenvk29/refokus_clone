const Stripe = ({ val }) => {
  return (
    <div className="w-[16.6%] px-5 py-3 h-[9vh] border-y-[1.2px] border-r-[1.2px] border-zinc-600 flex items-center justify-between  font-semibold   ">
      <img src={val.url} />
      <span>{val.number}</span>
    </div>
  );
};

export default Stripe;
