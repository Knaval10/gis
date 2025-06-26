import ChevronLeft from "#assets/dynamic/ChevronLeft";
import { navData } from "#lib/constants/navbarData";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import companyLogo from "#assets/icons/naxa-logo.png";
import RightArrow from "#assets/dynamic/RightArrow";
import Button from "#components/common/Button";

export interface NavSubItemType {
  id: string;
  label: string;
  link: string;
  icon?: string;
}

export interface NavItemType {
  id: string;
  label: string;
  link: string;
  children?: NavSubItemType[];
}

const Navbar = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLLIElement>(null);
  useEffect(() => {
    const handleOutsideHover = (e: MouseEvent) => {
      if (menuRef?.current && !menuRef?.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mouseleave", handleOutsideHover);
    return () => document.removeEventListener("mouseleave", handleOutsideHover);
  }, []);

  return (
    <nav className="z-10 bg-transparent absolute top-0 w-full">
      <section className="flex justify-center bg-[#ffdc1c] z-[50] p-2">
        <a
          href="https://geoai.naxa.com.np/"
          target="_blank"
          className="flex items-center gap-2 text-center underline  text-[#333] hover:text-[#05f] text-xs font-semibold group "
        >
          Check out our pioneering CEO AI products for intelligent geosaptial
          solutions!
          <RightArrow className="hidden group-hover:block h-3" />
        </a>
      </section>
      <div className="flex justify-between items-center !p-2 container">
        <figure>
          <img src={companyLogo} alt="company logo" />
        </figure>
        <ul className="hidden lg:flex gap-8">
          {navData.map((item) => {
            const hasChildren = !!item?.children;
            return (
              <li
                ref={hasChildren ? menuRef : undefined}
                key={item.id}
                className="relative w-fit h-fit group"
              >
                <div
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.id)}
                >
                  <Link
                    to={item.link}
                    className={`flex items-center gap-2 font-medium text-[#333132] text-[12.6px] min-[1440px]:text-base ${
                      hasChildren ? "" : "hover:text-blue-500"
                    } `}
                  >
                    {item.label}
                    {hasChildren && (
                      <ChevronLeft className="fill-[#333132] -rotate-90 group-hover:-rotate-270 transition-transform duration-500" />
                    )}
                  </Link>

                  {/* Submenu */}
                  {hasChildren && activeMenu === item.id && (
                    <div className="flex flex-col absolute">
                      {/* Triangle */}
                      <div
                        className="w-24 h-20 bg-white"
                        style={{
                          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                        }}
                      ></div>

                      {/* Submenu */}
                      <ul
                        onMouseLeave={() => setActiveMenu(null)}
                        className="absolute left-0 top-2 mt-2 w-[300px] bg-white shadow-lg rounded z-20"
                      >
                        {item.children!.map((sub) => (
                          <li key={sub.id}>
                            <Link
                              to={sub.link}
                              className="flex items-center gap-3 px-4 py-2 hover:bg-[#ffe44f] text-xs text-[#333132] font-medium w-full"
                            >
                              {sub.icon && (
                                <figure className="w-6 h-6">
                                  <img
                                    src={sub.icon}
                                    alt="submenu icon"
                                    className="w-full h-full object-contain"
                                  />
                                </figure>
                              )}
                              <span>{sub.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
        <Button
          type={"button"}
          text={"Let's link"}
          className="font-semibold text-[11.6px] min-[1440px]:text-[15px]"
        />

        {/*For Small screen */}
        <div className="flex flex-col w-10 h-10 relative lg:hidden">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className={`w-full h-full cursor-pointer text-white flex flex-col items-center justify-center  text-3xl  z-[100] ${
              isOpen ? "absolute -top-13 min-[513px]:-top-8 -right-2" : "ml-2"
            }`}
          >
            <span
              className={`block w-6 h-1  rounded transition-transform duration-500 ${
                isOpen ? "rotate-45 translate-y-2 bg-blue-500" : "bg-[#ffab00]"
              }`}
            ></span>
            <span
              className={`block w-6 h-1  rounded my-1 transition-opacity duration-500 ${
                isOpen ? "opacity-0 bg-blue-500" : "opacity-100 bg-[#ffab00]"
              }`}
            ></span>
            <span
              className={`block w-6 h-1  rounded transition-transform duration-500 ${
                isOpen
                  ? "-rotate-45 -translate-y-2 bg-blue-500"
                  : "bg-[#ffab00]"
              }`}
            ></span>
          </button>
          <ul
            className={`flex flex-col gap-8 text-[12.56px] bg-[#ffab00] h-screen pl-[15px] pr-9 py-[15px] transition-transform duration-500 absolute -top-14.5 min-[513px]:-top-11 right-0 z-[60] ${
              isOpen ? "translate-x-12.5 " : "translate-x-[115%]"
            }`}
          >
            {navData.map((item) => {
              const hasChildren = !!item?.children;
              return (
                <li
                  ref={menuRef}
                  key={item.id}
                  className="relative w-[250px] sm:w-[350px]  group top-20"
                >
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveMenu(item.id)}
                  >
                    <Link
                      to={item.link}
                      className={`flex items-center justify-between gap-2 font-medium text-[#333132] ${
                        hasChildren ? "" : "hover:text-blue-500"
                      } `}
                    >
                      {item.label}
                      {hasChildren && (
                        <ChevronLeft className="fill-[#333132]  -rotate-90 group-hover:-rotate-270 transition-transform duration-500" />
                      )}
                    </Link>

                    {/* Submenu */}
                    {hasChildren && activeMenu === item.id && (
                      <div className="flex flex-col absolute">
                        {/* Triangle */}
                        <div
                          className="w-24 h-20 bg-white"
                          style={{
                            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                          }}
                        ></div>
                        <ul
                          onMouseLeave={() => setActiveMenu(null)}
                          className="absolute left-0 top-2 mt-2 w-[250px] bg-white shadow-lg rounded z-20"
                        >
                          {item.children!.map((sub) => (
                            <li key={sub.id}>
                              <Link
                                to={sub.link}
                                className="flex items-center gap-3 px-4 py-2 hover:bg-[#ffe44f] text-xs text-[#333132] font-medium w-full"
                              >
                                {sub.icon && (
                                  <figure className="w-6 h-6">
                                    <img
                                      src={sub.icon}
                                      alt="submenu icon"
                                      className="w-full h-full object-contain"
                                    />
                                  </figure>
                                )}
                                <span>{sub.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
