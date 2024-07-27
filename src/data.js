import {
    HouseType,
    Currency
} from "./enum";

import {
    TITLES,
    CHECK_INS,
    DESCRIPTIONS,
    EVICTIONS,
    PRICE_VALUES
} from "./const";

import {
    getRandomInt,
    getRandomArrayElement,
    getRandomEnumElement,
    getRandomBoolValue
} from "./util";

const MAX_ROOM_COUNT = 3;
const MAX_GUEST_COUNT = 7;

function getAd(count) {
    return {
        id: getRandomInt(1, count),
        title: getRandomArrayElement(TITLES),
        price: {
            value: getRandomArrayElement(PRICE_VALUES),
            currency: getRandomEnumElement(Currency)
        },
        type: getRandomEnumElement(HouseType),
        capacity: {
            rooms: getRandomInt(1, MAX_ROOM_COUNT),
            guests: getRandomInt(1, MAX_GUEST_COUNT)
        },
        dateTime: {
            checkIn: getRandomArrayElement(CHECK_INS),
            eviction: getRandomArrayElement(EVICTIONS)
        },
        features: {
            wifi: getRandomBoolValue(),
            dishwasher: getRandomBoolValue(),
            parking: getRandomBoolValue(),
            washer: getRandomBoolValue(),
            elevator: getRandomBoolValue(),
            conditioner: getRandomBoolValue(),
        },
        description: getRandomArrayElement(DESCRIPTIONS),
        location: {
            latitude:  35.6895,
            longitude: 139.692
        },
        user: {
            id: 1,
            login: 'k1to',
            photo_path: 'user01.png',
        }
    };
}

function getAds(count) {
    const ads = [];

    for (let i = 0; i < count; i++) {
        ads.push(getAd(count));
    }

    return ads;
}

export {getAds};
