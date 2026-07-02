"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Circle, Square, Triangle, Star, Play, Zap } from "lucide-react";
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
  purple: "text-violet-500",
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
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
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
    if (currentTarget) {
      newShapes.push({ id: Math.random().toString(), shape: currentTarget.shape, color: currentTarget.color });
    }
    for (let i = 0; i < 8; i++) {
      const shape = shapeOrder[Math.floor(Math.random() * shapeOrder.length)];
      const color = colorOrder[Math.floor(Math.random() * colorOrder.length)];
      if (currentTarget && !(shape === currentTarget.shape && color === currentTarget.color)) {
        newShapes.push({ id: Math.random().toString(), shape, color });
      }
    }
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
    if (score > highScore) setHighScore(score);
  };

  const handleShapeClick = (shape: ShapeItem) => {
    if (!currentTarget) return;
    const isCorrect = shape.shape === currentTarget.shape && shape.color === currentTarget.color;
    if (isCorrect) {
      setScore((prev) => prev + 10 + streak * 2);
      setStreak((prev) => prev + 1);
      setFeedback("correct");
      setTimeout(() => { generateTarget(); setFeedback(null); }, 300);
    } else {
      setStreak(0);
      setFeedback("wrong");
      setTimeout(() => setFeedback(null), 300);
    }
    setTimeout(() => generateShapes(), 100);
  };

  const renderShape = (item: ShapeItem) => {
    const Icon = shapeIcons[item.shape];
    const isCorrect = feedback === "correct" && item.shape === currentTarget?.shape && item.color === currentTarget?.color;
    return (
      <motion.button
        key={item.id}
        onClick={() => handleShapeClick(item)}
        className={`aspect-square rounded-xl border flex items-center justify-center transition-colors
          ${isCorrect ? "border-green-400 bg-green-50" : "border-slate-200 bg-slate-50 hover:border-slate-400"}`}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Icon className={`w-10 h-10 ${colors[item.color]}`} strokeWidth={2} fill="currentColor" />
      </motion.button>
    );
  };

  if (!gameStarted) {
    return (
      <div className="text-center space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900">Color Blast</h2>
          <p className="text-slate-500">Match the target shape and color as fast as you can!</p>
        </div>

        {highScore > 0 && (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-lg">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span className="text-yellow-700 font-semibold text-sm">High Score: {highScore}</span>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-md mx-auto">
          {shapeOrder.map((shape, idx) => {
            const Icon = shapeIcons[shape];
            const color = colorOrder[idx % colorOrder.length];
            return (
              <motion.div
                key={shape}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="aspect-square rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center"
              >
                <Icon className={`w-10 h-10 ${colors[color]}`} fill="currentColor" />
              </motion.div>
            );
          })}
        </div>

        <Button onClick={startGame} variant="primary" size="lg" className="gap-2">
          <Play className="w-5 h-5" />
          Start Game
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-xs text-slate-400 mb-0.5">Score</div>
            <div className="text-2xl font-bold text-slate-900">{score}</div>
          </div>
          {streak > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="px-3 py-1 bg-orange-50 border border-orange-200 rounded-lg"
            >
              <div className="text-sm text-orange-600 font-bold">{streak}x streak</div>
            </motion.div>
          )}
        </div>
        <div className="text-center">
          <div className="text-xs text-slate-400 mb-0.5">Time</div>
          <div className={`text-2xl font-bold ${timeLeft <= 10 ? "text-red-500" : "text-slate-900"}`}>
            {timeLeft}s
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {currentTarget && (
          <motion.div
            key={currentTarget.id}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="text-center space-y-2"
          >
            <div className="text-sm text-slate-500">Find this:</div>
            <div className="inline-flex items-center justify-center p-4 bg-slate-50 border-2 border-slate-900 rounded-xl">
              {(() => {
                const Icon = shapeIcons[currentTarget.shape];
                return <Icon className={`w-14 h-14 ${colors[currentTarget.color]}`} strokeWidth={2} fill="currentColor" />;
              })()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`text-center font-bold text-lg ${feedback === "correct" ? "text-green-600" : "text-red-500"}`}
          >
            {feedback === "correct" ? "Correct!" : "Try again!"}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
        {shapes.map((shape) => renderShape(shape))}
      </div>

      <div className="text-center">
        <Button onClick={endGame} variant="ghost" size="sm" className="text-slate-400">
          End Game
        </Button>
      </div>
    </div>
  );
}
