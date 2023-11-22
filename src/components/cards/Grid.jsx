import React, { useEffect, useState } from 'react';

const isHighlighted = (rowIndex, colIndex, x1, y1, x2, y2) => {
    if (
        (rowIndex >= x1 && rowIndex <= x2 && colIndex === y1) ||
        (rowIndex >= x1 && rowIndex <= x2 && colIndex === y2) ||
        (colIndex >= y1 && colIndex <= y2 && rowIndex === x1) ||
        (colIndex >= y1 && colIndex <= y2 && rowIndex === x2)
    ) {
        return true;
    } else {
        return false;
    }
}

const Grid = ({ boardsize, area }) => {
    const [tiles, setTiles] = useState([]);

    const setupGrid = () => {
        const updatedTiles = Array(boardsize).fill().map((_, rowIndex) => (
            Array(boardsize).fill().map((_, columnIndex) => ({
                id: rowIndex * boardsize + columnIndex + 1,
                highlighted: isHighlighted(rowIndex, columnIndex, ...area)
            }))
        ));
        setTiles(updatedTiles);
    };

    useEffect(setupGrid, [boardsize, area]);

    return (
        <>
            <div className="grid">
                {tiles.map((row) => (
                    row.map((tile) => (
                        < div key={tile.id} className={'cell' + (tile.highlighted ? ' selected' : '')} />
                    ))
                ))}
            </div >
        </>
    );
}

export default Grid;