import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
const expertiseItems = [
  "API Integration",
  "Backend Development",
  "Frontend Engineering",
  "Database Management",
];

  const toolBoxItems = [
    "TypeScript",
    "Python",
    "NextJS",
    "React Native",

  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
<ServiceUi
  title="My Expertises."
  description="I specialise in full-stack web development, focusing on delivering high-quality, scalable solutions that meet the needs of my clients and their users."
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
