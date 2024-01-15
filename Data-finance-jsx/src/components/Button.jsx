const Button = ({ name }) => {
  return (
    <div>
      <button className="bg-[#00df9a] w-[200px] rounded-md text-xl font-medium my-6 mx-auto py-3 text-black">
        {name}
      </button>
    </div>
  );
};

export default Button;
