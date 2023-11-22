import React, { useState } from 'react';

import cardData from '../utils/cards';
import shuffle from '../utils/shuffle';

const useDeck = (size) => {
    const [deck, setDeck] = useState(shuffle(cardData, size));
    const [hand, setHand] = useState({ cardOne: null, cardTwo: null });

    const drawCards = () => {
        const updatedCards = [...deck];
        setHand({ cardOne: updatedCards.pop(), cardTwo: updatedCards.pop() });
        setDeck(updatedCards);
    };

    const reset = () => {
        setDeck(shuffle(cardData));
        setHand([]);
    }

    return {
        deck,
        hand,
        drawCards,
        reset
    }
}

export default useDeck;