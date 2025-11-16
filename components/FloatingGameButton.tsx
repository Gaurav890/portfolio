"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, Volume2, VolumeX } from "lucide-react";
import ArcadeModal from "./games/ArcadeModal";
import SpeechBubble from "./games/SpeechBubble";
import { useAttentionTimer } from "@/lib/hooks/useAttentionTimer";
import { arcadeSounds } from "@/lib/arcadeSounds";

export default function FloatingGameButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showMuteToggle, setShowMuteToggle] = useState(false);

  const { shouldShowAttention, dismissAttention } = useAttentionTimer({
    minDelay: 15000, // 15 seconds
    maxDelay: 20000, // 20 seconds
  });

  const [isAttentionActive, setIsAttentionActive] = useState(false);

  // Check mute state from localStorage on mount
  useEffect(() => {
    setIsMuted(arcadeSounds.isSoundMuted());
  }, []);

  // Handle attention effect
  useEffect(() => {
    if (shouldShowAttention && !isOpen) {
      setIsAttentionActive(true);

      // Play attention sound
      arcadeSounds.playAttentionSound();

      // Stop shake animation after 8 seconds (but keep bubble visible)
      const shakeTimer = setTimeout(() => {
        setIsAttentionActive(false);
      }, 8000);

      return () => {
        clearTimeout(shakeTimer);
      };
    }
  }, [shouldShowAttention, isOpen]);

  const handleOpenGame = () => {
    setIsOpen(true);
    setIsAttentionActive(false);
    dismissAttention();
    arcadeSounds.playClickSound();
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    arcadeSounds.setMuted(newMutedState);

    // Play a test sound when unmuting
    if (!newMutedState) {
      arcadeSounds.playClickSound();
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        {/* Speech Bubble */}
        <SpeechBubble
          isVisible={shouldShowAttention && !isOpen}
          message="Bored of my resume? 🎮 Play a game!"
          onDismiss={dismissAttention}
        />

        {/* Main Button with Attention Effects */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            rotate: isAttentionActive ? [0, -5, 5, -5, 5, 0] : 0,
          }}
          transition={{
            scale: {
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 1,
            },
            rotate: {
              duration: 0.5,
              repeat: isAttentionActive ? Infinity : 0,
              repeatDelay: 0.5,
            },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => {
            setIsHovered(true);
            setShowMuteToggle(true);
          }}
          onHoverEnd={() => {
            setIsHovered(false);
            setTimeout(() => setShowMuteToggle(false), 300);
          }}
          onClick={handleOpenGame}
          className="relative group"
          aria-label="Open Arcade Game"
        >
          {/* Enhanced Glow effect during attention */}
          <motion.div
            className="absolute inset-0 rounded-full bg-indigo-500/30 blur-xl"
            animate={{
              scale: isAttentionActive ? [1, 1.8, 1] : isHovered ? 1.5 : 1,
              opacity: isAttentionActive ? [0.3, 0.8, 0.3] : isHovered ? 0.6 : 0.3,
            }}
            transition={{
              duration: isAttentionActive ? 1 : 0.3,
              repeat: isAttentionActive ? Infinity : 0,
            }}
          />

          {/* Button */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-lg flex items-center justify-center">
            <Gamepad2 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>

          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && !shouldShowAttention && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap"
              >
                <div className="bg-slate-800 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg">
                  Play AI Arcade
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-slate-800" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Enhanced Pulse animation during attention */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-indigo-400"
            animate={{
              scale: isAttentionActive ? [1, 2, 1] : [1, 1.5, 1],
              opacity: isAttentionActive ? [0.7, 0, 0.7] : [0.5, 0, 0.5],
            }}
            transition={{
              duration: isAttentionActive ? 1.5 : 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.button>

        {/* Mute Toggle */}
        <AnimatePresence>
          {showMuteToggle && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              onClick={toggleMute}
              className="absolute -top-14 right-0 w-10 h-10 rounded-full bg-slate-800 border border-slate-700 hover:border-indigo-500 flex items-center justify-center transition-colors shadow-lg"
              aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-slate-400" />
              ) : (
                <Volume2 className="w-5 h-5 text-indigo-400" />
              )}
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Arcade Modal */}
      <ArcadeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
