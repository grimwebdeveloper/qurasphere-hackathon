const Button = ({ content }) => {
  return (
    <button
      type="button"
      className="px-8 py-3 font-semibold rounded-full bg-black text-white cursor-pointer"
    >
      {content}
    </button>
  );
};

export default Button;
