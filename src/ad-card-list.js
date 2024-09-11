const adCardTemplate = document.getElementById('card');
const templateContent = adCardTemplate.content;
const templateElement = templateContent.querySelector('.popup');

function getNounPluralForm(num, one, two, many)
{
    const number = Number(num);
    const mod10 = number % 10;
    const mod100 = number % 100;

    switch (true) {
        case (mod100 >= 11 && mod100 <= 20):
            return many;

        case (mod10 > 5):
            return many;

        case (mod10 === 1):
            return one;

        case (mod10 >= 2 && mod10 <= 4):
            return two;

        default:
            return many;
    }
}

const formatCapacity = (capacity) => {
    const roomWord = getNounPluralForm(capacity.rooms, 'комната', 'комнаты', 'комнат');
    const guestWord = getNounPluralForm(capacity.guests, 'гостя', 'гостей', 'гостей');

    return `${capacity.rooms} ${roomWord} для ${capacity.guests} ${guestWord}`;
}

const renderFeatures = (features, featureListElement) => {
    const notExistFeatures = [];
    const featureListElements = featureListElement.querySelectorAll('li');

    for (const key in features) {
        if (features[key] === false) {
            notExistFeatures.push(key);
        }
    }

    for (const listElement of featureListElements) {
        for (const key of notExistFeatures) {
            if (listElement.classList.contains(`popup__feature--${key}`)) {
                listElement.remove();
            }
        }
    }
}

const renderAdCardList = (ads, container) => {
    for (const ad of ads) {
        const adCardElement = templateElement.cloneNode(true);

        const priceElement = adCardElement.querySelector('.popup__text--price');
        priceElement.textContent = ad.price.value;
        priceElement.innerHTML += ad.price.currency;

        adCardElement.querySelector('.popup__title').textContent = ad.title;
        adCardElement.querySelector('.popup__text--address').textContent = ad.address;
        adCardElement.querySelector('.popup__type').textContent = ad.type.value.ru;

        adCardElement.querySelector('.popup__text--capacity').textContent = formatCapacity(ad.capacity);

        const timeElement = adCardElement.querySelector('.popup__text--time');
        timeElement.textContent =  `c ${ad.dateTime.checkIn} по ${ad.dateTime.eviction}`;


        adCardElement.querySelector('.popup__description').textContent = ad.description;

        renderFeatures(ad.features, adCardElement.querySelector('.popup__features'));

        adCardElement.querySelector('.popup__photos').textContent = ad.popup__photos;
        container.insertAdjacentElement('beforeend', adCardElement);
    }
};

export {
    renderAdCardList,
}
