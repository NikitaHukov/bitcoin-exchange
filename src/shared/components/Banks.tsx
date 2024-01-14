export const Banks = () => {
  return (
    <div>
      <div className="bg-sky-100 mt-24 border-t border-slate-300">
        <div className="p-10">
          <div className="bg-sky-100 grid grid-cols-6 place-items-center gap-20">
            <div className="bg-slate-300 w-64 h-32 rounded-lg"></div>
            <div className="bg-slate-300 w-64 h-32 rounded-lg"></div>
            <div className="bg-slate-300 w-64 h-32 rounded-lg"></div>
            <div className="bg-slate-300 w-64 h-32 rounded-lg"></div>
            <div className="bg-slate-300 w-64 h-32 rounded-lg"></div>
            <div className="bg-slate-300 w-64 h-32 rounded-lg"></div>
          </div>
        </div>
      </div>
      <div className="bg-sky-100 h-14 border-b border-slate-300">
        <div className="text-3xl font-semibold mt- bg-white w-max p-8 mx-auto border border-slate-300">
          We work with all the major banks in Thailand
        </div>
      </div>
    </div>
  );
};

// export const Banks = ({ BankImg }: any) => {
//   return (
//     <div className="bg-red-500 grid-cols-6 place-items-center gap-20">
//       <div className="bg-gray-300 w-60 h-44">{BankImg}</div>
//     </div>
//   );
