const adFormElement = document.querySelector('.ad-form');
const titleInputElment = adFormElement.querySelector('#title');
const priceInputElment = adFormElement.querySelector('#price');
const descriptionInputElment = adFormElement.querySelector('#description');
const typeInputElement = adFormElement.querySelector('#type')
const timeinInputElement = adFormElement.querySelector('#timein')
const timeoutInputElement = adFormElement.querySelector('#timeout')

const MAX_PRICE_VALUE = 1_000_000;
let minPriceValue = 1;
const MAX_TITLE_LENGTH = 100;
const MIN_TITLE_LENGTH = 10;
const MAX_DESCRIPTION_LENGTH = 100;
const MIN_DESCRIPTION_LENGTH = 10;

const entryExitTime = (timein, timeout) => {
    switch (timein) {
        case '12:00' :
            timeout = '12:00'
            break

        case '13:00' :
            timeout = '13:00'
            break

        case '14:00' :
            timeout = '14:00'
            break
    }
}



const getErrorMessage = (value, maxValue, minValue, inputType) => {
    let error = '';
    const isTextArea = inputType === 'textarea';

    if (isTextArea) {
        value = value.length;
    }

    if (value > maxValue) {
        error = isTextArea
            ? `Удалите лишние ${value - maxValue} симв.`
            : `${maxValue} максимальная стоимость.`;
    } else if (value < minValue) {
        error = isTextArea
            ? `${minValue} минимальное число символов для описания.`
            : `${minValue} минимальная стоимость.`;
    }

    return error;
}

const housePriceChanges = (houseType) => {
    switch (houseType) {
        case 'bungalow':
            minPriceValue = 0;
            break

        case 'flat':
            minPriceValue = 1000;
            break

        case 'hotel':
            minPriceValue = 3000;
            break

        case 'house':
            minPriceValue = 5000;
            break

        case 'palace':
            minPriceValue = 10000;
            break
    }
}

if (typeInputElement) {
    typeInputElement.addEventListener('input', (evt) => {
        const value = evt.target.value;

        housePriceChanges(value);

        const error = getErrorMessage(value, MAX_PRICE_VALUE, minPriceValue, evt.target.type);

        priceInputElment.setCustomValidity(error);
        priceInputElment.reportValidity();
    });
}

if (priceInputElment) {
    priceInputElment.addEventListener('input', (evt) => {
        const value = evt.target.value;

        const error = getErrorMessage(value, MAX_PRICE_VALUE, minPriceValue, evt.target.type);

        priceInputElment.setCustomValidity(error);
        priceInputElment.reportValidity();
    });
}

if (timeinInputElement, timeoutInputElement) {
    timeinInputElement.addEventListener('input', (evt) => {
        const value = evt.target.value;
        // const error = getErrorMessage(value, MAX_PRICE_VALUE, minPriceValue, evt.target.type);

        timeinInputElement.setCustomValidity(error);
        timeinInputElement.reportValidity();
    });
}

if (titleInputElment) {
    titleInputElment.addEventListener('input', (evt) => {
        const value = titleInputElment.value;

        titleInputElment.querySelector('.required')

        const error = getErrorMessage(value, MAX_TITLE_LENGTH, MIN_TITLE_LENGTH, evt.target.type);

        titleInputElment.setCustomValidity(error);
        titleInputElment.reportValidity();
    }); 
}

if (descriptionInputElment) {
    descriptionInputElment.addEventListener('input', (evt) => {
        const value = evt.target.value;

        const error = getErrorMessage(value, MAX_DESCRIPTION_LENGTH, MIN_DESCRIPTION_LENGTH, evt.target.type);

        descriptionInputElment.setCustomValidity(error);
        descriptionInputElment.reportValidity();
    });
}
