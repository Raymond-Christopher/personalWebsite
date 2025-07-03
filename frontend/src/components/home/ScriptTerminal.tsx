// src/components/AnimatedCodeBackground.tsx
import { useEffect, useState } from 'react';
import '@/styles/ScriptTerminal.css';

const AnimatedCodeBackground = () => {
  const [code, setCode] = useState('');
  const [visibleCode, setVisibleCode] = useState('');

  useEffect(() => {
    fetch('/api/python')
      .then((res) => res.json())
      .then((data) => {
        const rawCode = data.code || '';
        setCode(rawCode);
      });
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleCode((prev) => prev + code[index]);
      index++;
      if (index >= code.length) clearInterval(interval);
    }, 5); // speed of "typing"

    return () => clearInterval(interval);
  }, [code]);

  return <div className="animated-code-background">{visibleCode}</div>;
};

export default AnimatedCodeBackground;
