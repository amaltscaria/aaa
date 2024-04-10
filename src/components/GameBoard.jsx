import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = ({onSelectSquare}) => {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleSelectSquare = (rowIndex, colIndex) => {
        setGameBoard((prevGameBoard) => {
            // Not the right way => Update the object state immutably
            // prevGameBoard[rowIndex][colIndex] = 'X';
            // return prevGameBoard
            const updatedGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
            updatedGameBoard[rowIndex][colIndex] = 'X';
            return updatedGameBoard;
        });

        onSelectSquare();
    }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=> handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
