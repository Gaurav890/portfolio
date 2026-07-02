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
      const timer = setTimeout(() => makeAIMove(), 500);
      return () => clearTimeout(timer);
    }
  }, [isPlayerTurn, winner, board]);

  useEffect(() => {
    const result = checkWinner(board);
    if (result.winner) {
      setWinner(result.winner);
      setWinningLine(result.line);
      if (result.winner === "X") setScore((prev) => ({ ...prev, player: prev.player + 1 }));
      else if (result.winner === "O") setScore((prev) => ({ ...prev, ai: prev.ai + 1 }));
      else setScore((prev) => ({ ...prev, draws: prev.draws + 1 }));
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
    const emptyIndices = board.map((cell, idx) => (cell === null ? idx : null)).filter((idx) => idx !== null) as number[];
    if (emptyIndices.length === 0) return;
    const moveIndex = difficulty === "hard" ? getBestMove(board)
      : Math.random() < 0.7 ? emptyIndices[Math.floor(Math.random() * emptyIndices.length)] : getBestMove(board);
    const newBoard = [...board];
    newBoard[moveIndex] = "O";
    setBoard(newBoard);
    setIsPlayerTurn(true);
  };

  const getBestMove = (currentBoard: Board): number => {
    for (let i = 0; i < 9; i++) {
      if (currentBoard[i] === null) {
        const test = [...currentBoard]; test[i] = "O";
        if (checkWinner(test).winner === "O") return i;
      }
    }
    for (let i = 0; i < 9; i++) {
      if (currentBoard[i] === null) {
        const test = [...currentBoard]; test[i] = "X";
        if (checkWinner(test).winner === "X") return i;
      }
    }
    if (currentBoard[4] === null) return 4;
    const corners = [0, 2, 6, 8].filter((i) => currentBoard[i] === null);
    if (corners.length > 0) return corners[Math.floor(Math.random() * corners.length)];
    const empty = currentBoard.map((c, i) => c === null ? i : null).filter((i) => i !== null) as number[];
    return empty[Math.floor(Math.random() * empty.length)];
  };

  const checkWinner = (currentBoard: Board): { winner: Player | "draw" | null; line: number[] | null } => {
    const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (const line of lines) {
      const [a, b, c] = line;
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return { winner: currentBoard[a], line };
      }
    }
    if (currentBoard.every((cell) => cell !== null)) return { winner: "draw", line: null };
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
        className={`aspect-square rounded-xl border-2 flex items-center justify-center transition-colors relative overflow-hidden
          ${isWinningCell ? "border-green-400 bg-green-50"
            : value ? "border-slate-200 bg-slate-50"
            : !winner && isPlayerTurn ? "border-slate-200 bg-white hover:border-slate-400 hover:bg-slate-50 cursor-pointer"
            : "border-slate-200 bg-white"}
          ${!isPlayerTurn && !winner ? "cursor-wait" : ""}`}
        whileHover={!value && !winner && isPlayerTurn ? { scale: 1.03 } : {}}
        whileTap={!value && !winner && isPlayerTurn ? { scale: 0.97 } : {}}
        disabled={!!value || !!winner || !isPlayerTurn}
      >
        <AnimatePresence>
          {value === "X" && (
            <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}>
              <X className="w-10 h-10 text-slate-900" strokeWidth={3} />
            </motion.div>
          )}
          {value === "O" && (
            <motion.div initial={{ scale: 0, rotate: 180 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}>
              <Circle className="w-10 h-10 text-slate-400" strokeWidth={3} />
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
        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="flex items-center gap-1.5 mb-1">
              <X className="w-4 h-4 text-slate-900" />
              <span className="text-xs text-slate-500">You</span>
            </div>
            <div className="text-2xl font-bold text-slate-900">{score.player}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-slate-400 mb-1">Draws</div>
            <div className="text-2xl font-bold text-slate-400">{score.draws}</div>
          </div>
          <div className="text-center">
            <div className="flex items-center gap-1.5 mb-1">
              <Circle className="w-4 h-4 text-slate-400" />
              <span className="text-xs text-slate-500">AI</span>
            </div>
            <div className="text-2xl font-bold text-slate-900">{score.ai}</div>
          </div>
        </div>

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value as Difficulty)}
          className="px-3 py-1.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-300"
        >
          <option value="easy">Easy</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      {/* Board */}
      <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
        {Array.from({ length: 9 }, (_, i) => renderCell(i))}
      </div>

      {/* Status */}
      <div className="text-center space-y-3">
        <AnimatePresence mode="wait">
          {winner ? (
            <motion.div key="winner" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }} className="space-y-3">
              {winner === "X" ? (
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <Trophy className="w-5 h-5" />
                  <span className="text-xl font-bold">You Win!</span>
                </div>
              ) : winner === "O" ? (
                <div className="flex items-center justify-center gap-2 text-red-500">
                  <Zap className="w-5 h-5" />
                  <span className="text-xl font-bold">AI Wins!</span>
                </div>
              ) : (
                <div className="text-xl font-bold text-slate-500">It&apos;s a Draw!</div>
              )}
              <Button onClick={resetGame} variant="primary" className="gap-2">
                <RotateCcw className="w-4 h-4" />
                Play Again
              </Button>
            </motion.div>
          ) : (
            <motion.div key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="text-slate-500 text-sm">
              {isPlayerTurn ? (
                <span className="flex items-center justify-center gap-2">
                  <X className="w-4 h-4 text-slate-900" /> Your turn
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Circle className="w-4 h-4 text-slate-400" /> AI is thinking...
                </span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
