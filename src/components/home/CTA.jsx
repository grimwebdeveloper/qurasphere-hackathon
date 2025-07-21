import Button from '../global/Button';

const CTA = () => {
  return (
    <section className=" text-white py-8 bg-blue-600">
      <div className="max-w-screen-xl mx-auto p-4 text-center">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">
          Ready to Grow?
          <br /> Let's Build Something Amazing Together
        </h2>
        <p className="my-8 text-lg md:text-xl lg:text-2xl font-medium max-w-2xl mx-auto">
          Join 10+ successful businesses who've transformed their online
          presence with Qurasphere
        </p>
        <Button content="Contact Us" />
      </div>
    </section>
  );
};

export default CTA;
