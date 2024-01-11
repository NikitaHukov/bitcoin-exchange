export const Hero = () => {
  return (
    <div className="  flex justify-center gap-60 text-balance p-32">
      <div className=" text-center w-[600px]  ">
        <span className="text-2xl font-extrabold text-sky-400">
          Inside Thailand
        </span>
        <div className="text-5xl font-extrabold p-5">
          <span>Buy, Sell Bitcoins</span>
          <p>Simply & Securely</p>
        </div>
        <div className="flex ">
          <div className="w-24 h-24 bg-black rounded-lg"></div>
          <div className="text-2xl flex w-[400px]">
            <span>
              It's easy to set up your free account, and you will be able to
              exchange in no time
            </span>
          </div>
        </div>
        <div className="flex">
          <div className="w-24 h-24 bg-black rounded-lg "></div>
          <div className="text-2xl flex w-[400px] p-3">
            <span>
              All your data is encrypted with a 256-bit encryption and the data
              exchanged with us is encrypted with 256-bit SSL
            </span>
          </div>
        </div>
        <div className="h-px w-60 bg-gray-300 mx-auto m-5"></div>
        <span className="text-sky-400 text-lg font-semibold">
          Questions about Bitcoin?
        </span>
      </div>
      <div className="bg-green-500 p-16 border border-gray-300">
        <div className="flex text-2xl justify-center">
          <button className="p-7 px-16 border border-gray-300">
            Buy Bitcoin
          </button>
          <button className="p-7 px-16 border border-gray-300 ">
            Sell Bitcoin
          </button>
        </div>
        <div className="py-12">
          <span className="text-3xl font-semibold">I would like to buy:</span>
          <div className="flex items-center gap-5 font-semibold">
            <input className="text-5xl text-center w-80"></input>
            <button className="p-4 border border-gray-300">BTC</button>
            <button className="p-4 border border-gray-300">THB</button>
          </div>
        </div>
        <div className="text-3xl font-semibold">
          <span>I will Pay:</span>
          <div>
            44,054 <div>THB</div>
          </div>
        </div>
        <button>Buy Coins</button>
      </div>
    </div>
  );
};
