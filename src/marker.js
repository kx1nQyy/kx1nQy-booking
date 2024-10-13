const adCardTemplate = document.getElementById('card');
const templateContent = adCardTemplate.content;
const templateElement = templateContent.querySelector('.popup');

const points = [
    {
        lat: 48.441466,
        lng: 135.111173
    }
];

const createCustomPopup = (ad) => {
    const adCardElement = templateElement.cloneNode(true);

    return adCardElement;
};

const addMarkers = (ads, map) => {
    for (const ad of ads) {
        const marker = L.marker(points[0]);
        marker
            .addTo(map)
            .bindPopup(createCustomPopup(ad));
    }
}

export {addMarkers}
