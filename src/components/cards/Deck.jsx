import React, { useContext } from 'react';

import { ProgressBar } from 'react-bootstrap';

import { GameContext } from '../Game';

import TileCard from './TileCard';

const Deck = ({ onClick, className }) => {
    const { selected, deckData } = useContext(GameContext);
    const { deck, hand } = deckData;

    return (
        <>
            <div className={"deck" + (className ? className : '')} >
                <div className="cards" >
                    {
                        hand.cardOne &&
                        <TileCard
                            key={0}
                            id={0}
                            card={hand.cardOne}
                            selected={selected.cardId == 0}
                            onClick={onClick}
                        />
                    }
                    {
                        hand.cardTwo &&
                        <TileCard
                            key={1}
                            id={1}
                            card={hand.cardTwo}
                            selected={selected.cardId == 1}
                            onClick={onClick}
                        />
                    }
                </div >
                <div className='pile'>
                    <i className="bi bi-layers-fill"></i>
                    <ProgressBar now={deck.length} max={14} label={`${deck.length}`} />
                </div>
            </div >
        </>
    );
};

export default Deck;