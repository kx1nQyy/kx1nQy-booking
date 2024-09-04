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

console.log(getNounPluralForm(10, 'компьютер', 'компьютера', 'компьютеров'))

const formatCapacity = (capacity) => {
    const roomWord = getNounPluralForm(capacity.rooms, 'комната', 'комнаты', 'комнат');
    const guestWord = getNounPluralForm(capacity.guests, 'гостя', 'гостей', 'гостей');

    return `${capacity.rooms} ${roomWord} для ${capacity.guests} ${guestWord}`;
}

const renderAdCardList = (ads, container) => {
    for (const ad of ads) {
        const adCardElement = templateElement.cloneNode(true);

        const priceElement = adCardElement.querySelector('.popup__text--price');
        priceElement.textContent = ad.price.value;
        priceElement.innerHTML += ad.price.currency;

        adCardElement.querySelector('.popup__title').textContent = ad.title;
        adCardElement.querySelector('.popup__type').textContent = ad.type.value.ru;

        adCardElement.querySelector('.popup__text--capacity').textContent = formatCapacity(ad.capacity);


        container.insertAdjacentElement('beforeend', adCardElement);
    }
};

export {
    renderAdCardList,
}
