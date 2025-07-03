// src/components/FeaturedTerminal.tsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const commands = [
  {
    prompt: '❯ python run.py',
    output: 'Initializing...\nConnected to vector DB.\nAwaiting input...',
  },
  {
    prompt: '❯ ask("What is AI_World?")',
    output: 'AI_World is a conversational Q&A system using vector embeddings and GPT.',
  },
  {
    prompt: '❯ exit',
    output: 'Session ended.',
  },
];

const FeaturedTerminal = () => {
  const [current, setCurrent] = useState(0);
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (current < commands.length - 1) {
        setShowOutput(true);
        setTimeout(() => {
          setCurrent((prev) => prev + 1);
          setShowOutput(false);
        }, 2000);
      }
    }, 1500);

    return () => clearTimeout(timeout);
  }, [current]);

  return (
    <div className="mx-auto max-w-3xl rounded-xl bg-black p-6 font-mono text-green-400 shadow-lg">
      {commands.slice(0, current + 1).map((cmd, index) => (
        <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-2">
          <div className="text-white">{cmd.prompt}</div>
          {index < current || showOutput ? (
            <div className="whitespace-pre-wrap">{cmd.output}</div>
          ) : null}
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturedTerminal;
