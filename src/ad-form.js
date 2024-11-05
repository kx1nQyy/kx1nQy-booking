const adFormElement = document.querySelector('.ad-form');
const titleInputELment = adFormElement.querySelector('#title');
const priceInputELment = adFormElement.querySelector('#price');
const descriptionInputELment = adFormElement.querySelector('#description');

const MAX_PRICE_VALUE = 10000;
const MIN_PRICE_VALUE = 1;
const MAX_TITLE_LENGTH = 15;
const MAX_DESCRIPTION_LENGTH = 100;
const MIN_DESCRIPTION_LENGTH = 10;

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

if (priceInputELment) {
    priceInputELment.addEventListener('input', (evt) => {
        const value = evt.target.value;

        const error = getErrorMessage(value, MAX_PRICE_VALUE, MIN_PRICE_VALUE, evt.target.type);

        priceInputELment.setCustomValidity(error);
        priceInputELment.reportValidity();
    });
}

if (titleInputELment) {
    titleInputELment.addEventListener('input', () => {
        const valueLength = titleInputELment.value.length;

        let error = '';
        if (valueLength > MAX_TITLE_LENGTH) {
            error = `Удалите лишние ${valueLength - MAX_TITLE_LENGTH} симв.`;
        }

        titleInputELment.setCustomValidity(error);
        titleInputELment.reportValidity();
    }); 
}

if (descriptionInputELment) {
    descriptionInputELment.addEventListener('input', (evt) => {
        const value = evt.target.value;

        const error = getErrorMessage(value, MAX_DESCRIPTION_LENGTH, MIN_DESCRIPTION_LENGTH, evt.target.type);

        descriptionInputELment.setCustomValidity(error);
        descriptionInputELment.reportValidity();
    });
}
