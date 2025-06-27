import { useEffect, useRef } from "react";
// import profileImg from "/src/assets/images/profile.webp";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function About() {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  const profileImg = "/src/assets/images/6H6A2386.jpg";

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 400px",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [aboutSection]);

  return (
    // Try using max width to contain the size of the container
    <section ref={aboutSection} aria-label="about me">
      <Heading title="about me" />
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
           <img
            ref={profile}
            loading="lazy"
            className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
            src={profileImg}
            width="600"
            height="800"
            alt="portrait of Ebube"
          /> 
        </div>
        <div className="top-20 sm:sticky md:top-28 md:w-1/2 lg:top-32">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 font-semibold leading-tight opacity-0 2xl:text-7xl"
            >
              A brief intro, who am I?
            </h3>
           <p
  ref={body}
  className="translate-y-10 text-body-1 opacity-0 2xl:text-4xl"
>
  Hi, I&apos;m Ebube — a full-stack developer based in Abuja, Nigeria, with a strong focus on building scalable, performant, and user-friendly web applications. I specialize in turning complex problems into clean, efficient code that delivers real-world impact.
  <br></br>
  <br></br>
  While I have a solid eye for design, my core strength lies in architecting robust systems, crafting seamless APIs, and delivering end-to-end solutions for startups and small businesses looking to grow their online presence. 💻
  <br></br>
  <br></br>
  Outside of coding, you&apos;ll often find me playing video games or shooting hoops on the basketball court.
</p>

          </div>
        </div>
      </div>
    </section>
  );
}
