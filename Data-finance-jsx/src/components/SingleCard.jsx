const SingleCard = ({ img, h1, price, p1, p2, p3 }) => {
  return (
    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
      <img className="w-20 mx-auto mt-[-3rem]" src={img} alt="/" />
      <h1 className="text-2xl font-bold text-center py-8 ">{h1}</h1>
      <p className="text-center text-4xl font-bold">{price}</p>
      <div className="text-center font-medium ">
        <p className="py-2 border-b mx-8 mt-8">{p1}</p>
        <p className="py-2 border-b mx-8">{p2}</p>
        <p className="py-2 border-b mx-8">{p3}</p>
      </div>
      <button className="bg-[#00df9a] w-[200px] rounded-md text-xl font-medium my-6 mx-auto py-3 text-black">
        Start trail
      </button>
    </div>
  );
};

export default SingleCard;
