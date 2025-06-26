/*Home page for navigating to three sections: map, form and key highlights*/

import { sectionNavData } from "#lib/constants/sectionNavData";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container mt-24 h-[47vh]">
      <div className="flex flex-col items-center justify-center h-full gap-5">
        <h2 className="text-2xl font-bold pb-10">
          Click to navigate to the particular section.
        </h2>
        {sectionNavData?.length > 0 &&
          sectionNavData.map((section) => (
            <Link
              key={section.id}
              to={section.link}
              className="hover:text-[#ffab00] text-2xl hover:underline"
            >
              {section.title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
