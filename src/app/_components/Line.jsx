"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { forwardRef, useEffect, useRef } from "react";

const Line = forwardRef(({ progress = 1, origin = "right" },ref) => {
  const Line = useRef(null);
  useGSAP(() => {
    gsap.set(Line.current, { scaleX: progress });
    return () => {};
  }, [progress]);

  return (
    <div ref={ref} className="data-line">
      <div
        ref={Line}
        style={{ transformOrigin: origin }}
        className="line"
      ></div>
    </div>
  );
})

export default Line;
