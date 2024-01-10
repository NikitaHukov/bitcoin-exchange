export const Headers = () => {
  return (
    <div>
      <div className=" flex justify-between p-3 font-extrabold ">
        <div className=" flex gap-2 ml-10">
          Bitcoin Price:<div className="text-sky-500">43,106</div>{" "}
          <div className="text-gray-400 ml-5 bg-red-500">
            5 March 2017 - 10:42pm
          </div>
        </div>
        <div className="flex gap-3">
          <div>Trade</div>
          <div>Merchants</div>
          <div>News</div>
          <div>About</div>
          <div>Contact</div>
          <div className="bg-black w-[1px]"></div>
          <div className="bg-yellow-500 h-5 w-5"></div>
          <div className="bg-yellow-500 h-5 w-5"></div>
          <div className="bg-black w-[1px]"></div>
          <div className="flex gap-2 mr-10">
            <div className="bg-yellow-500 h-5 w-5"></div>Login
          </div>
        </div>
      </div>
    </div>
  );
};
