import {
    HouseType,
    Currency
} from "./enum";

import {
    TITLES,
    ADDRESS,
    CHECK_INS,
    DESCRIPTIONS,
    EVICTIONS,
    PRICE_VALUES,
    POPUP_PHOTOS
} from "./const";

import {
    getRandomInt,
    getRandomArrayElement,
    getRandomEnumElement,
    getRandomBoolValue
} from "./util";

const MAX_ROOM_COUNT = 3;
const MAX_GUEST_COUNT = 4;
const MAX_PHOTO_COUNT = 5;

const getFeatures = () => {
    return {
        wifi: getRandomBoolValue(),
        dishwasher: getRandomBoolValue(),
        parking: getRandomBoolValue(),
        washer: getRandomBoolValue(),
        elevator: getRandomBoolValue(),
        conditioner: getRandomBoolValue(),
    }
}

const usedAdIds = [];

const generatePhotos = () => {
    const adPhotos = [];
    for (let i = 0; i < getRandomInt(1, MAX_PHOTO_COUNT); i++) {
        adPhotos.push(getRandomArrayElement(POPUP_PHOTOS));
    }

    return adPhotos;
}

const getUser = () => {
    return {
        id: 1,
        login: 'k1to',
        photo_path: 'user01.png',
    };
}

const generateAd = (count) => {
    let adId;
    do {
        adId = getRandomInt(1, count);
    } while (usedAdIds.includes(adId));
    usedAdIds.push(adId);

    return {
        id: adId,
        title: getRandomArrayElement(TITLES),
        address: getRandomEnumElement(ADDRESS),
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

        features: getFeatures(),

        description: getRandomArrayElement(DESCRIPTIONS),
        location: {
            latitude:  35.6895,
            longitude: 139.692
        },
        popup__photos: generatePhotos(),
        user: getUser()
    };
}


const generateAds = (count) => {
    const ads = [];

    for (let i = 0; i < count; i++) {
        ads.push(generateAd(count));
    }

    return ads;
}

export {generateAds};
