const TITLES = [
    'Уютное гнездышко для молодоженов',
    'Отличное место для отдыха всей семьей',
    'Симпатичная квартирка для одного',
    'Большая квартира-студия',
    'Скромная квартира на окраине города'
];

const ADDRESS = [
    'address-1',
    'address-2',
    'address-3',
    'address-4',
    'address-5'
]

const PRICE_VALUES = [
    3000,
    2500,
    3500,
    4000,
    7000
];

const CHECK_INS = [
    '24.07.20 14:00',
    '24.04.24 14:00',
    '24.02.10 14:00',
    '24.09.12 14:00',
    '24.12.01 14:00'
];

const EVICTIONS = [
    '24.12.24 10:00',
    '24.10.03 10:00',
    '24.01.04 10:00',
    '24.08.11 10:00',
    '24.05.30 10:00'
];

const DESCRIPTIONS = [
    'description-1',
    'description-2',
    'description-3',
];

const POPUP_PHOTOS = [
    "khv-max.jpg",
    "idven.jpg",
    "khv-air.jpg",
    "khv-179.jpg",
];

const CITIES = {
    khv: {
        lat: 48.441466,
        lng: 135.111173
    }
};

const POINTS = {
    khv: [
        {
            lat: 48.441466,
            lng: 135.111173
        },
        {
            lat: 48.493647,
            lng: 135.066042
        },
        {
            lat: 48.525891,
            lng: 135.170737
        }
    ],
    msc: [
        {
            lat: 55.757313,
            lng:  37.823376
        },
        {
            lat: 55.791481,
            lng:  37.884444
        }
    ]
};

const OPENSTREATMAP_COPYRIGHT = `
    &copy;
    <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
    contributors
`;

export {
    TITLES,
    ADDRESS,
    CHECK_INS,
    DESCRIPTIONS,
    EVICTIONS,
    PRICE_VALUES,
    POPUP_PHOTOS,
    OPENSTREATMAP_COPYRIGHT,
    POINTS,
    CITIES
};
