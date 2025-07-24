const CardsStyle = ({ data }) => {
  // console.log(...data);
  return (
    <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {data.map((item) => (
        <div
          key={item.id}
          className={`border border-zinc-200 ${item.borderColor} rounded-xl p-8 flex flex-col items-center bg-white shadow-xl hover:shadow-2xl ${item.shadowColor} transition-shadow duration-300`}
        >
          <div
            className={`flex justify-center items-center rounded-full ${item.iconColor} h-20 w-20 mb-4 shadow-md`}
          >
            {item.icon}
          </div>
          <h3 className='text-xl font-semibold text-zinc-900 text-center mb-2'>
            {item.title}
          </h3>
          <p className='text-base text-zinc-700 text-center'>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CardsStyle;
