import React, { createContext, useEffect, useState } from 'react';
import { createNoise2D } from 'simplex-noise';

import { waterCard, plainsCard } from '../utils/cards';

import useDeck from '../hooks/useDeck';

import Board from './board/Board';
import Deck from './cards/Deck';

export const GameContext = createContext(null);
export const BoardContext = createContext(null);

const boardsize = 5;
const noise2D = createNoise2D();

const initializeBoard = (boardsize) => {
  const initialTiles = Array(boardsize).fill().map((_, rowIndex) => (
    Array(boardsize).fill().map((_, columnIndex) => ({
      id: rowIndex * boardsize + columnIndex + 1,
      card: Math.abs(noise2D(rowIndex, columnIndex)) < .125 ? waterCard : plainsCard
    }))
  ));
  return initialTiles;
}

function Game() {
  const [gameover, setGameOver] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [selected, setSelected] = useState({ cardId: -1, cardData: null });
  const deckData = useDeck(boardsize);

  const [tiles, setTiles] = useState(initializeBoard(boardsize));

  const highlightTiles = (x1, y1, x2, y2) => {
    const updatedTiles = tiles.map((row, rowIndex) =>
      row.map((tile, colIndex) => {
        if (
          (rowIndex >= x1 && rowIndex <= x2 && colIndex === y1) ||
          (rowIndex >= x1 && rowIndex <= x2 && colIndex === y2) ||
          (colIndex >= y1 && colIndex <= y2 && rowIndex === x1) ||
          (colIndex >= y1 && colIndex <= y2 && rowIndex === x2)
        ) {
          return { ...tile, highlighted: true };
        } else {
          return { ...tile, highlighted: false };
        }
      })
    );
    console.log(x1, y1, x2, y2);
    setTiles(updatedTiles);
  }

  const handleTurn = () => {
    if (deckData.deck.length <= 0) {
      console.log("GameOver");
      setGameOver(true);
      return;
    }
    deckData.drawCards();
    setDisabled(false);
  }

  const handleTile = (id) => {
    const updatedTiles = tiles.map((row) =>
      row.map((tile) => {
        if (id == tile.id) {
          return { ...tile, card: selected.cardData };
        } else {
          return { ...tile };
        }
      }));

    setTiles(updatedTiles);
    setSelected({ cardId: -1, cardData: null });
    handleTurn();
  }

  const handleCard = (id, card) => {
    if (id == selected.cardId) {
      setSelected({ cardId: -1, cardData: null });
      return;
    }
    setSelected({ cardId: id, cardData: card });
  }

  useEffect(() => { handleTurn(); }, []);

  const area = selected.cardData !== null ? selected.cardData.area : null;
  useEffect(() => {
    highlightTiles(...(area !== null ? area : [-1, -1, -1, -1]))
  }, [area]);

  return (
    <div className='game'>
      <GameContext.Provider value={{ disabled, selected, deckData }}>
        <BoardContext.Provider value={{ tiles }}>
          <Board selectTile={handleTile} className={gameover && ' gameover'} />
        </BoardContext.Provider>
        <Deck onClick={handleCard} className={gameover && ' gameover'} />
      </GameContext.Provider>
    </div>
  );
}

export default Game;
