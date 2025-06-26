import CompanySection from "./CompanySection";
import ContactSection from "./ContactSection";
import MiscellaneousSection from "./MiscellaneousSection";
import PortfolioSection from "./PortfolioSection";
import SocialAndCopyright from "./SocialAndCopyright";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-[15px] container mt-30 !pt-[70px]">
      <div className="flex flex-col lg:flex-row items-center md:items-start lg:justify-between text-center md:text-start gap-4">
        <ContactSection />
        <PortfolioSection />
        <section className="flex flex-col gap-4">
          <CompanySection />
          <MiscellaneousSection />
        </section>
      </div>
      <SocialAndCopyright />
    </footer>
  );
};

export default Footer;
