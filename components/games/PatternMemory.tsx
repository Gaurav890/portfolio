"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw, Brain } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Color = "red" | "blue" | "green" | "yellow";

const colors: Record<Color, { bg: string; active: string; glow: string }> = {
  red: {
    bg: "bg-red-600",
    active: "bg-red-400",
    glow: "shadow-red-500/50",
  },
  blue: {
    bg: "bg-blue-600",
    active: "bg-blue-400",
    glow: "shadow-blue-500/50",
  },
  green: {
    bg: "bg-green-600",
    active: "bg-green-400",
    glow: "shadow-green-500/50",
  },
  yellow: {
    bg: "bg-yellow-600",
    active: "bg-yellow-400",
    glow: "shadow-yellow-500/50",
  },
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
    if (gameState === "showing") {
      showPattern();
    }
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
    const randomColor = colorKeys[Math.floor(Math.random() * colorKeys.length)];
    setPattern((prev) => [...prev, randomColor]);
  };

  const showPattern = async () => {
    setIsShowingPattern(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    for (let i = 0; i < pattern.length; i++) {
      setActiveColor(pattern[i]);
      await new Promise((resolve) => setTimeout(resolve, 600));
      setActiveColor(null);
      await new Promise((resolve) => setTimeout(resolve, 300));
    }

    setIsShowingPattern(false);
    setGameState("playing");
  };

  const handleColorClick = (color: Color) => {
    if (gameState !== "playing" || isShowingPattern) return;

    // Flash the color
    setActiveColor(color);
    setTimeout(() => setActiveColor(null), 300);

    const newUserPattern = [...userPattern, color];
    setUserPattern(newUserPattern);

    // Check if the click was correct
    if (color !== pattern[newUserPattern.length - 1]) {
      // Wrong! Game over
      setGameState("gameover");
      if (level - 1 > highScore) {
        setHighScore(level - 1);
      }
      return;
    }

    // Check if pattern is complete
    if (newUserPattern.length === pattern.length) {
      // Level complete!
      setLevel((prev) => prev + 1);
      setUserPattern([]);
      setTimeout(() => {
        addToPattern();
        setGameState("showing");
      }, 1000);
    }
  };

  const renderColorButton = (color: Color, position: "tl" | "tr" | "bl" | "br") => {
    const isActive = activeColor === color;
    const colorConfig = colors[color];

    const positionClasses = {
      tl: "rounded-tl-3xl",
      tr: "rounded-tr-3xl",
      bl: "rounded-bl-3xl",
      br: "rounded-br-3xl",
    };

    return (
      <motion.button
        onClick={() => handleColorClick(color)}
        className={`
          w-full h-full ${colorConfig.bg} ${positionClasses[position]}
          ${isActive ? `${colorConfig.active} shadow-2xl ${colorConfig.glow}` : ""}
          transition-all duration-150
          ${gameState === "playing" && !isShowingPattern ? "hover:brightness-110 cursor-pointer" : "cursor-not-allowed"}
          border-2 border-slate-900
        `}
        whileTap={gameState === "playing" && !isShowingPattern ? { scale: 0.95 } : {}}
        animate={{
          scale: isActive ? 1.05 : 1,
        }}
        transition={{ duration: 0.1 }}
        disabled={gameState !== "playing" || isShowingPattern}
      />
    );
  };

  if (gameState === "idle") {
    return (
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">Pattern Memory</h2>
          <p className="text-slate-400">
            Watch the pattern and repeat it!
          </p>
        </div>

        {highScore > 0 && (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-lg">
            <Brain className="w-5 h-5 text-purple-500" />
            <span className="text-purple-500 font-bold">Best Level: {highScore}</span>
          </div>
        )}

        {/* Preview */}
        <div className="grid grid-cols-2 gap-2 w-64 h-64 mx-auto">
          <div className={`${colors.red.bg} rounded-tl-3xl border-2 border-slate-900`} />
          <div className={`${colors.blue.bg} rounded-tr-3xl border-2 border-slate-900`} />
          <div className={`${colors.green.bg} rounded-bl-3xl border-2 border-slate-900`} />
          <div className={`${colors.yellow.bg} rounded-br-3xl border-2 border-slate-900`} />
        </div>

        <Button onClick={startGame} variant="indigo" size="lg" className="gap-2">
          <Play className="w-5 h-5" />
          Start Game
        </Button>
      </div>
    );
  }

  if (gameState === "gameover") {
    return (
      <div className="text-center space-y-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="space-y-2"
        >
          <h2 className="text-3xl font-bold text-red-400">Game Over!</h2>
          <p className="text-slate-400">You reached level {level - 1}</p>
          {level - 1 >= highScore && highScore > 0 && (
            <p className="text-green-400 font-bold">🎉 New High Score!</p>
          )}
        </motion.div>

        <div className="grid grid-cols-2 gap-2 w-64 h-64 mx-auto opacity-50">
          <div className={`${colors.red.bg} rounded-tl-3xl border-2 border-slate-900`} />
          <div className={`${colors.blue.bg} rounded-tr-3xl border-2 border-slate-900`} />
          <div className={`${colors.green.bg} rounded-bl-3xl border-2 border-slate-900`} />
          <div className={`${colors.yellow.bg} rounded-br-3xl border-2 border-slate-900`} />
        </div>

        <Button onClick={startGame} variant="indigo" size="lg" className="gap-2">
          <RotateCcw className="w-5 h-5" />
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="flex items-center justify-between">
        <div className="text-center">
          <div className="text-sm text-slate-400">Level</div>
          <div className="text-2xl font-bold text-white">{level}</div>
        </div>

        <div className="text-center">
          <div className="text-sm text-slate-400">Pattern Length</div>
          <div className="text-2xl font-bold text-white">{pattern.length}</div>
        </div>

        {highScore > 0 && (
          <div className="text-center">
            <div className="text-sm text-slate-400">Best</div>
            <div className="text-2xl font-bold text-purple-400">{highScore}</div>
          </div>
        )}
      </div>

      {/* Status */}
      <div className="text-center">
        <AnimatePresence mode="wait">
          {gameState === "showing" && (
            <motion.div
              key="showing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-indigo-400 font-medium"
            >
              Watch carefully...
            </motion.div>
          )}
          {gameState === "playing" && (
            <motion.div
              key="playing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-green-400 font-medium"
            >
              Your turn! ({userPattern.length}/{pattern.length})
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Game Board */}
      <div className="grid grid-cols-2 gap-2 w-80 h-80 mx-auto">
        {renderColorButton("red", "tl")}
        {renderColorButton("blue", "tr")}
        {renderColorButton("green", "bl")}
        {renderColorButton("yellow", "br")}
      </div>

      <div className="text-center">
        <Button
          onClick={() => setGameState("idle")}
          variant="ghost"
          size="sm"
          className="text-slate-400"
        >
          Quit Game
        </Button>
      </div>
    </div>
  );
}
