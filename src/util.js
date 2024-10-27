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

function getNounPluralForm(num, one, two, many)
{
    const number = Number(num);
    const mod10 = number % 10;
    const mod100 = number % 100;

    switch (true) {
        case (mod100 >= 11 && mod100 <= 20):
            return many;

        case (mod10 > 5):
            return many;

        case (mod10 === 1):
            return one;

        case (mod10 >= 2 && mod10 <= 4):
            return two;

        default:
            return many;
    }
}

export {
    getRandomBoolValue,
    getRandomEnumElement,
    getRandomArrayElement,
    getRandomInt,
    getNounPluralForm
};
