const MAP_ELEMENT_ID = 'map-canvas';
const SCALE_LEVEL = 16;

const CITIES = {
    khv: {
        lat: 48.441466,
        lng: 135.111173
    }
};

const points = [
    {
        lat: 48.441466,
        lng: 135.111173
    }
];

const map = L.map(MAP_ELEMENT_ID)
    .setView(
        CITIES.khv,
        SCALE_LEVEL
    );

L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
).addTo(map);

const createCustomPopup = () => {
    return '<div>Max Developer</div>';
}

const marker = L.marker(points[0]);
marker
    .addTo(map)
    .bindPopup(createCustomPopup());
