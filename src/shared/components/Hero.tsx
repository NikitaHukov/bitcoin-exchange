export const Hero = () => {
  return (
    <div className="flex justify-between text-balance max-content mx-auto items-center mt-40">
      <div className=" grid justify-center gap-6">
        <div className="text-center">
          <span className="text-2xl font-extrabold text-sky-400">Inside Thailand</span>
          <div className="text-5xl font-extrabold p-5 grid gap-2">
            <span>Buy, Sell Bitcoins</span>
            <p>Simply & Securely</p>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="flex gap-6">
            <div className="w-24 h-24 bg-green-500 rounded-lg" />
            <span className="text-2xl w-[350px]">
              It's easy to set up your free account, and you will be able to exchange in no time.
            </span>
          </div>
          <div className="flex gap-6">
            <div className="w-24 h-24 bg-black rounded-lg" />
            <div className="text-2xl flex w-[350px]">
              <span>
                All your data is encrypted with a 256-bit encryption and the data exchanged with us
                is encrypted with 256-bit SSL.
              </span>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="h-px w-60 bg-slate-300 mx-auto m-5 rounded-sm" />
          <span className="text-sky-400 text-lg font-semibold">Questions about Bitcoin?</span>
        </div>
      </div>
      <div className=" p-16 border border-slate-300 w-[600px]">
        <div className="text-2xl font-semibold grid grid-flow-col grid-cols-2">
          <button className="p-7 border border-slate-300 border-r-0">Buy Bitcoin</button>
          <button className="p-7 border border-slate-300 ">Sell Bitcoin</button>
        </div>
        <div className="py-12">
          <div className="text-xl font-bold mb-4">I would like to buy:</div>
          <div className="flex items-center gap-2 font-semibold justify-between">
            <input className="text-5xl text-center border border-slate-300 w-full h-16"></input>
            <div className="flex">
              <button className="p-4 border border-slate-300 border-r-0 h-16">BTC</button>
              <button className="p-4 border border-slate-300 h-16">THB</button>
            </div>
          </div>
        </div>
        <div className="text-3xl font-bold">
          <span className="text-xl">I will pay:</span>
          <div className="flex justify-end gap-1">
            44,054 <span className="text-lg">THB</span>
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <div className="border border-slate-300 rounded-sm w-full p-4">
            <button className="w-full text-2xl font-bold bg-amber-400 border-amber-600 hover:bg-yellow-400 px-24 h-20 rounded-sm">
              Buy Coins
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
