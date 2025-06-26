import curves from "#assets/icons/curves.svg";

const HeroSection = () => {
  return (
    <div className="bg-[#F4F4F4] h-[400px] relative">
      <section className="flex flex-col items-center justify-center text-center leading-11 gap-[25px] absolute inset-0 pt-10">
        <h1 className="text-[#ffab00] uppercase font-semibold">portfolio</h1>
        <p className="text-[#000000] text-[40px]">
          Diverse, <span className="text-[#124af4]">Impactful,</span> and
          Reliable.
        </p>
      </section>
      <figure className="absolute top-0 z-0 h-fit w-fit">
        <img src={curves} alt="curve lines" />
      </figure>
    </div>
  );
};

export default HeroSection;
