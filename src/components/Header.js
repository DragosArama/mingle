import Link from "next/link";

const JoeMingleComponent = () => {
  return (
    <div className="bg-yellow-400 w-full h-24 flex justify-center items-center mb-16">
      <Link href="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-48 h-24">
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="30" fontWeight="bold" fill="#000">
            JOE MINGLE
          </text>
        </svg>
      </Link>
      <div className="absolute right-4">
        <Link href="/partner" className="bg-black text-white py-2 px-4 rounded-xl text-xl cursor-pointer mt-16 mx-auto">
          Become a partner
        </Link>
      </div>
    </div>
  );
};

export default JoeMingleComponent;
