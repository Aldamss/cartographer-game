import React from 'react';

import Grid from "./Grid";

import { interaction } from '../../utils/cardInteraction';

const placeholderAsset = "/assets/icons/banner.png";
const nearbyAsset = "/assets/UI/nearby.png";
const touchingAsset = "/assets/UI/touching.png";

const TileCard = ({ id, card, selected, onClick }) => {
    const classes = `tile-card ${selected ? 'selected' : ''}`;
    const { type, image, cards } = card;

    const getInteractionAsset = () => {
        switch (card.interaction) {
            case interaction.NONE:
                return placeholderAsset;
            case interaction.NEARBY:
                return nearbyAsset;
            case interaction.TOUCHING:
                return touchingAsset;
            case interaction.ROUTE:
                return placeholderAsset;
            default:
                return placeholderAsset;
        }
    };


    const handleClick = () => {
        onClick(id, card);
    };

    return (
        <div className={classes} onClick={handleClick}>
            <div className='tile-card-wrapper'>
                <div className='tile-card-title '>
                    <h4>{card.type.charAt(0).toUpperCase() + card.type.slice(1)}</h4>
                    <img src={getInteractionAsset()} alt={card.interaction} />
                </div>
                <div className='tile-card-image '>
                    <img src={image ? image : placeholderAsset} alt={type} />
                </div>
                <div className='tile-card-description'>
                    <p>Placed here</p>
                    <Grid boardsize={5} area={card.area} />
                    <p>Interacts {card.interaction}</p>
                    <div className='tile-card-interaction'>
                        <div className='row'>
                            {cards.map((card, id) => <img key={id} src={card.image} alt={card.type} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TileCard;