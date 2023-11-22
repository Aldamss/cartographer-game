import React, { useEffect } from 'react';
import { interaction } from '../../utils/cardInteraction';

const placeholderAsset = "/assets/icons/banner.png";
const nearbyAsset = "/assets/UI/nearby.png";
const touchingAsset = "/assets/UI/touching.png";

const CardDescription = ({ card }) => {

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

    return (
        <div className='card-description'>
            <div>
                <b>{card.type && card.type.charAt(0).toUpperCase() + card.type.slice(1)}</b>
                <img src={getInteractionAsset()} alt={card.interaction} />
            </div>
            <div>
                {card.cards.map((card, id) => <img key={id} src={card.image} alt={card.type} />)}
            </div>
        </div>
    );
};

export default CardDescription;