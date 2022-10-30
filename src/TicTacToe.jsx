import React, { useState, useEffect } from "react";
import {
  Title,
  Board,
  Cell,
  Footer,
  Button,
  Winner,
} from "./TicTacToeStyle.jsx";


function TicTacToe() {
  const emptyBoard = Array(9).fill("");
  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [winner, setWinner] = useState();

  const handleCellClick = (index) => {
    if (winner) {
      alert("Jogo Finalizado");
      return null;
    }
    if (board[index] !== "") {
      alert("Posição ocupada");
      return null;
    }
    setBoard(
      board.map((item, itemIndex) =>
        itemIndex === index ? currentPlayer : item
      )
    );
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const Checkwinner = () => {
    const possibleWin = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],
      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],
      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];
    possibleWin.forEach((cells) => {
      if (cells.every((cell) => cell === "O")) {
        setWinner("Vencedor é O");
      } else if (cells.every((cell) => cell === "X")) {
        setWinner("Vencedor é X");
      } else if (board.every((cell) => cell !== "")) {
        setWinner("Empate");
      }
    });
  };

  useEffect(Checkwinner, [board]);
  const resetGame = () => {
    setCurrentPlayer("O");
    setBoard(emptyBoard);
    setWinner(null);
  };
  return (
    <main>
      <Title>jogo da velha</Title>
      <Board className={`${winner ? "gameOver" : " "}`}>
        {board.map((item, index) => (
          <Cell
            className={`${item}`}
            key={index}
            onClick={() => handleCellClick(index)}
          >
            {item}
          </Cell>
        ))}
      </Board>
      {winner && (
        <Footer>
          <Title>
            <Winner className={`${winner}`}>{winner}</Winner>
          </Title>
          <Button onClick={resetGame}>Reset Game</Button>
        </Footer>
      )}
    </main>
  );
}

export default TicTacToe;
