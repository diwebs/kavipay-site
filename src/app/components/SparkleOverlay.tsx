import { motion } from 'motion/react';
import React from 'react';

type MotionStyle = 'subtle' | 'flowing' | 'pulse' | 'drift';

type SparkleOverlayProps = {
  count?: number;
  color?: string;
  maxSize?: number;
  style?: MotionStyle;
  opacity?: number;
};

const motionProfiles = {
  subtle: {
    duration: { min: 3, max: 5 },
    delay: { min: 0, max: 2 },
    movement: (i: number) => ({
      y: [0, -8 - Math.random() * 8, 0],
      x: [0, -3 + Math.random() * 6, 0],
      opacity: [0.1, 0.5, 0.1],
      scale: [1, 1.2, 1],
    }),
  },
  flowing: {
    duration: { min: 4, max: 7 },
    delay: { min: 0, max: 3 },
    movement: (i: number) => ({
      y: [0, -20 - Math.random() * 15, 0],
      x: [0, -8 + Math.random() * 16, 0],
      opacity: [0.15, 0.7, 0.1],
      scale: [0.8, 1.4, 0.8],
    }),
  },
  pulse: {
    duration: { min: 2, max: 4 },
    delay: { min: 0, max: 2 },
    movement: (i: number) => ({
      opacity: [0.2, 0.8, 0.2],
      scale: [1, 1.5, 1],
    }),
  },
  drift: {
    duration: { min: 5, max: 8 },
    delay: { min: 0, max: 4 },
    movement: (i: number) => ({
      y: [0, -30 - Math.random() * 20, 0],
      x: [0, -15 + Math.random() * 30, 0],
      opacity: [0.08, 0.6, 0.05],
      scale: [0.6, 1.3, 0.6],
    }),
  },
};

export default function SparkleOverlay({
  count = 8,
  color = '#0ea5e9',
  maxSize = 5,
  style = 'subtle',
  opacity = 0.6,
}: SparkleOverlayProps) {
  const profile = motionProfiles[style];

  const particles = Array.from({ length: count }).map((_, i) => {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const size = 1.5 + Math.random() * maxSize;
    const delay = profile.delay.min + Math.random() * (profile.delay.max - profile.delay.min);
    const duration = profile.duration.min + Math.random() * (profile.duration.max - profile.duration.min);

    return (
      <motion.div
        key={i}
        className="absolute rounded-full shadow-lg"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: `${size}px`,
          height: `${size}px`,
          background: color,
          boxShadow: `0 0 ${size * 1.5}px ${color}`,
          filter: 'blur(0.5px)',
        }}
        animate={profile.movement(i)}
        transition={{
          duration,
          repeat: Infinity,
          delay,
          ease: 'easeInOut',
        }}
        initial={{ opacity: opacity * 0.1 }}
      />
    );
  });

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles}
    </div>
  );
}
