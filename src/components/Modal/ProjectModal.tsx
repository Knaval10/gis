import type { ProjectDetailType } from "#pages/PortfolioPage/PortfolioDetails/KeyHighlightsDetails";
import "./modalStyle.css";
interface ProjectModalPropsType {
  item: ProjectDetailType;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const ProjectModal: React.FC<ProjectModalPropsType> = ({
  item,
  setShowModal,
}) => {
  const {
    photo,
    subtitle,
    title,
    clients,
    start_date,
    end_date,
    focus_area,
    description,
  } = item;
  return (
    <main className="flex flex-col gap-3 justify-center z-[100] container ">
      <div
        onClick={() => setShowModal(false)}
        className="flex justify-end items-center w-fit self-end text-white text-xl font-semibold cursor-pointer border border-transparent bg-opacity-0 hover:border-[#ffab00] transition-colors duration-500 rounded-full p-2 leading-3"
      >
        {" "}
        x
      </div>
      <div className="overflow-auto bg-white">
        <div className="flex flex-col max-h-[90vh]">
          <section className="flex flex-col lg:flex-row">
            <figure>
              <img src={photo} alt="image" />
            </figure>
            <article className="flex flex-col gap-3 p-3">
              <div className="flex flex-col gap-[10px]">
                <h2 className="text-[16.8px] font-semibold">{title}</h2>
                <p className="text-[11px]">{subtitle}</p>
              </div>
              <div className="flex flex-col gap-2 text-[10px] min-[1440px]:text-[13px] text-[#333333] font-semibold">
                <article>
                  <span className="text-[#ffab00] ">Client</span>
                  <p>{clients}</p>
                </article>
                <article>
                  <span className="text-[#ffab00]">Time Duration</span>
                  <p>
                    {start_date} - {end_date}
                  </p>
                </article>
                <article>
                  <span className="text-[#ffab00]">Focus Area</span>
                  <p className="flex gap-1">
                    {focus_area?.length > 0
                      ? focus_area.map((item, idx) => (
                          <span key={idx}>
                            {item}
                            {idx < focus_area?.length - 1 ? "," : ""}
                          </span>
                        ))
                      : null}
                  </p>
                </article>
              </div>
            </article>
          </section>
          <section
            className="p-6 description"
            dangerouslySetInnerHTML={{ __html: description }}
          ></section>
        </div>
      </div>
    </main>
  );
};

export default ProjectModal;
