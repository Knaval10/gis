import { EventsAndMiscellaneousData } from "#lib/constants/footerData";
import { Link } from "react-router-dom";

const MiscellaneousSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="heading">Events & Media</h2>
      <div className="flex flex-col menu">
        {EventsAndMiscellaneousData?.length > 0 &&
          EventsAndMiscellaneousData.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className={`${
                item.id > 3 ? "heading py-1" : "pb-1.5 menu--item"
              }`}
            >
              {item.title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MiscellaneousSection;
