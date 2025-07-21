const Heading = ({ title, tagline }) => {
  return (
    <>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-700 to-purple-600 text-transparent bg-clip-text">
          {title}
        </h2>
        <p className="my-4 text-zinc-900 text-lg md:text-xl lg:text-2xl">{tagline}</p>
      </div>
    </>
  );
};

export default Heading;
