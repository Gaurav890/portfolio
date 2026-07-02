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
    minDelay: 15000,
    maxDelay: 20000,
  });

  const [isAttentionActive, setIsAttentionActive] = useState(false);

  useEffect(() => {
    setIsMuted(arcadeSounds.isSoundMuted());
  }, []);

  useEffect(() => {
    if (shouldShowAttention && !isOpen) {
      setIsAttentionActive(true);
      arcadeSounds.playAttentionSound();
      const shakeTimer = setTimeout(() => {
        setIsAttentionActive(false);
      }, 8000);
      return () => clearTimeout(shakeTimer);
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
          message="Bored of my resume? Play a game!"
          onDismiss={dismissAttention}
        />

        {/* Main Button */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            rotate: isAttentionActive ? [0, -5, 5, -5, 5, 0] : 0,
          }}
          transition={{
            scale: { type: "spring", stiffness: 260, damping: 20, delay: 1 },
            rotate: {
              duration: 0.5,
              repeat: isAttentionActive ? Infinity : 0,
              repeatDelay: 0.5,
            },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => { setIsHovered(true); setShowMuteToggle(true); }}
          onHoverEnd={() => { setIsHovered(false); setTimeout(() => setShowMuteToggle(false), 300); }}
          onClick={handleOpenGame}
          className="relative group"
          aria-label="Open Arcade Game"
        >
          {/* Button */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
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
                <div className="bg-slate-900 text-white px-3 py-2 rounded-lg text-sm font-medium border border-slate-700">
                  Play AI Arcade
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-slate-900 border-r border-t border-slate-700" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Subtle pulse ring on attention */}
          {isAttentionActive && (
            <motion.div
              className="absolute inset-0 rounded-full border border-slate-500"
              animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </motion.button>

        {/* Mute Toggle */}
        <AnimatePresence>
          {showMuteToggle && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              onClick={toggleMute}
              className="absolute -top-14 right-0 w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-slate-400 flex items-center justify-center transition-colors"
              aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-slate-500" />
              ) : (
                <Volume2 className="w-5 h-5 text-slate-600" />
              )}
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <ArcadeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
