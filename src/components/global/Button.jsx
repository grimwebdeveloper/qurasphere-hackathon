import { Link } from "react-router-dom";

const Button = ({ content }) => {
  return (
    <button
      type='button'
      className='bg-gradient-to-r from-zinc-900 to-zinc-900 text-white font-semibold px-8 py-3 rounded-full cursor-pointer hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 duration-500 transition-colors'
    >
      <Link to="/contact">{content}</Link>
    </button>
  );
};

export default Button;
