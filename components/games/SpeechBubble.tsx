"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, X } from "lucide-react";
import { useState } from "react";

interface SpeechBubbleProps {
  isVisible: boolean;
  message: string;
  onDismiss?: () => void;
}

export default function SpeechBubble({ isVisible, onDismiss }: SpeechBubbleProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute bottom-full right-0 mb-4 z-50"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative bg-white border border-slate-200 text-slate-900 px-5 py-4 rounded-xl max-w-xs shadow-lg">
            {/* Game Controller Icon */}
            <div className="absolute -top-3 -left-3 bg-slate-900 rounded-full p-2 border border-slate-700">
              <Gamepad2 className="w-4 h-4 text-white" />
            </div>

            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => { e.stopPropagation(); onDismiss?.(); }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center border border-slate-300 transition-colors"
              aria-label="Close message"
            >
              <X className="w-3 h-3 text-slate-600" />
            </motion.button>

            {/* Message */}
            <div className="pl-5">
              <p className="text-sm font-semibold leading-snug text-slate-900">
                Bored of looking at my resume?
              </p>
              <p className="text-xs text-slate-500 mt-1 leading-snug">
                Play a game with AI!
              </p>
            </div>

            {/* Tail pointing down-right */}
            <div className="absolute -bottom-2 right-7 w-3 h-3 bg-white border-r border-b border-slate-200 rotate-45" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
