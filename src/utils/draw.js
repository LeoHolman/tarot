import {shuffle} from './shuffle';

export const draw = (number, deck) => {
    return deck.slice(0, number);
}

export const drawRandom = (number, deck) => {
    shuffle(deck);
    return draw(number, deck);
}