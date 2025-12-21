"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, X } from "lucide-react";
import { useState } from "react";

interface SpeechBubbleProps {
  isVisible: boolean;
  message: string;
  onDismiss?: () => void;
}

export default function SpeechBubble({ isVisible, message, onDismiss }: SpeechBubbleProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className="absolute bottom-full right-0 mb-4 z-50"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Speech Bubble */}
          <div className="relative group bg-gradient-to-br from-indigo-600 to-purple-600 text-white px-5 py-4 rounded-2xl shadow-2xl max-w-xs border-2 border-indigo-400">
            {/* Animated Game Controller Icon */}
            <motion.div
              className="absolute -top-2 -left-2 bg-indigo-500 rounded-full p-2 border-2 border-indigo-300 shadow-lg"
              animate={{
                y: [0, -3, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Gamepad2 className="w-5 h-5 text-white" />
            </motion.div>

            {/* Close Button (appears on hover) */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8,
              }}
              transition={{ duration: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                onDismiss?.();
              }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center border-2 border-slate-600 shadow-lg transition-colors"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5 text-white" />
            </motion.button>

            {/* Message - Split into two lines */}
            <div className="space-y-1 pl-6 pr-2">
              <p className="text-base font-bold leading-tight">
                Bored of looking at my resume?
              </p>
              <p className="text-sm font-medium leading-tight text-indigo-100">
                Play a game with AI! 🎮
              </p>
            </div>

            {/* Tail/Arrow pointing down-right */}
            <div className="absolute -bottom-2 right-8 w-0 h-0">
              <div className="absolute w-4 h-4 bg-purple-600 rotate-45 border-r-2 border-b-2 border-indigo-400" />
            </div>

            {/* Subtle shine effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/10 to-white/0"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
