import {
    altRenderFeatures,
    formatCapacity
} from "../public/old/ad-card-list";

const adCardTemplate = document.getElementById('card');
const adTemplateContent = adCardTemplate.content;
const adTemplateElement = adTemplateContent.querySelector('.popup');

const adPhotoTemplate = document.getElementById('popup__photo');
const adPhotoTemplateContent = adPhotoTemplate.content;
const adPhotoTemplateElement = adPhotoTemplateContent.querySelector('.popup__photo');

const createPopupPhotos = (photos, container) => {
    for (const photo of photos) {
        const adPhotoElement = adPhotoTemplateElement.cloneNode();
        adPhotoElement.src = './img/markers/' + photo;
        container.append(adPhotoElement);
    }
}

const createCustomPopup = (ad) => {
    const adCardElement = adTemplateElement.cloneNode(true);

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
    createPopupPhotos(ad.popup__photos, adCardElement.querySelector('.popup__photos'));

    altRenderFeatures(ad.features, adCardElement.querySelector('.popup__features'));

    return adCardElement;
};

const addMarkers = (ads, map) => {
    for (const ad of ads) {
        const marker = L.marker(ad.location);
        marker
            .addTo(map)
            .bindPopup(createCustomPopup(ad));
    }
}

export {addMarkers}
