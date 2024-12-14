import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = ["Web Development", "Web Design"];

  const toolBoxItems = [
    "JavaScript",
    "HTML",
    "CSS",
    "Chakra UI",
    "Bootstrap",
    "Express",
    "TailwindCSS",
    "ReactJS",
    "NextJS",
    "React Native",
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
        <ServiceUi
          title="My Expertises."
          description="I specialise in web design and development, focusing on delivering high-quality solutions that meet the needs of my clients and their users."
          items={expertiseItems}
        />
        <ServiceUi
          title="My Tech Stack."
          description="These are my go to tech stack to make any projects happen. I am always eager of learning more about my current stack, and new technologies that could expand my horizons."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
