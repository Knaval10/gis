import About from "#assets/icons/About.svg";
import Team from "#assets/icons/Team.svg";
import Work from "#assets/icons/work.png";
import Award from "#assets/icons/Award.svg";
import Event from "#assets/icons/Event.svg";
import Publication from "#assets/icons/Publication.svg";
import News from "#assets/icons/News.svg";
import type { NavItemType } from "#components/Layout/Navbar";

export const navData: NavItemType[] = [
  {
    id: "services",
    label: "Services",
    link: "/services",
  },
  {
    id: "portfolio",
    label: "Portfolio",
    link: "/portfolio",
    children: [
      {
        id: "general",
        label: "General",
        link: "/portfolio/general",
      },
      {
        id: "international",
        label: "International",
        link: "/portfolio/international",
      },
    ],
  },
  {
    id: "company",
    label: "Company",
    link: "/company",
    children: [
      {
        id: "about-us",
        label: "About Us",
        link: "/company/about",
        icon: About,
      },
      {
        id: "team",
        label: "Team",
        link: "/company/team",
        icon: Team,
      },
      {
        id: "work-with-us",
        label: "Work With Us",
        link: "/company/work-with-us",
        icon: Work,
      },
      {
        id: "awards",
        label: "Awards & Achievements",
        link: "/company/awards",
        icon: Award,
      },
    ],
  },
  {
    id: "geoai",
    label: "GeoAI",
    link: "/geoai",
  },
  {
    id: "events-media",
    label: "Events & Media",
    link: "/events-media",
    children: [
      {
        id: "events",
        label: "Events",
        link: "/events-media/events",
        icon: Event,
      },
      {
        id: "media",
        label: "Media",
        link: "/events-media/media",
        icon: News,
      },
      {
        id: "publications",
        label: "Publications",
        link: "/events-media/publications",
        icon: Publication,
      },
    ],
  },
  {
    id: "blogs",
    label: "Blogs",
    link: "/blogs",
  },
];
