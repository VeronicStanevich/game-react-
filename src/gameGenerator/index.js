const colors = ["red", "yellow", "green", "cyan", "fantasy", "blue", "aqua", "chocolate", "crimson", "gold", "purple", "coral"];
const complexityMap = {
    "easy": 3,
    "middle": 6,
    "hard": 10
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

export const createGameCards = (complexity) => {
    const numberOfCards = complexityMap[complexity];
    const availableColors = [...colors].slice(0, numberOfCards);
    const cards = [];
    let id = 1;
    while (availableColors.length) {
        const [color] = availableColors.splice(Math.floor(getRandomArbitrary(0, availableColors.length - 1)), 1);
        id++;

        cards.push({
            id,
            color
        });
        id++;
        cards.unshift({
                id,
                color
            }
        )
    }
    return cards;
}