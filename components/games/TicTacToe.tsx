"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Circle, RotateCcw, Trophy, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Player = "X" | "O" | null;
type Board = Player[];
type Difficulty = "easy" | "hard";

export default function TicTacToe() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [winner, setWinner] = useState<Player | "draw" | null>(null);
  const [score, setScore] = useState({ player: 0, ai: 0, draws: 0 });
  const [winningLine, setWinningLine] = useState<number[] | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty>("hard");

  useEffect(() => {
    if (!isPlayerTurn && !winner) {
      const timer = setTimeout(() => {
        makeAIMove();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isPlayerTurn, winner, board]);

  useEffect(() => {
    const result = checkWinner(board);
    if (result.winner) {
      setWinner(result.winner);
      setWinningLine(result.line);
      if (result.winner === "X") {
        setScore((prev) => ({ ...prev, player: prev.player + 1 }));
      } else if (result.winner === "O") {
        setScore((prev) => ({ ...prev, ai: prev.ai + 1 }));
      } else {
        setScore((prev) => ({ ...prev, draws: prev.draws + 1 }));
      }
    }
  }, [board]);

  const handleCellClick = (index: number) => {
    if (board[index] || winner || !isPlayerTurn) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setIsPlayerTurn(false);
  };

  const makeAIMove = () => {
    const emptyIndices = board
      .map((cell, idx) => (cell === null ? idx : null))
      .filter((idx) => idx !== null) as number[];

    if (emptyIndices.length === 0) return;

    let moveIndex: number;

    if (difficulty === "hard") {
      moveIndex = getBestMove(board);
    } else {
      // Easy mode: 70% random, 30% smart
      if (Math.random() < 0.7) {
        moveIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
      } else {
        moveIndex = getBestMove(board);
      }
    }

    const newBoard = [...board];
    newBoard[moveIndex] = "O";
    setBoard(newBoard);
    setIsPlayerTurn(true);
  };

  const getBestMove = (currentBoard: Board): number => {
    // Check if AI can win
    for (let i = 0; i < 9; i++) {
      if (currentBoard[i] === null) {
        const testBoard = [...currentBoard];
        testBoard[i] = "O";
        if (checkWinner(testBoard).winner === "O") {
          return i;
        }
      }
    }

    // Block player from winning
    for (let i = 0; i < 9; i++) {
      if (currentBoard[i] === null) {
        const testBoard = [...currentBoard];
        testBoard[i] = "X";
        if (checkWinner(testBoard).winner === "X") {
          return i;
        }
      }
    }

    // Take center if available
    if (currentBoard[4] === null) return 4;

    // Take corners
    const corners = [0, 2, 6, 8];
    const availableCorners = corners.filter((i) => currentBoard[i] === null);
    if (availableCorners.length > 0) {
      return availableCorners[Math.floor(Math.random() * availableCorners.length)];
    }

    // Take any available space
    const emptyIndices = currentBoard
      .map((cell, idx) => (cell === null ? idx : null))
      .filter((idx) => idx !== null) as number[];
    return emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
  };

  const checkWinner = (currentBoard: Board): { winner: Player | "draw" | null; line: number[] | null } => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6], // diagonals
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return { winner: currentBoard[a], line };
      }
    }

    if (currentBoard.every((cell) => cell !== null)) {
      return { winner: "draw", line: null };
    }

    return { winner: null, line: null };
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setWinner(null);
    setWinningLine(null);
  };

  const renderCell = (index: number) => {
    const value = board[index];
    const isWinningCell = winningLine?.includes(index);

    return (
      <motion.button
        key={index}
        onClick={() => handleCellClick(index)}
        className={`
          aspect-square rounded-xl border-2 flex items-center justify-center
          transition-all relative overflow-hidden
          ${isWinningCell ? "border-green-500 bg-green-500/20" : "border-slate-600 bg-slate-800/50"}
          ${!value && !winner && isPlayerTurn ? "hover:border-indigo-500 hover:bg-indigo-500/10 cursor-pointer" : ""}
          ${!isPlayerTurn && !winner ? "cursor-wait" : ""}
        `}
        whileHover={!value && !winner && isPlayerTurn ? { scale: 1.05 } : {}}
        whileTap={!value && !winner && isPlayerTurn ? { scale: 0.95 } : {}}
        disabled={!!value || !!winner || !isPlayerTurn}
      >
        <AnimatePresence>
          {value === "X" && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <X className="w-12 h-12 text-indigo-400" strokeWidth={3} />
            </motion.div>
          )}
          {value === "O" && (
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Circle className="w-12 h-12 text-pink-400" strokeWidth={3} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="flex items-center gap-2 mb-1">
              <X className="w-5 h-5 text-indigo-400" />
              <span className="text-sm text-slate-400">You</span>
            </div>
            <div className="text-2xl font-bold text-white">{score.player}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-slate-400 mb-1">Draws</div>
            <div className="text-2xl font-bold text-slate-500">{score.draws}</div>
          </div>
          <div className="text-center">
            <div className="flex items-center gap-2 mb-1">
              <Circle className="w-5 h-5 text-pink-400" />
              <span className="text-sm text-slate-400">AI</span>
            </div>
            <div className="text-2xl font-bold text-white">{score.ai}</div>
          </div>
        </div>

        <div className="flex gap-2">
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as Difficulty)}
            className="px-3 py-1 text-sm bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="easy">Easy</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </div>

      {/* Game Board */}
      <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
        {Array.from({ length: 9 }, (_, i) => renderCell(i))}
      </div>

      {/* Status */}
      <div className="text-center space-y-3">
        <AnimatePresence mode="wait">
          {winner ? (
            <motion.div
              key="winner"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="space-y-3"
            >
              {winner === "X" ? (
                <div className="flex items-center justify-center gap-2 text-green-400">
                  <Trophy className="w-6 h-6" />
                  <span className="text-xl font-bold">You Win!</span>
                </div>
              ) : winner === "O" ? (
                <div className="flex items-center justify-center gap-2 text-red-400">
                  <Zap className="w-6 h-6" />
                  <span className="text-xl font-bold">AI Wins!</span>
                </div>
              ) : (
                <div className="text-xl font-bold text-slate-400">It's a Draw!</div>
              )}
              <Button onClick={resetGame} variant="indigo" className="gap-2">
                <RotateCcw className="w-4 h-4" />
                Play Again
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="playing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-slate-400"
            >
              {isPlayerTurn ? (
                <span className="flex items-center justify-center gap-2">
                  <X className="w-5 h-5 text-indigo-400" />
                  Your turn
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Circle className="w-5 h-5 text-pink-400" />
                  AI is thinking...
                </span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
