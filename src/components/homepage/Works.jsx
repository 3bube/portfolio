import kreatorspace from "/src/assets/images/kreatorspace.png";
import project2 from "/src/assets/images/project2.png";
import project3 from "/src/assets/images/project3.png";
import project4 from "/src/assets/images/project4.png";
import project5 from "/src/assets/images/project5.png";
import project6 from "/src/assets/images/project6.png";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

const projectsData = [
  {
    wrapperClass: "col-span-1 md:col-span-12",
    props: {
      link: "https://kreatorspacee.com",
      img: kreatorspace,
      alt: "Kreatorspacee mockup",
      name: "Kreatorspacee",
      type: "Web Design • Fullstack Development",
      year: "2024",
      tools: "ReactJS • Chakra UI • TailwindCSS • Express • Supabase",
    },
  },
  {
    wrapperClass: "col-span-1 pt-0 md:col-span-7 md:pt-16",
    props: {
      link: "https://rest-countries-api-with-color-switcher.vercel.app/",
      img: project2,
      alt: "Rest api country landing page mockup",
      name: "Rest Country landing page",
      type: "Frontend Development",
      year: "2024",
      tools: "React • TailwindCSS • API",
    },
  },
  {
    wrapperClass: "col-span-1 pt-0 md:col-span-5 md:pt-80",
    props: {
      link: "https://url-shortening-api-landing-page-roan-ten.vercel.app/",
      img: project3,
      alt: "URL shortener landing page mockup",
      name: "URL shortener landing page",
      type: "Frontend Development",
      year: "2024",
      tools: "React • TailwindCSS • API ",
    },
  },
  {
    wrapperClass: "col-span-1 h-fit pt-0 md:col-span-8 md:pt-20",
    props: {
      link: "#",
      img: project4,
      alt: "AR educational platform mockup",
      name: "AR Educational Platform",
      type: "Fullstack development",
      year: "2024",
      tools: "React Native • Supabase • React Native Paper",
    },
  },
  {
    wrapperClass: "col-span-1 h-fit md:col-span-4",
    props: {
      link: "https://blorg-landing-page.vercel.app/",
      img: project5,
      alt: "Blorg landing page mockup",
      name: "BLOGR LANDING PAGE",
      type: "Frontend Development",
      year: "2024",
      tools: "HTML • CSS",
    },
  },
  {
    wrapperClass: "col-span-1 md:col-span-12",
    props: {
      link: "https://collabra-doc.vercel.app/",
      img: project6,
      alt: "CollabraDoc mockup",
      name: "CollabraDoc",
      type: "Fullstack Development",
      year: "2025",
      tools: "Next.js • TailwindCSS • Express • MongoDB • Socket.io",
    },
  },
];

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change my-[10%] overflow-hidden"
    >
      <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {projectsData.map((project) => (
          <div className={project.wrapperClass} key={project.props.name}>
            <Projects {...project.props} />
          </div>
        ))}
      </div>
    </section>
  );
}
