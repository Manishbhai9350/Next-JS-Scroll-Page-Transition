"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Data } from "@/app/data";
import Line from "@/app/_components/Line";
import { ReactLenis } from "lenis/dist/lenis-react";
import { useRouter } from "next/navigation";

const ProjectChild = ({ CurrentProject, NextProject, PrevProject }) => {
  const Curl = useRef(null);
  const LineRef = useRef(null);
  const NextProjectCopy = useRef(null);
  const Main = useRef(null);
  const [Progress, setProgress] = useState(0);
  const [IsTransitioning, setIsTransitioning] = useState(false);
  const navigation = useRouter();
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: Curl.current,
      start: "top top",
      end: "top -300%",
      pin: true,
      pinSpacing: true,
      onUpdate: (e) => {
        if (IsTransitioning) return;
        setProgress(e.progress);
        if (e.progress >= 0.99) {
          document.body.style.overflowY = "hidden";
          document.querySelector("html").style.overflowY = "hidden";
          setIsTransitioning(true);
          gsap.to([LineRef.current, NextProjectCopy.current], {
            opacity: 0,
            onComplete() {
              navigation.push(`/projects/${NextProject.curl}`);
            },
          });
        }
      },
    });
    return () => {
      setIsTransitioning(false);
      ScrollTrigger.getAll().forEach((Trigger) => Trigger.kill());
    };
  }, [NextProject.curl]);

  useEffect(() => {
    document.body.style.overflowY = "visible";
    document.querySelector("html").style.overflowY = "visible";
  }, [NextProject.curl]);
  return (
    <ReactLenis root>
      <main ref={Main} className="container">
        <section className="title">
          <h1>{CurrentProject.title}</h1>
        </section>
        <section className="data">
          {CurrentProject.images.map((Img) => {
            return (
              <div key={Img} className="image-con">
                <img src={Img} alt="Image" />
              </div>
            );
          })}
        </section>
        <section ref={Curl} className="curl">
          <p ref={NextProjectCopy} className="next-project">
            Next Project
          </p>
          <h1>{NextProject.title}</h1>
          <Line ref={LineRef} progress={Progress} origin="center" />
        </section>
      </main>
    </ReactLenis>
  );
};

export default ProjectChild;
