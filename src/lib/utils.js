export const generalTimer = 10;

export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function generateId() {
  return Math.floor(Math.random() * 100000);
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function getRandomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}
