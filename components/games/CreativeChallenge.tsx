"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Grid3x3, Palette, Brain, ArrowLeft } from "lucide-react";
import TicTacToe from "./TicTacToe";
import ColorMatch from "./ColorMatch";
import PatternMemory from "./PatternMemory";

type GameType = "menu" | "tictactoe" | "colormatch" | "memory";

const games = [
  {
    id: "tictactoe" as const,
    name: "AI Tic-Tac-Toe",
    icon: Grid3x3,
    description: "Beat the AI opponent",
    iconBg: "bg-blue-500",
  },
  {
    id: "colormatch" as const,
    name: "Color Blast",
    icon: Palette,
    description: "Match shapes & colors fast",
    iconBg: "bg-violet-500",
  },
  {
    id: "memory" as const,
    name: "Pattern Memory",
    icon: Brain,
    description: "Remember the sequence",
    iconBg: "bg-emerald-500",
  },
];

export default function CreativeChallenge() {
  const [currentGame, setCurrentGame] = useState<GameType>("menu");

  const renderGame = () => {
    switch (currentGame) {
      case "tictactoe": return <TicTacToe />;
      case "colormatch": return <ColorMatch />;
      case "memory": return <PatternMemory />;
      default: return null;
    }
  };

  if (currentGame !== "menu") {
    return (
      <div className="space-y-4">
        <button
          onClick={() => setCurrentGame("menu")}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Games
        </button>
        {renderGame()}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <p className="text-slate-500 text-center text-sm">Choose a game to play</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {games.map((game, index) => {
          const Icon = game.icon;
          return (
            <motion.button
              key={game.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setCurrentGame(game.id)}
              className="group rounded-xl p-6 bg-slate-50 border border-slate-200 hover:border-slate-400 transition-colors text-left"
            >
              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className={`p-3 rounded-lg ${game.iconBg}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900">{game.name}</h3>
                <p className="text-sm text-slate-500">{game.description}</p>
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="text-center pt-2">
        <p className="text-xs text-slate-400">Have fun!</p>
      </div>
    </div>
  );
}
