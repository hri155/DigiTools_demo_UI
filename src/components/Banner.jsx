import banner from '../assets/banner.png';
import icon from '../assets/icon.svg';
import play from '../assets/Play.png';

const Banner = () => {
  return (
    <section className="hero py-12 md:py-20">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-16 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <img
          src={banner}
          alt="banner"
          className="w-full max-w-md lg:max-w-xl rounded-lg"
        />

        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 text-[#4f39f6] bg-[#e1e7ff] px-3 py-1 rounded-full">
            <img src={icon} className="w-4 h-4" />
            New: AI-Powered Tools Available
          </span>

          <h1 className="text-3xl md:text-5xl leading-tight font-bold mt-6">
            Supercharge Your Digital Workflow
          </h1>

          <p className="py-6 text-[#627382] max-w-xl">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <button className="btn btn-primary rounded-full">
              Explore Products
            </button>

            <button className="inline-flex items-center gap-2 text-[#581cf2d1] font-bold bg-transparent border-2 border-[#581cf2d1] px-4 py-2 rounded-full">
              <img src={play} className="w-4 h-4" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;