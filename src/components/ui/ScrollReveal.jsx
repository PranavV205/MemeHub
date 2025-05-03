"use client";
import { useEffect, useRef, useMemo, useState } from "react";

const ScrollReveal = ({
  children,
  containerClassName = "",
  textClassName = "",
}) => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Split text into words with proper word-spacing preservation
  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) {
        return <span key={`whitespace-${index}`}>{word}</span>;
      }

      const delay = index * 0.05;

      return (
        <span
          className="word inline-block transition-all duration-500"
          key={`word-${index}`}
          style={{
            opacity: visible ? 1 : 0,
            filter: visible ? "blur(0px)" : "blur(8px)",
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: `${delay}s`,
          }}
        >
          {word}
        </span>
      );
    });
  }, [children, visible]);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    // Simple intersection observer to trigger animation
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`my-5 transition-transform duration-1000 ${containerClassName}`}
      style={{
        minHeight: "200px",
        transform: visible ? "rotate(0deg)" : "rotate(3deg)",
        transformOrigin: "0% 50%",
      }}
    >
      <p
        className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}
      >
        {splitText}
      </p>
    </div>
  );
};

export default ScrollReveal;
