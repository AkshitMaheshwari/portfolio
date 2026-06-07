'use client';

import { useEffect, useState } from 'react';

export function TypingHeading() {
  const fullText = "Hi, I'm Akshit";
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const handleTyping = () => {
      if (!isDeleting) {
        if (text.length < fullText.length) {
          setText(fullText.substring(0, text.length + 1));
          timer = setTimeout(handleTyping, 120);
        } else {
          timer = setTimeout(() => {
            setIsDeleting(true);
            handleTyping();
          }, 2000);
        }
      } else {
        if (text.length > 0) {
          setText(fullText.substring(0, text.length - 1));
          timer = setTimeout(handleTyping, 60);
        } else {
          setIsDeleting(false);
          timer = setTimeout(handleTyping, 500);
        }
      }
    };

    timer = setTimeout(handleTyping, 120);

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <h1 className="max-w-3xl font-[family-name:var(--font-heading)] text-5xl font-semibold tracking-tight text-[var(--text)] sm:text-6xl lg:text-7xl min-h-[1.2em]">
      {text}
      <span className="animate-pulse font-light text-[var(--accent)] ml-0.5">|</span>
    </h1>
  );
}
