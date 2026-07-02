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
      title="AI Arcade"
      className="max-w-4xl bg-white border border-slate-200"
    >
      <CreativeChallenge />
    </Modal>
  );
}
