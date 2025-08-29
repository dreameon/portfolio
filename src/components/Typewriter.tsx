import { useState, useEffect } from "react";

function useTypewriter({ text, speed }: { text: string; speed: number }) {
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(i));
        ++i;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
}

export default function Typewriter({
  text,
  speed,
}: {
  text: string;
  speed: number;
}) {
  const displayText = useTypewriter({ text, speed });
  return <h1 className="text-(--Colour-Font-Primary)">{displayText}</h1>;
}
