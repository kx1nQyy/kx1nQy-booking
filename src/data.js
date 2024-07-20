function getAd() {
    return {
        id: 1,
        title: 'Уютное гнездышко для молодоженов',
        price: {
            value: 5000,
            currency: '&#8381;'
        },
        type: HouseType.Flat,
        capacity: {
            rooms: 2,
            guests: 3
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
