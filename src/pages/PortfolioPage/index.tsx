import HeroSection from "./HeroSection.tsx";
import ScopeSection from "./ScopeSection.tsx";
import { ScopeData } from "#lib/constants/scopeData.ts";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
export interface ScopeItemType {
  id: string;
  title: string;
  link: string;
}

const PortfolioPage = () => {
  const location = useLocation();

  const currentScope = ScopeData.find(
    (item) => item.link === location.pathname
  );
  const [selectedScope, setSelectedScope] = useState<ScopeItemType | undefined>(
    currentScope
  );

  useEffect(() => {
    setSelectedScope(currentScope);
  }, [location.pathname]);
  return (
    <div className="">
      <HeroSection />
      <section className="-mt-14 z-1 relative">
        <ScopeSection ScopeData={ScopeData} selectedScope={selectedScope} />
      </section>
      <div className="mt-[250px] xl:mt-[300px]">
        <Outlet />
      </div>
    </div>
  );
};

export default PortfolioPage;
