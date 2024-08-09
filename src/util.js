const getRandomInt = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const getRandomArrayElement = (array) => {
    return array[getRandomInt(0, array.length - 1)];
}

const getRandomEnumElement = (object) => {
    return getRandomArrayElement(Object.values(object));
}

const getRandomBoolValue = () => {
    return Boolean(getRandomInt(0, 1));
}


const getFeaturesGeneration = () => {
    return {
        wifi: getRandomBoolValue(),
        dishwasher: getRandomBoolValue(),
        parking: getRandomBoolValue(),
        washer: getRandomBoolValue(),
        elevator: getRandomBoolValue(),
        conditioner: getRandomBoolValue(),
    }
}

export {
    getFeaturesGeneration,
    getRandomBoolValue,
    getRandomEnumElement,
    getRandomArrayElement,
    getRandomInt
};
