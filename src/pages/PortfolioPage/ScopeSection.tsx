import { Link } from "react-router-dom";
import type { ScopeItemType } from ".";

interface ScopeSectionPropsType {
  ScopeData: ScopeItemType[];
  selectedScope?: ScopeItemType;
}

const ScopeSection: React.FC<ScopeSectionPropsType> = ({
  ScopeData,
  selectedScope,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-3 !px-[30px] !py-[10px] shadow-xl bg-white container">
      {ScopeData?.length > 0 &&
        ScopeData.map((scope) => (
          <Link
            to={scope.link}
            key={scope.id}
            className={`px-2 py-[5.2px] h-fit text-center text-xs sm:text-start font-semibold cursor-pointer
    transition-colors duration-700 ease-in-out
    hover:text-[#0055ff] hover:bg-[#ffdc1c]  ${
      selectedScope?.id === scope?.id
        ? "text-[#0055ff] bg-[#ffdc1c]"
        : "text-[#989898] "
    }`}
          >
            {scope.title}
          </Link>
        ))}
    </div>
  );
};

export default ScopeSection;
