"use client";

import { Modal } from "@/components/ui/Modal";
import CreativeChallenge from "./CreativeChallenge";

interface ArcadeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ArcadeModal({ isOpen, onClose }: ArcadeModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="🎮 AI Arcade"
      className="max-w-4xl bg-gradient-to-br from-slate-900 to-slate-800 text-white border border-indigo-500/20"
    >
      <CreativeChallenge />
    </Modal>
  );
}
