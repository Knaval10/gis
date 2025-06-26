import type { ControlType } from ".";
import ChevronLeft from "#assets/dynamic/ChevronLeft";
const ControllerSwitch: React.FC<ControlType> = ({
  setShowControlBox,
  showControlBox,
}) => {
  return (
    <>
      {showControlBox ? null : (
        <div
          onClick={() => setShowControlBox((prev) => !prev)}
          className="cursor-pointer h-16 w-5 bg-orange-300 rounded-l-lg absolute right-0 top-16 md:top-4 z-10 p-2"
        >
          <ChevronLeft className="block animate-ping h-full w-5 fill-black " />
        </div>
      )}
    </>
  );
};

export default ControllerSwitch;
