import React, { useState, useEffect, useRef } from "react";

import "./App.css";

function Board({ squares, selectSquare }) {
  function renderSquare(i) {
    return (
      <p className="square" onClick={() => selectSquare(i)}>
        {squares[i]}
      </p>
    );
  }
  return (
    <div className="wrapper">
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
}

function Game() {
  const [currentStep, setCurrentStep] = useLocalStorage("step", 0);
  const [history, setHistory] = useLocalStorage("history", [
    Array(9).fill(null),
  ]);

  const currentSquares = history[currentStep];

  const nextValue = calculateNextValue(currentSquares);
  const winner = calculateWinner(currentSquares);
  const status = calculateStatus(winner, currentSquares, nextValue);

  const moves = history.map((move, step) => {
    const desc = step === 0 ? "Go to game start" : `Go to move #${step}`;
    const isCurrentStep = step === currentStep;
    return (
      <li key={step}>
        <button disabled={isCurrentStep} onClick={() => setCurrentStep(step)}>
          {desc} {isCurrentStep ? "(current)" : null}
        </button>
      </li>
    );
  });

  function selectSquare(i) {
    if (winner || currentSquares[i]) return;

    const newHistory = history.slice(0, currentStep + 1);

    const squaresCopy = [...currentSquares];
    squaresCopy[i] = nextValue;

    setHistory([...newHistory, squaresCopy]);
    setCurrentStep(newHistory.length);
  }

  function restart() {
    setHistory([Array(9).fill(null)]);
    setCurrentStep(0);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentSquares} selectSquare={selectSquare} />
        <button className="restart" onClick={restart}>
          restart
        </button>
      </div>
      <div className="game-info">
        <p>{status}</p>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

// utils functions
function calculateWinner(array) {
  var possibleWinCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  debugger;

  for (let [a, b, c] of possibleWinCondition) {
    if (array[a] && array[a] === array[b] && array[a] === array[c]) {
      return array[a];
    }
  }

  return null;
}

function calculateNextValue(array) {
  return array.filter(Boolean).length % 2 === 0 ? "X" : "O";
}

function calculateStatus(winner, array, value) {
  if (winner) {
    return `Winner is ${winner}`;
  }

  if (array.filter(Boolean).length === array.length) {
    return `Friendship wins.`;
  }

  return `Next is: "${value}"`;
}

function useLocalStorage(key, defaultValue = "") {
  const prevKeyRef = useRef(key);
  const [state, setState] = useState(() => {
    const inLocalStorage = window.localStorage.getItem(key);
    if (inLocalStorage) {
      return JSON.parse(inLocalStorage);
    }
    return defaultValue;
  });

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}

export default Game;
