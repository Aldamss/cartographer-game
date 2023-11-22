import React, { useContext } from 'react';

import { BoardContext } from '../Game';

import Tile from './Tile';

const Board = ({ className, selectTile }) => {
  const { tiles } = useContext(BoardContext);

  return (
    <>
      <div className={"board" + (className ? className : '')}>
        {tiles.map((row) => (
          row.map((tile) => {
            return (
              <Tile
                key={tile.id}
                id={tile.id}
                card={tile.card}
                selected={tile.highlighted}
                onClick={selectTile}
              />
            );
          })
        ))}
      </div>
    </>
  );
}

export default Board;