import React, { useState, useEffect } from "react";

const TypingAnimation = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // 한 글자씩 나타나는 속도 (ms)

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
};

export default TypingAnimation;
