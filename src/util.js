function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getRandomArrayElement(array) {
    return array[getRandomInt(0, array.length - 1)];
}

function getRandomEnumElement(object) {
    return getRandomArrayElement(Object.values(object));
}

function getRandomBoolValue() {
    return Boolean(getRandomInt(0, 1));
}

export {
    getRandomBoolValue,
    getRandomEnumElement,
    getRandomArrayElement,
    getRandomInt
};
