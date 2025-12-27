import project1 from "/src/assets/images/project1.png";
import project8 from "/src/assets/images/project8.png";
import project4 from "/src/assets/images/project4.png";
import project6 from "/src/assets/images/project6.png";
import project7 from "/src/assets/images/project7.png";
import project9 from "/src/assets/images/project9.png";
import project10 from "/src/assets/images/project10.png";
import project11 from "/src/assets/images/project11.png";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

const projectsData = [
  {
    wrapperClass: "col-span-1 md:col-span-12",
    props: {
      link: "https://soft-notess.framer.website/",
      img: project1,
      alt: "Soft Notes mockup",
      name: "Soft Notes",
      type: "Framer • Fullstack Development",
      year: "2025",
      tools: "Tauri • React • TailwindCSS • Rust • SQLite • Framer",
    },
  },
  {
    wrapperClass: "col-span-1 pt-0 md:col-span-7 md:pt-16",
    props: {
      link: "https://taliyah-s-orchard.vercel.app/",
      img: project7,
      alt: "Pioneers park page mockup",
      name: "Pioneers park",
      type: "Frontend Development",
      year: "2025",
      tools: "React • TailwindCSS • Framer",
    },
  },
  {
    wrapperClass: "col-span-1 pt-0 md:col-span-5 md:pt-80",
    props: {
      link: "https://www.rizzly.xyz/",
      img: project8,
      alt: "Rizzly mockup",
      name: "Rizzly",
      type: "Fullstack Development",
      year: "2025",
      tools: "Next.js • TailwindCSS • Polar.sh • Gemini AI • Supabase",
    },
  },
  {
    wrapperClass: "col-span-1 h-fit pt-0 md:col-span-6 md:pt-20",
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
    wrapperClass: "col-span-1 h-fit md:col-span-6",
    props: {
      link: "https://www.pomodolock.xyz/",
      img: project9,
      alt: "Pomodolock mockup",
      name: "Pomodolock",
      type: "Fullstack Development",
      year: "2025",
      tools: "Next.js • TailwindCSS • Spotify Web API",
    },
  },
  {
    wrapperClass: "col-span-1 h-fit pt-0 md:col-span-6",
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
  {
    wrapperClass: "col-span-1 md:col-span-6",
    props: {
      link: "https://nodica-flax.vercel.app/auth/login?redirectTo=%2F",
      img: project10,
      alt: "Nodica mockup",
      name: "Nodica",
      type: "Fullstack Development",
      year: "2025",
      tools: "Next.js • TailwindCSS • Supabase",
    },
  },
  {
    wrapperClass: "col-span-1 md:col-span-6",
    props: {
      link: "https://www.richlandacademy.com.ng/",
      img: project11,
      alt: "Richland Academy mockup",
      name: "Richland Academy",
      type: "Fullstack Development",
      year: "2025",
      tools: "Next.js • TailwindCSS • MongoDB",
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
