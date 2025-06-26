import ProjectCard, { type PropsType } from "#components/Card/ProjectCard";
import Loader from "#components/common/Loader";
import { useFetchProjects } from "#lib/api/apis";

const KeyHighlights = () => {
  const { data: projectData, isLoading: isProjectLoading } = useFetchProjects();
  const keyProjects: PropsType[] =
    (projectData?.length > 0 &&
      (projectData as PropsType[])
        ?.filter((item) => item?.is_key_highlight)
        .sort((a, b) => a.order - b.order)) ||
    [];
  return (
    <>
      {isProjectLoading ? (
        <Loader className="h-[3550px] w-screen" />
      ) : (
        <div className="container !p-0 !px-4">
          <div className="grid grid-cols-1 min-[992px]:grid-cols-2 gap-x-10 gap-y-20 min-[992px]:gap-y-28 pb-[50px] md:pb-[80px]">
            {keyProjects?.length > 0 &&
              keyProjects.map((project, idx) => (
                <ProjectCard key={project.id} items={project} index={idx} />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default KeyHighlights;
