export const LastInfo = () => {
  return (
    <div>
      <div className="flex grow bg-sky-100 mt-60">
        <img
          className="flex grow h-20"
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTaABWelVHf1E3JnLsi3uKTGIm7i05_c7Rme4LQDK_5xDJjuJaX"
        ></img>
      </div>
      <div className="bg-sky-100 grid grid-cols-2 place-items-center gap-5 ">
        <div className="w-[700px] text-3xl font-bold">
          Is a bank in Thailand required?
          <div className="text-2xl font-normal py-3">
            If you are going to buy bitcoins, you don't need a bank account. If
            you are going to sell bitcoins you will need to have a bank account.
          </div>
        </div>
        <div className="w-[700px] text-3xl font-bold">
          How much does it cost?
          <div className="text-2xl font-normal py-3">
            We charge two percent for every transaction. So if you buy bitcoins
            for hundred dollars, it will cost you 2 dollars in transaction fees.
            We are a bit more expensive than other services, and if you live
            outside Thailand we may not be your best choose.
            <div className="py-3">
              We make up for it by being the most secure and convenient exchange
              in Thailand. It's the reason why we have grown to become the
              biggest bitcoin exchange in this country.
            </div>
          </div>
        </div>
        <div className="w-[700px] text-3xl font-bold">
          Why do I need a bank account to sell bitcoins?
          <div className="text-2xl font-normal py-3">
            Because we need to be able to track you. The Thai government would
            be angry with us if we didn't. They are happy when you buy bitcoins
            because you are adding to the Thai economy. But when you sell
            bitcoins to us, they fear that you will take the money and leave the
            country. So they enforce higher standards when selling.
          </div>
        </div>
        <div className="w-[700px] text-3xl font-bold">
          How can I protect myself?
          <div className="text-2xl font-normal py-3">
            Bitcoin can be a bit hard to grasp and this fact create a great
            hunting ground for scam artists. So we recommend to always double
            check any source and be sceptical, even of what we say.
          </div>
        </div>

        <div className="w-[700px] text-3xl font-bold">
          I have a tourist visa so I can't open a bank account, what can I do if
          I want to sell bitcoins
          <div className="text-2xl font-normal py-3">
            We recommend using{" "}
            <span className="text-sky-500 font-bold">LocalBitcoins</span>. It's
            like eBay for bitcoin traders. People advertise that they want to
            exchange bitcoins. You then meet them in person and make the trade.
            It's a bit scary for the first time, and that's alright. We have
            used them much in the past and they are great.
          </div>
        </div>
        <div className="w-[700px] text-2xl font-bold text-sky-500">
          We have compiled a security checklist with many respectable sources
          from the Bitcoin community to help you navigate and make your
          experience as enjoyable as possible.
        </div>
      </div>
    </div>
  );
};
