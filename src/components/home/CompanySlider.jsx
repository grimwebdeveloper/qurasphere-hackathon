const CompanySlider = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-4">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-zinc-800">
        We worked with
      </h2>
      <div
        id="marquee-wrapper"
        className="overflow-hidden relative"
        style={{
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          maskImage:
            'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div className="flex gap-8 animate-marquee whitespace-nowrap w-max">
          {Array.from({ length: 2 }).map((_, i) =>
            Array.from({ length: 8 }).map((_, j) => (
              <div
                key={`${i}-${j}`}
                className="min-w-fit text-xl md:text-2xl font-light flex items-center gap-3 md:gap-4 px-2 md:px-4 text-zinc-700"
              >
                <img
                  src="titan-favicon.png"
                  alt="titan"
                  className="w-8 md:w-12"
                />
                <span className="tracking-wide">TITAN</span>
              </div>
            ))
          )}
        </div>
      </div>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 18s linear infinite;
            will-change: transform;
          }
        `}
      </style>
    </div>
  );
};

export default CompanySlider;
