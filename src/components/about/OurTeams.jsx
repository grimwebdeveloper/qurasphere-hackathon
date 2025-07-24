import Heading from '../global/Heading';

const OurTeams = () => {
  const ourTeamsData = [
    {
      id: 1,
      pic: 'saqlain.png',
      name: 'Syed Saqlain Ahmad',
      position: 'Full Stack Developer',
    },
    {
      id: 2,
      pic: 'shadab.jpg',
      name: 'Shadab Majid',
      position: 'Full Stack Drupal Developer',
    },
    {
      id: 3,
      pic: 'minhaj.jpg',
      name: 'Minhaj Alam',
      position: 'Front-end Developer',
    },
    {
      id: 4,
      pic: 'tajdar.jpg',
      name: 'Tajdar Adil',
      position: 'Front-end Developer',
    },
    {
      id: 5,
      pic: 'tauhid.jpg',
      name: 'Tauhid Raza',
      position: 'Front-end Developer',
    },
  ];
  return (
    <section className='max-w-screen-xl mx-auto px-4 mb-16'>
      <Heading
        title='Meet Our Team'
        tagline='The experts behind your success'
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ourTeamsData.map((team) => (
          <div
            key={team.id}
            className="bg-white border border-zinc-100 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-0 group"
          >
            <div className="w-full overflow-hidden rounded-t-2xl">
              <img
                src={team.pic}
                alt={team.name}
                className="w-full h-[30rem] object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col items-center w-full">
              <h3 className="text-2xl font-bold text-zinc-900 mb-1 text-center">{team.name}</h3>
              <h4 className="text-zinc-500 text-lg font-semibold text-center">{team.position}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeams;
