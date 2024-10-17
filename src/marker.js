import {
    altRenderFeatures,
    formatCapacity
} from "./ad-card-list";

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

    const priceElement = adCardElement.querySelector('.popup__text--price');
    priceElement.textContent = ad.price.value;
    priceElement.innerHTML += ad.price.currency;

    const timeElement = adCardElement.querySelector('.popup__text--time');
    timeElement.textContent =  `c ${ad.dateTime.checkIn} по ${ad.dateTime.eviction}`;

    adCardElement.querySelector('.popup__title').textContent = ad.title;
    adCardElement.querySelector('.popup__text--address').textContent = ad.address;
    adCardElement.querySelector('.popup__type').textContent = ad.type.value.ru;
    adCardElement.querySelector('.popup__text--capacity').textContent = formatCapacity(ad.capacity);
    adCardElement.querySelector('.popup__description').textContent = ad.description;
    adCardElement.querySelector('.popup__photos').textContent = ad.popup__photos;

    altRenderFeatures(ad.features, adCardElement.querySelector('.popup__features'));

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
