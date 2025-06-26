import { useNavigate } from "react-router-dom";
import RightArrow from "#assets/dynamic/RightArrow";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-[180px] sm:text-[200px] leading-[240px] font-[900] text-[#10294F]">
        404
      </h1>
      <h2 className="text-[32px] leading-[38.4px] font-[600] text-[#000000]">
        PAGE NOT FOUND!
      </h2>
      <h3 className="text-[#6C6C6C] text-[20px] leading-[24px] font-[500] pt-[7px]">
        Oops it seems you follow backlink
      </h3>
      <div>
        <button
          onClick={() => navigate("/")}
          className="border-[1.8px] border-[#0065F2] px-[33.5px] py-[16px] rounded-[899.1px] mt-[45px] flex items-center justify-center text-[#0065F2] text-[20px] leading-[24px] font-[500] gap-[24px] cursor-pointer "
        >
          <div className="rotate-180">
            <RightArrow fill="#0065F2" />
          </div>
          Back to Home
        </button>
      </div>
    </div>
  );
};
export default PageNotFound;
