function getAd() {
    return {
        id: 1,
        title: titles[getRandomInt(1, 5)],
        price: {
            value: values[getRandomInt(1, 5)],
            currency: currencys[getRandomInt(1, 4)]
        },
        type: HouseType.Flat,
        capacity: {
            rooms: getRandomInt(1, 4),
            guests: getRandomInt(1, 8)
        },
        dateTime: {
            checkIn: checkIns[getRandomInt(1 , 5)],
            eviction: evictions[getRandomInt(1, 5)]
        },
        featurs: {
            wifi: bools[getRandomInt(1, 2)],
            dishwasher: bools[getRandomInt(1, 2)],
            parking: bools[getRandomInt(1, 2)],
            washer: bools[getRandomInt(1, 2)],
            elevator: bools[getRandomInt(1, 2)],
            conditioner: bools[getRandomInt(1, 2)],
        },
        description: 'Великолепная квартира-студия в центре Токио. Подходит как туристам, так и бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.',
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
        ads.push(getAd());
    }

    return ads;
}
