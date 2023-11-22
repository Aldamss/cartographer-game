import React, { useState, useEffect } from "react";

import { PLAINS, WATER } from '../../utils/cardTypes';

const Tile = ({ id, card, selected, onClick }) => {
    const [imagePath, setImagePath] = useState('');

    const isTilePlaced = card != null && card.type !== PLAINS;
    const classes = `tile-ui ${isTilePlaced ? 'tile-placed' : ''} ${selected ? 'selected' : ''}`;

    const handleClick = () => {
        if (!selected || isTilePlaced) return;
        onClick(id);
    };

    useEffect(() => {
        if (card != null) {
            setImagePath(card.image);
        }
    }, [card]);

    return (
        <div className={`tile`} onClick={handleClick}>
            <div className={classes} />
            {imagePath && <img src={imagePath} alt={card.type} className="placed-card" />}
            {card.type !== WATER && <img src="/assets/terrain/terrain.png" alt='terrain' className="terrain" />}
        </div>
    );
};

export default Tile;