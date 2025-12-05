
import React, { useEffect, useRef } from 'react';
import katex from 'katex';

interface MathTextProps {
  text: string;
  className?: string;
}

const MathText: React.FC<MathTextProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = '';

    // Regex to split by \( ... \)
    // Captures the delimiter and content: \\\( ... \\\)
    // [\s\S]*? matches any character including newlines, non-greedily
    const regex = /(\\\([\s\S]*?\\\))/g;
    
    const parts = text.split(regex);
    
    parts.forEach((part) => {
      if (part.startsWith('\\(') && part.endsWith('\\)')) {
        // It's math: \( content \)
        // Remove delimiters to get raw latex
        const math = part.slice(2, -2);
        const span = document.createElement('span');
        try {
          // Render as inline math (displayMode: false)
          const html = katex.renderToString(math, { 
            throwOnError: false, 
            displayMode: false, 
            output: 'html',
            strict: false
          });
          span.innerHTML = html;
        } catch (error) {
          console.error("KaTeX error:", error);
          span.innerText = part;
        }
        containerRef.current?.appendChild(span);
      } else {
        // Regular text, handle Markdown-style bold **text**
        if (part) {
          const subParts = part.split('**');
          subParts.forEach((subPart, subIndex) => {
            if (subIndex % 2 === 0) {
              // Normal text
              if (subPart) {
                containerRef.current?.appendChild(document.createTextNode(subPart));
              }
            } else {
              // Bold text
              if (subPart) {
                const boldSpan = document.createElement('span');
                boldSpan.className = "font-bold text-blue-600 dark:text-blue-400";
                boldSpan.innerText = subPart;
                containerRef.current?.appendChild(boldSpan);
              }
            }
          });
        }
      }
    });
  }, [text]);

  return <span ref={containerRef} className={className} />;
};

export default MathText;
