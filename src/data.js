const MAX_ADVERTISEMENT_ID = 10;

function getAd() {
    return {
        id: getRandomInt(1, MAX_ADVERTISEMENT_ID),
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
            checkIn: '2024.07.20 14:00',
            eviction: '2024.07.24 10:00'
        },
        featurs: {
            wifi: true,
            dishwasher: true,
            parking: false,
            washer: true,
            elevator: false,
            conditioner: true,
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


titles = [
    'Уютное гнездышко для молодоженов',
    'Отличное место для отдыха всей семьей',
    'Симпатичная квартирка для одного',
    'Большая квартира-студия',
    'Скромная квартира на окраене города'
]

prices = [
    values = [
        3000,
        2500,
        3500,
        4000,
        7000
    ],
    currencys = [
        '&#8381;',
        '&dollar;',
        '&pound;',
        '&yen;'
    ]
]

