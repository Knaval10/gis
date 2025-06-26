import { useState } from "react";
import ProjectModal from "#components/Modal/ProjectModal";
import { useFetchProjectsDetails } from "#lib/api/apis";
import { useParams } from "react-router-dom";
export interface ProjectDetailType {
  id: number;
  title: string;
  subtitle: string;
  clients: string;
  start_date: string;
  end_date: string;
  focus_area: string[];
  description: string;
  photo: string;
}
const KeyHighlightsDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [showModal, setShowModal] = useState(true);

  const { data: projectDetails } = useFetchProjectsDetails(Number(id));
  const ProjectDetailItem =
    (projectDetails?.length > 0 && projectDetails[0]) || {};
  return (
    <div>
      {showModal && ProjectDetailItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-xss"
            onClick={() => setShowModal(false)}
          ></div>
          <ProjectModal item={ProjectDetailItem} setShowModal={setShowModal} />
        </div>
      )}
    </div>
  );
};

export default KeyHighlightsDetails;
