'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal, GitBranch, Code, Container, Database } from 'lucide-react';
import {
  SiJira,
  SiAsana,
  SiFigma,
  SiMiro,
  SiGoogleanalytics,
  SiTableau
} from 'react-icons/si';
import { Brain } from 'lucide-react';

interface FloatingIconProps {
  icon: React.ReactNode;
  position: string;
  delay: number;
  parallaxSpeed: number;
  size?: string;
  opacity?: string;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({
  icon,
  position,
  delay,
  parallaxSpeed,
  size = 'w-12 h-12',
  opacity = 'opacity-30'
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, parallaxSpeed * 30]);

  return (
    <motion.div
      className={`absolute ${position} ${size} text-ocean-blue ${opacity} hidden md:block`}
      style={{ y }}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: [0.2, 0.4, 0.2],
        y: [-5, 5, -5]
      }}
      transition={{
        opacity: {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay,
        },
        y: {
          duration: 4 + delay,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay,
        },
      }}
    >
      {icon}
    </motion.div>
  );
};

export const FloatingIcons = () => {
  const icons = [
    // Top arc - left to right
    {
      icon: <GitBranch className="w-full h-full" />,
      position: 'top-20 left-1/4',
      delay: 0,
      parallaxSpeed: 0.2,
      size: 'w-10 h-10',
      opacity: 'opacity-25',
    },
    {
      icon: <Code className="w-full h-full" />,
      position: 'top-16 left-1/3',
      delay: 0.3,
      parallaxSpeed: 0.5,
      size: 'w-11 h-11',
      opacity: 'opacity-30',
    },
    {
      icon: <SiFigma className="w-full h-full" />,
      position: 'top-16 right-1/3',
      delay: 0.6,
      parallaxSpeed: 0.7,
      size: 'w-12 h-12',
      opacity: 'opacity-35',
    },
    {
      icon: <SiMiro className="w-full h-full" />,
      position: 'top-20 right-1/4',
      delay: 0.9,
      parallaxSpeed: 0.4,
      size: 'w-10 h-10',
      opacity: 'opacity-25',
    },
    // Middle left arc
    {
      icon: <Terminal className="w-full h-full" />,
      position: 'top-1/3 left-[15%]',
      delay: 1.2,
      parallaxSpeed: 0.8,
      size: 'w-12 h-12',
      opacity: 'opacity-30',
    },
    {
      icon: <SiJira className="w-full h-full" />,
      position: 'top-1/2 left-[12%]',
      delay: 1.5,
      parallaxSpeed: 0.6,
      size: 'w-11 h-11',
      opacity: 'opacity-35',
    },
    // Middle right arc
    {
      icon: <SiGoogleanalytics className="w-full h-full" />,
      position: 'top-1/3 right-[15%]',
      delay: 1.8,
      parallaxSpeed: 0.5,
      size: 'w-13 h-13',
      opacity: 'opacity-30',
    },
    {
      icon: <SiTableau className="w-full h-full" />,
      position: 'top-1/2 right-[12%]',
      delay: 2.1,
      parallaxSpeed: 0.6,
      size: 'w-11 h-11',
      opacity: 'opacity-25',
    },
    // Bottom arc - left to right
    {
      icon: <Container className="w-full h-full" />,
      position: 'bottom-24 left-1/4',
      delay: 2.4,
      parallaxSpeed: 0.3,
      size: 'w-10 h-10',
      opacity: 'opacity-25',
    },
    {
      icon: <SiAsana className="w-full h-full" />,
      position: 'bottom-20 left-1/3',
      delay: 2.7,
      parallaxSpeed: 0.4,
      size: 'w-11 h-11',
      opacity: 'opacity-30',
    },
    {
      icon: <Brain className="w-full h-full" />,
      position: 'bottom-20 right-1/3',
      delay: 3,
      parallaxSpeed: 0.8,
      size: 'w-12 h-12',
      opacity: 'opacity-35',
    },
    {
      icon: <Database className="w-full h-full" />,
      position: 'bottom-24 right-1/4',
      delay: 3.3,
      parallaxSpeed: 0.3,
      size: 'w-10 h-10',
      opacity: 'opacity-25',
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((iconProps, index) => (
        <FloatingIcon key={index} {...iconProps} />
      ))}
    </div>
  );
};
