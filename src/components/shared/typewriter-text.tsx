"use client";

import { useEffect, useMemo, useState } from "react";

type TypewriterTextProps = {
  text: string;
  speedMs?: number;
  startDelayMs?: number;
  animate?: boolean;
  className?: string;
};

export function TypewriterText({
  text,
  speedMs = 18,
  startDelayMs = 0,
  animate = true,
  className,
}: TypewriterTextProps) {
  const normalizedText = useMemo(() => text ?? "", [text]);
  const [visibleText, setVisibleText] = useState(animate ? "" : normalizedText);

  useEffect(() => {
    if (!animate) {
      setVisibleText(normalizedText);
      return;
    }

    setVisibleText("");

    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let intervalId: ReturnType<typeof setInterval> | null = null;
    let index = 0;

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        index += 1;
        setVisibleText(normalizedText.slice(0, index));

        if (index >= normalizedText.length && intervalId) {
          clearInterval(intervalId);
        }
      }, speedMs);
    }, startDelayMs);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [normalizedText, speedMs, startDelayMs, animate]);

  return <span className={className}>{visibleText}</span>;
}
