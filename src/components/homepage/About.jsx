import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function About() {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

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
            src="/ebube.jpg"
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
              Hi, I&apos;m Ebubechukwu, a full-stack developer based in Abuja,
              Nigeria. I enjoy building scalable, high-performance, and
              user-friendly web applications that solve real problems. I&apos;m
              especially passionate about turning complex ideas into clean,
              efficient code that actually makes an impact.
              <br />
              <br />
              While I have a good eye for design, my real strength is in
              engineering designing robust systems, building seamless APIs, and
              delivering complete, end-to-end solutions. I&apos;ve worked with
              startups and small businesses to help them grow and establish a
              strong online presence. 💻
              <br />
              <br />
              When I&apos;m not coding, you&apos;ll probably find me playing
              video games or spending time on the basketball court.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
