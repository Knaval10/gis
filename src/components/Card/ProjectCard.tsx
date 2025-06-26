import { useRevealOnScroll } from "#hooks/useRevealOnScroll";

export interface PropsType {
  id: number;
  subtitle: string;
  title: string;
  clients: string;
  start_date: string;
  end_date: string;

  photo: string;
  is_key_highlight: boolean;
  order: number;
}
interface ProjectItemType {
  items: PropsType;
  index: number;
}

const ProjectCard = ({ items, index }: ProjectItemType) => {
  const { subtitle, title, clients, start_date, end_date, photo } = items;
  const { ref, isVisible } = useRevealOnScroll();
  const bgColor = [
    "#174bdd",
    "#efefef",
    "#1281ad",
    "#333",
    "#174bdd",
    "#b30732",
    "#25a596",
    "#f8e1e5",
    "#174bdd",
    "#efefef",
  ];
  return (
    <div
      ref={ref}
      className={`flex flex-col  opacity-0 h-fit hover:transition-transform hover:-translate-y-28 duration-500 ease-in-out hover:shadow-2xl cursor-pointer ${
        isVisible ? "opacity-100 -translate-y-25" : ""
      }`}
      style={{
        backgroundColor: `${bgColor[index]}`,
        color:
          bgColor[index] === "#efefef" || bgColor[index] === "#f8e1e5"
            ? "#333333"
            : "white",
        // transitionDelay: `${index * 100}ms`,
      }}
    >
      <section className="flex flex-col gap-5 pt-12 px-8 pb-4">
        <h2 className="text-[16.8px] min-[1440px]:text-2xl font-semibold capitalize">
          {title}
        </h2>
        <p className="text-[11px] min-[1440px]:text-[15px]">{subtitle}</p>
        <div className="flex flex-col  min-[1200px]:flex-row min-[1200px]:gap-5 w-full">
          <article className="flex flex-col gap-0.5 text-[10px] min-[1440px]:text-[13px] font-semibold w-full min-[1200px]:w-1/2 h-[50px] min-[1200px]:h-16">
            <span
              style={{
                color:
                  bgColor[index] === "#efefef" || bgColor[index] === "#f8e1e5"
                    ? "#ffab00"
                    : "#ffdc1c",
              }}
            >
              Client
            </span>
            <h2>{clients}</h2>
          </article>
          <article className="flex flex-col gap-0.5 text-[10px]  min-[1440px]:text-[13px] font-semibold w-full min-[1200px]:w-1/2 h-[50px] min-[1200px]:h-16">
            <span
              style={{
                color:
                  bgColor[index] === "#efefef" || bgColor[index] === "#f8e1e5"
                    ? "#ffab00"
                    : "#ffdc1c",
              }}
            >
              Time Duration
            </span>
            <h2>
              {start_date} - {end_date}
            </h2>
          </article>
        </div>
      </section>
      <section>
        <figure>
          <img src={photo} alt="project banner" />
        </figure>
      </section>
    </div>
  );
};

export default ProjectCard;
