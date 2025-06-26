import { CompanyData } from "#lib/constants/footerData";
import React from "react";
import { Link } from "react-router-dom";

const CompanySection = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="heading">Company</h2>
      <div className="flex flex-col menu">
        {CompanyData?.length > 0 &&
          CompanyData.map((item) => (
            <Link key={item.id} to={item.link} className="menu--item">
              {item.title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CompanySection;
