const adCardTemplate = document.getElementById('card');

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
        if (!features[key]) {
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

const altRenderFeatures = (features, featureListElement) => {
    const existFeatures = [];
    featureListElement.innerHTML = '';

    for (const key in features) {
        if (features[key]) {
            existFeatures.push(key);
        }
    }

    for (const key of existFeatures) {
        featureListElement.innerHTML += `<li class="popup__feature popup__feature--${key}">${key}</li>`;
    }
}

const renderAdCardList = (ads, container) => {
    const templateContent = adCardTemplate.content;
    const templateElement = templateContent.querySelector('.popup');

    for (const ad of ads) {
        // 1. клонирование
        const adCardElement = templateElement.cloneNode(true);
        adCardElement.dataset.id = ad.id;

        // 2. модификация
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

        // 3. отрисовка (добавление на страницу)
        return adCardElement
        // 4. добавление обработчиков
        // adCardElement.addEventListener('click', (evt) => {
        //     alert(ad.title);
        // });
    }


    container.addEventListener('click', (evt) => {
        const cardElement = evt.target.closest('.popup');
        if (cardElement) {
            const cardId = +cardElement.dataset.id;
            const ad = ads.find((adItem) => {
                return adItem.id === cardId;
            });
            alert(ad.title);
        }
    });
};

export {
    renderAdCardList,
}
