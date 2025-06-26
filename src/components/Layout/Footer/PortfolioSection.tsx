import { PortfolioData } from "#lib/constants/footerData";
import { Link } from "react-router-dom";

const PortfolioSection = () => {
  return (
    <section className="flex flex-col gap-4">
      <span className="heading">Services</span>
      <span className="heading">Portfolio</span>
      <div className="flex flex-col menu">
        {PortfolioData?.length > 0 &&
          PortfolioData.map((item) => (
            <Link key={item.id} to={item.link} className="menu--item">
              {item.title}
            </Link>
          ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
