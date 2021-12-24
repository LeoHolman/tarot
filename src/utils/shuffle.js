// lifted from SO: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// original source: https://bost.ocks.org/mike/shuffle/
// name: Fisher-Yates shuffle
export const shuffle = (deck) => {
    let currentIndex = deck.length;
    let randomIndex;

    while (currentIndex != 0) {
        // Select a random card...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current card
        [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
    }

    return deck;
}