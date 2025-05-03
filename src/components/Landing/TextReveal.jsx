import React from "react";
import ScrollReveal from "../ui/ScrollReveal";

const TextReveal = () => {
  return (
    <div className="h-screen flex items-center justify-center px-4">
      <ScrollReveal
        containerClassName="w-full max-w-4xl mx-auto"
        textClassName="text-white text-center"
      >
        Gandhi Didn't die for this.
      </ScrollReveal>
    </div>
  );
};

export default TextReveal;
