import { useQuery } from "@tanstack/react-query";
import { queries } from "./queries";
import { getApi } from "./requests";

export const useFetchProjects = () =>
  useQuery({
    queryKey: [queries.fetch_projects],
    queryFn: () => getApi("/projects"),
  });

export const useFetchProjectsDetails = (id: number) =>
  useQuery({
    queryKey: [queries.fetch_projects_details, id],
    queryFn: () => getApi("/projects", { id }),
  });
