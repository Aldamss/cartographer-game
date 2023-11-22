import * as cardTypes from './cardTypes';
import { interaction } from './cardInteraction';

class Card {
    constructor(type, image) {
        this.type = type;
        this.image = image;

        this.interaction = interaction.NONE;
        this.repeated = false;
        this.cards = [];
    }

    setupInteraction(interaction, repeated, array) {
        this.interaction = interaction;
        this.repeated = repeated;
        this.cards.push(...array);
    }
};

//terrain cards
export const waterCard = new Card(cardTypes.WATER, "/assets/icons/water.png");
export const plainsCard = new Card(cardTypes.PLAINS, "/assets/icons/plains.png");

//player cards
export const mountainCard = new Card(cardTypes.MOUNTAIN, "/assets/icons/mountain.png");
export const forestCard = new Card(cardTypes.FOREST, "/assets/icons/treePines.png");
export const townCard = new Card(cardTypes.TOWN, "/assets/icons/house.png");
export const castleCard = new Card(cardTypes.CASTLE, "/assets/icons/castle.png");
export const deerCard = new Card(cardTypes.DEER, "/assets/icons/deer.png");
export const fieldsCard = new Card(cardTypes.FIELDS, "/assets/icons/fields.png");

mountainCard.setupInteraction(interaction.NEARBY, false, [forestCard]);
forestCard.setupInteraction(interaction.TOUCHING, false, [forestCard]);
townCard.setupInteraction(interaction.NEARBY, true, [forestCard, mountainCard, deerCard, fieldsCard, waterCard]);
deerCard.setupInteraction(interaction.TOUCHING, false, [plainsCard]);
fieldsCard.setupInteraction(interaction.TOUCHING, false, [townCard]);
castleCard.setupInteraction(interaction.ROUTE, false, [townCard]);

const cards = [
    waterCard,
    mountainCard,
    forestCard,
    townCard,
    castleCard,
    deerCard,
    plainsCard,
    fieldsCard,
];

export default cards;