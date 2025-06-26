import { sectionNavData } from "#lib/constants/sectionNavData";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container mt-24 h-[47vh]">
      <div className="flex flex-col items-center justify-center h-full gap-5">
        {sectionNavData?.length > 0 &&
          sectionNavData.map((section) => (
            <Link
              key={section.id}
              to={section.link}
              className="hover:text-red-500"
            >
              {section.title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
