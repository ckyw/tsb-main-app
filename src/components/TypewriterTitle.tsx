"use client";

import { useEffect, useState } from "react";

type TypewriterTitleProps = {
  text: string;
};

export function TypewriterTitle({ text }: TypewriterTitleProps) {
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const reachedEnd = visibleCharacters === text.length;
    const reachedStart = visibleCharacters === 0;
    const delay = reachedEnd && !isDeleting
      ? 1800
      : reachedStart && isDeleting
        ? 500
        : isDeleting
          ? 38
          : 78;

    const timeoutId = window.setTimeout(() => {
      if (reachedEnd && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (reachedStart && isDeleting) {
        setIsDeleting(false);
        return;
      }

      setVisibleCharacters((current) => current + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [isDeleting, text, visibleCharacters]);

  return (
    <h1 className="typewriter-title" aria-label={text.replace("\n", " ")}>
      <span className="typewriter-measure" aria-hidden="true">{text}</span>
      <span className="typewriter-copy" aria-hidden="true">
        {text.slice(0, visibleCharacters)}
      </span>
    </h1>
  );
}
