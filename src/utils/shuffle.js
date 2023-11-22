import * as cardTypes from './cardTypes';

import { useId } from "react";

const shuffle = (cards, size) => {
    const filteredCards = cards.filter((card) =>
        card.type !== cardTypes.WATER &&
        card.type !== cardTypes.PLAINS
    );

    const deck = [];
    filteredCards.forEach((card) => {
        for (let i = 0; i < 3; i++) {
            if (card.type == cardTypes.CASTLE) {
                deck.push(card);
                break;
            }
            deck.push(card);
        }
    });

    const shuffledCards = [...deck].sort(() => Math.random() - 0.5).map((card) => ({
        id: useId(),
        area: getArea(size),
        ...card,
    }));

    return shuffledCards;
}

const getArea = (size) => (Math.random() < 0.5) ?
    getColumnValues(size, Math.floor(Math.random() * size)) :
    getRowValues(size, Math.floor(Math.random() * size));

const getColumnValues = (size, index) => {
    const x1 = index;
    const y1 = 0;
    const x2 = index;
    const y2 = size;
    return [x1, y1, x2, y2];
}

const getRowValues = (size, index) => {
    const x1 = 0;
    const y1 = index;
    const x2 = size;
    const y2 = index;
    return [x1, y1, x2, y2];
}

export default shuffle;