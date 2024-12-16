import kreatorspace from "/src/assets/images/kreatorspace.png";
import project2 from "/src/assets/images/project2.png";
import project3 from "/src/assets/images/project3.png";
import project4 from "/src/assets/images/project4.png";
import project5 from "/src/assets/images/project5.png";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change my-[10%] overflow-hidden"
    >
      <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://kreatorspacee.com"
            img={kreatorspace}
            alt="Kreatorspacee mockup"
            name="Kreatorspacee"
            type="Web Design • Fullstack Development"
            year="2024"
            tools="ReactJS • Chakra UI • TailwindCSS • Express • Supabase"
          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://rest-countries-api-with-color-switcher.vercel.app/"
            img={project2}
            alt="Rest api country landing page mockup"
            name="Rest Country landing page"
            type="Frontend Development"
            year="2024"
            tools="React • TailwindCSS • API"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://url-shortening-api-landing-page-roan-ten.vercel.app/"
            img={project3}
            alt="URL shortener landing page mockup"
            name="URL shortener landing page"
            type="Frontend Development"
            year="2024"
            tools="React • TailwindCSS • API "
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="#"
            img={project4}
            alt="AR educational platform mockup"
            name="AR Educational Platform"
            type="Fullstack development"
            year="2024"
            tools="React Native • Supabase • React Native Paper"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
          <Projects
            link="https://blorg-landing-page.vercel.app/"
            img={project5}
            alt="Blorg landing page mockup"
            name="BLOGR LANDING PAGE"
            type="Frontend Development"
            year="2024"
            tools="HTML • CSS"
          />
        </div>
      </div>
    </section>
  );
}
