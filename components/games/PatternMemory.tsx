"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw, Brain } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Color = "red" | "blue" | "green" | "yellow";

const colors: Record<Color, { bg: string; active: string }> = {
  red:    { bg: "bg-red-500",    active: "bg-red-300" },
  blue:   { bg: "bg-blue-500",   active: "bg-blue-300" },
  green:  { bg: "bg-green-500",  active: "bg-green-300" },
  yellow: { bg: "bg-yellow-400", active: "bg-yellow-200" },
};

type GameState = "idle" | "showing" | "playing" | "gameover";

export default function PatternMemory() {
  const [gameState, setGameState] = useState<GameState>("idle");
  const [pattern, setPattern] = useState<Color[]>([]);
  const [userPattern, setUserPattern] = useState<Color[]>([]);
  const [activeColor, setActiveColor] = useState<Color | null>(null);
  const [level, setLevel] = useState(1);
  const [highScore, setHighScore] = useState(0);
  const [isShowingPattern, setIsShowingPattern] = useState(false);

  useEffect(() => {
    if (gameState === "showing") showPattern();
  }, [gameState, pattern]);

  const startGame = () => {
    setLevel(1);
    setPattern([]);
    setUserPattern([]);
    addToPattern();
    setGameState("showing");
  };

  const addToPattern = () => {
    const colorKeys = Object.keys(colors) as Color[];
    setPattern((prev) => [...prev, colorKeys[Math.floor(Math.random() * colorKeys.length)]]);
  };

  const showPattern = async () => {
    setIsShowingPattern(true);
    await new Promise((r) => setTimeout(r, 500));
    for (let i = 0; i < pattern.length; i++) {
      setActiveColor(pattern[i]);
      await new Promise((r) => setTimeout(r, 600));
      setActiveColor(null);
      await new Promise((r) => setTimeout(r, 300));
    }
    setIsShowingPattern(false);
    setGameState("playing");
  };

  const handleColorClick = (color: Color) => {
    if (gameState !== "playing" || isShowingPattern) return;
    setActiveColor(color);
    setTimeout(() => setActiveColor(null), 300);
    const newUserPattern = [...userPattern, color];
    setUserPattern(newUserPattern);
    if (color !== pattern[newUserPattern.length - 1]) {
      setGameState("gameover");
      if (level - 1 > highScore) setHighScore(level - 1);
      return;
    }
    if (newUserPattern.length === pattern.length) {
      setLevel((prev) => prev + 1);
      setUserPattern([]);
      setTimeout(() => { addToPattern(); setGameState("showing"); }, 1000);
    }
  };

  const renderColorButton = (color: Color, position: "tl" | "tr" | "bl" | "br") => {
    const isActive = activeColor === color;
    const posClass = { tl: "rounded-tl-3xl", tr: "rounded-tr-3xl", bl: "rounded-bl-3xl", br: "rounded-br-3xl" }[position];
    return (
      <motion.button
        onClick={() => handleColorClick(color)}
        className={`w-full h-full ${isActive ? colors[color].active : colors[color].bg} ${posClass}
          transition-colors duration-150 border-2 border-white
          ${gameState === "playing" && !isShowingPattern ? "cursor-pointer" : "cursor-not-allowed opacity-80"}`}
        whileTap={gameState === "playing" && !isShowingPattern ? { scale: 0.97 } : {}}
        animate={{ scale: isActive ? 1.04 : 1 }}
        transition={{ duration: 0.1 }}
        disabled={gameState !== "playing" || isShowingPattern}
      />
    );
  };

  const SimonBoard = ({ dimmed = false }: { dimmed?: boolean }) => (
    <div className={`grid grid-cols-2 gap-2 w-64 h-64 mx-auto ${dimmed ? "opacity-40" : ""}`}>
      {renderColorButton("red", "tl")}
      {renderColorButton("blue", "tr")}
      {renderColorButton("green", "bl")}
      {renderColorButton("yellow", "br")}
    </div>
  );

  if (gameState === "idle") {
    return (
      <div className="text-center space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900">Pattern Memory</h2>
          <p className="text-slate-500">Watch the pattern and repeat it!</p>
        </div>
        {highScore > 0 && (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg">
            <Brain className="w-4 h-4 text-slate-500" />
            <span className="text-slate-700 font-semibold text-sm">Best Level: {highScore}</span>
          </div>
        )}
        <SimonBoard />
        <Button onClick={startGame} variant="primary" size="lg" className="gap-2">
          <Play className="w-5 h-5" /> Start Game
        </Button>
      </div>
    );
  }

  if (gameState === "gameover") {
    return (
      <div className="text-center space-y-6">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="space-y-2">
          <h2 className="text-3xl font-bold text-slate-900">Game Over!</h2>
          <p className="text-slate-500">You reached level {level - 1}</p>
          {level - 1 >= highScore && highScore > 0 && (
            <p className="text-green-600 font-semibold">New High Score!</p>
          )}
        </motion.div>
        <SimonBoard dimmed />
        <Button onClick={startGame} variant="primary" size="lg" className="gap-2">
          <RotateCcw className="w-5 h-5" /> Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="text-center">
          <div className="text-xs text-slate-400 mb-0.5">Level</div>
          <div className="text-2xl font-bold text-slate-900">{level}</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-slate-400 mb-0.5">Pattern</div>
          <div className="text-2xl font-bold text-slate-900">{pattern.length}</div>
        </div>
        {highScore > 0 && (
          <div className="text-center">
            <div className="text-xs text-slate-400 mb-0.5">Best</div>
            <div className="text-2xl font-bold text-slate-500">{highScore}</div>
          </div>
        )}
      </div>

      <div className="text-center h-6">
        <AnimatePresence mode="wait">
          {gameState === "showing" && (
            <motion.div key="showing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="text-slate-500 text-sm font-medium">
              Watch carefully...
            </motion.div>
          )}
          {gameState === "playing" && (
            <motion.div key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="text-green-600 text-sm font-medium">
              Your turn! ({userPattern.length}/{pattern.length})
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <SimonBoard />

      <div className="text-center">
        <Button onClick={() => setGameState("idle")} variant="ghost" size="sm" className="text-slate-400">
          Quit Game
        </Button>
      </div>
    </div>
  );
}
