import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SubscribeNewsletter from "#components/common/SubscribeNewsletter";
import { useEffect, useState } from "react";
import ChevronDown from "#assets/dynamic/ChevronDown";

const Layout = () => {
  const [showSuspendButton, setShowSuspendButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowSuspendButton(true);
      } else {
        setShowSuspendButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <section className="">
        <Navbar />
      </section>
      <section className=" bg-white">
        <Outlet />
        <div
          onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-12 right-10 z-[100] transition-all duration-700 ${
            showSuspendButton
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          }`}
        >
          <div
            className="flex items-center justify-center cursor-pointer
    text-[#05f] bg-[#fffee6] hover:bg-[#f5f2ae]
    w-11 h-11 rounded-full
    shadow-[0px_18px_10px_-2px_rgba(0,0,0,0.3)] 
    transition-colors duration-500"
          >
            <ChevronDown className="rotate-180" />
          </div>
        </div>
      </section>
      <section className="w-full bg-[#F4F4F4]">
        <SubscribeNewsletter />
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
