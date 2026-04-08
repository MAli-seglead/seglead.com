"use client";
import { useState, useEffect } from "react";

const letters = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ";

export const ShuffleText = ({ text, active }: { text: string; active: boolean }) => {
  const [output, setOutput] = useState(text);

  useEffect(() => {
    if (!active) {
      setOutput(text);
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      setOutput(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            if (char === " ") return " ";
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      iteration += 1 / 3;
      if (iteration >= text.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [active, text]);

  return <span>{output}</span>;
};