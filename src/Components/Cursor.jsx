"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { CiLocationArrow1 } from "react-icons/ci";

export default function Cursor() {
  const cursorRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  // Ensure portal runs only on client
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;

    gsap.set(cursorRef.current, {
      xPercent: -50,
      yPercent: -50,
    });

    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.25,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <CiLocationArrow1
      ref={cursorRef}
      className="fixed top-0 left-0 text-3xl scale-x-[-1] z-[9999] hidden md:block pointer-events-none mt-2 text-black"
    />,
    document.body
  );
}
