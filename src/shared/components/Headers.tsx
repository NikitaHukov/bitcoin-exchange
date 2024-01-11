export const Headers = () => {
  return (
    <div>
      <div className="bg-slate-50 border-b border-slate-200 pl-4">
        <div className="flex justify-between items-center max-content mx-auto">
          <div className="font-semibold lg:flex gap-2">
            <div className="flex gap-2">
              <span>Bitcoin Price:</span>
              <span className="text-sky-500"> 43,106</span>
            </div>
            <div className="text-gray-400 hidden lg:block">
              05-12-2017 - 10:42pm
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="hidden md:flex gap-4">
              <div>Trade</div>
              <div>Merchants</div>
              <div>News</div>
              <div>About</div>
              <div>Contact</div>
            </div>
            <div className="md:hidden">
              <div className="bg-red-500 w-4 h-4 rounded"></div>
            </div>
            <div className="flex gap-4 px-4 border-x border-gray-300  h-16 items-center">
              <div className="bg-yellow-500 h-5 w-5 rounded-lg"></div>
              <div className="bg-yellow-500 h-5 w-5 rounded-lg"></div>
            </div>

            <div className="md:flex gap-2 pr-4 items-center hidden">
              <div className="bg-yellow-500 h-5 w-5 rounded-lg"></div>Login
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" flex justify-between p-5 border-b border-gray-300">
          <div className=" flex gap-5 text-4xl font-extrabold align-middle pl-11">
            <div className="bg-yellow-500 h-10 w-10 rounded-lg"></div>Bitcoin
            <div className=" font-normal text-2xl p-1">
              Buy,Sell, Exchange Bitcoins in Thailand
            </div>
          </div>
          <div className="flex gap-6 text-4xl font-extrabold pr-11">
            <div>Buy Bitcoin</div>
            <div>Sell Bitcoin</div>
            <div>Top-up</div>
          </div>
        </div>
      </div>
    </div>
  );
};
