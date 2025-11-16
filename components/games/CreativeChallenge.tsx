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
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "colormatch" as const,
    name: "Color Blast",
    icon: Palette,
    description: "Match shapes & colors fast",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "memory" as const,
    name: "Pattern Memory",
    icon: Brain,
    description: "Remember the sequence",
    color: "from-green-500 to-emerald-500",
  },
];

export default function CreativeChallenge() {
  const [currentGame, setCurrentGame] = useState<GameType>("menu");

  const renderGame = () => {
    switch (currentGame) {
      case "tictactoe":
        return <TicTacToe />;
      case "colormatch":
        return <ColorMatch />;
      case "memory":
        return <PatternMemory />;
      default:
        return null;
    }
  };

  if (currentGame !== "menu") {
    return (
      <div className="space-y-4">
        <button
          onClick={() => setCurrentGame("menu")}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
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
      <p className="text-slate-300 text-center">
        Choose a game to play
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {games.map((game, index) => {
          const Icon = game.icon;
          return (
            <motion.button
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentGame(game.id)}
              className="group relative overflow-hidden rounded-xl p-6 bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 transition-all"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-10 transition-opacity`}
              />

              <div className="relative z-10 text-center space-y-3">
                <div className="flex justify-center">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${game.color}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white">
                  {game.name}
                </h3>
                <p className="text-sm text-slate-400">{game.description}</p>
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="text-center pt-4">
        <p className="text-xs text-slate-500">
          Have fun! 🎮
        </p>
      </div>
    </div>
  );
}
