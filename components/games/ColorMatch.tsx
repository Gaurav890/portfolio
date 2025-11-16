"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Circle, Square, Triangle, Star, Play, RotateCcw, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Shape = "circle" | "square" | "triangle" | "star";
type Color = "red" | "blue" | "green" | "yellow" | "purple" | "pink";

interface ShapeItem {
  id: string;
  shape: Shape;
  color: Color;
}

const colors: Record<Color, string> = {
  red: "text-red-500",
  blue: "text-blue-500",
  green: "text-green-500",
  yellow: "text-yellow-500",
  purple: "text-purple-500",
  pink: "text-pink-500",
};

const shapeIcons = {
  circle: Circle,
  square: Square,
  triangle: Triangle,
  star: Star,
};

const colorOrder: Color[] = ["red", "blue", "green", "yellow", "purple", "pink"];
const shapeOrder: Shape[] = ["circle", "square", "triangle", "star"];

export default function ColorMatch() {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [currentTarget, setCurrentTarget] = useState<ShapeItem | null>(null);
  const [shapes, setShapes] = useState<ShapeItem[]>([]);
  const [streak, setStreak] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      endGame();
    }
  }, [gameStarted, timeLeft]);

  useEffect(() => {
    if (gameStarted) {
      generateShapes();
      generateTarget();
    }
  }, [gameStarted]);

  const generateTarget = () => {
    const shape = shapeOrder[Math.floor(Math.random() * shapeOrder.length)];
    const color = colorOrder[Math.floor(Math.random() * colorOrder.length)];
    setCurrentTarget({ id: "target", shape, color });
  };

  const generateShapes = () => {
    const newShapes: ShapeItem[] = [];

    // Add correct answer
    if (currentTarget) {
      newShapes.push({
        id: Math.random().toString(),
        shape: currentTarget.shape,
        color: currentTarget.color,
      });
    }

    // Add wrong answers
    for (let i = 0; i < 8; i++) {
      const shape = shapeOrder[Math.floor(Math.random() * shapeOrder.length)];
      const color = colorOrder[Math.floor(Math.random() * colorOrder.length)];

      // Make sure it's not the same as target
      if (currentTarget && !(shape === currentTarget.shape && color === currentTarget.color)) {
        newShapes.push({
          id: Math.random().toString(),
          shape,
          color,
        });
      }
    }

    // Shuffle
    setShapes(newShapes.sort(() => Math.random() - 0.5));
  };

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setTimeLeft(30);
    setStreak(0);
    setFeedback(null);
  };

  const endGame = () => {
    setGameStarted(false);
    if (score > highScore) {
      setHighScore(score);
    }
  };

  const handleShapeClick = (shape: ShapeItem) => {
    if (!currentTarget) return;

    const isCorrect = shape.shape === currentTarget.shape && shape.color === currentTarget.color;

    if (isCorrect) {
      const points = 10 + streak * 2;
      setScore((prev) => prev + points);
      setStreak((prev) => prev + 1);
      setFeedback("correct");

      // Generate new target and shapes
      setTimeout(() => {
        generateTarget();
        setFeedback(null);
      }, 300);
    } else {
      setStreak(0);
      setFeedback("wrong");
      setTimeout(() => setFeedback(null), 300);
    }

    // Regenerate shapes
    setTimeout(() => {
      generateShapes();
    }, 100);
  };

  const renderShape = (item: ShapeItem) => {
    const Icon = shapeIcons[item.shape];
    const colorClass = colors[item.color];

    return (
      <motion.button
        key={item.id}
        onClick={() => handleShapeClick(item)}
        className={`
          aspect-square rounded-xl bg-slate-800/50 border-2 border-slate-700
          hover:border-indigo-500 hover:bg-slate-700/50
          flex items-center justify-center transition-all
          ${feedback === "correct" && item.shape === currentTarget?.shape && item.color === currentTarget?.color ? "border-green-500 bg-green-500/20" : ""}
        `}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Icon className={`w-12 h-12 ${colorClass}`} strokeWidth={2} fill="currentColor" />
      </motion.button>
    );
  };

  if (!gameStarted) {
    return (
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">Color Blast</h2>
          <p className="text-slate-400">
            Match the target shape and color as fast as you can!
          </p>
        </div>

        {highScore > 0 && (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500/50 rounded-lg">
            <Zap className="w-5 h-5 text-yellow-500" />
            <span className="text-yellow-500 font-bold">High Score: {highScore}</span>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-md mx-auto">
          {shapeOrder.map((shape, idx) => {
            const Icon = shapeIcons[shape];
            const color = colorOrder[idx % colorOrder.length];
            return (
              <motion.div
                key={shape}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="aspect-square rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center"
              >
                <Icon className={`w-10 h-10 ${colors[color]}`} fill="currentColor" />
              </motion.div>
            );
          })}
        </div>

        <Button onClick={startGame} variant="indigo" size="lg" className="gap-2">
          <Play className="w-5 h-5" />
          Start Game
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-sm text-slate-400">Score</div>
            <div className="text-2xl font-bold text-white">{score}</div>
          </div>
          {streak > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-center px-3 py-1 bg-orange-500/20 border border-orange-500/50 rounded-lg"
            >
              <div className="text-sm text-orange-500 font-bold">🔥 {streak}x</div>
            </motion.div>
          )}
        </div>

        <div className="text-center">
          <div className="text-sm text-slate-400">Time</div>
          <div className={`text-2xl font-bold ${timeLeft <= 10 ? "text-red-500" : "text-white"}`}>
            {timeLeft}s
          </div>
        </div>
      </div>

      {/* Target */}
      <AnimatePresence mode="wait">
        {currentTarget && (
          <motion.div
            key={currentTarget.id}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="text-center space-y-2"
          >
            <div className="text-sm text-slate-400">Find this:</div>
            <div className="inline-flex items-center justify-center p-4 bg-slate-800/80 border-2 border-indigo-500 rounded-xl">
              {(() => {
                const Icon = shapeIcons[currentTarget.shape];
                return (
                  <Icon
                    className={`w-16 h-16 ${colors[currentTarget.color]}`}
                    strokeWidth={2}
                    fill="currentColor"
                  />
                );
              })()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Feedback */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`text-center font-bold text-lg ${
              feedback === "correct" ? "text-green-500" : "text-red-500"
            }`}
          >
            {feedback === "correct" ? "✓ Correct!" : "✗ Try again!"}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shapes Grid */}
      <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
        {shapes.map((shape) => renderShape(shape))}
      </div>

      <div className="text-center">
        <Button onClick={endGame} variant="ghost" size="sm">
          End Game
        </Button>
      </div>
    </div>
  );
}
