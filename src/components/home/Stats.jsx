const Stats = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <div className="text-5xl font-extrabold text-blue-600">10+</div>
          <div className="mt-2 text-lg font-medium text-zinc-700">Satisfied Clients</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-5xl font-extrabold text-blue-600">120+</div>
          <div className="mt-2 text-lg font-medium text-zinc-700">Issues Solved</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-5xl font-extrabold text-blue-600">5+</div>
          <div className="mt-2 text-lg font-medium text-zinc-700">Years of Experience</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
