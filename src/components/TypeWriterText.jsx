import React, { useEffect, useState } from "react";

const Typewriter = () => {
  const [text, setText] = useState("");
  const str =
    "getSync is a community-based platform that empowers students and founders to learn, earn, and network";

  useEffect(() => {
    let i = 0;
    let delay = 20; // Adjust the delay as needed

    const typeText = () => {
      if (i < str.length) {
        setText(str.substring(0, i + 1)); // Clear previous content and add one character
        i++;
        setTimeout(typeText, delay);
      }
    };

    setTimeout(typeText, delay);

    return () => {
      clearTimeout(typeText);
    };
  }, []);

  return <div>{text}</div>;
};

export default Typewriter;
