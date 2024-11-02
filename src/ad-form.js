const adFormElement = document.querySelector('.ad-form');
const titleInputELment = adFormElement.querySelector('#title');
const priceInputELment = adFormElement.querySelector('#price');
const descriptionInputELment = adFormElement.querySelector('#description');

const MAX_PRICE_VALUE = 10000;
const MIN_PRICE_VALUE = 1;
const MAX_TITLE_LENGTH = 15;
const MAX_DESCRIPTION_LENGTH = 100;
const MIN_DESCRIPTION_LENGTH = 10;

if (priceInputELment) {
    priceInputELment.addEventListener('input', () => {
        const valuePrice = priceInputELment.value;

        let error = '';
        if (valuePrice > MAX_PRICE_VALUE) {
            error = `${MAX_PRICE_VALUE}р. максимаьная стоимость.`;
        }
        else if (valuePrice < MIN_PRICE_VALUE) {
            error = `${MIN_PRICE_VALUE}р. минимальная стоимость.`;
        }

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
    descriptionInputELment.addEventListener('input', () => {
        const valueLength = descriptionInputELment.value.length;

        let error = '';
        if (valueLength > MAX_DESCRIPTION_LENGTH) {
            error = `Удалите лишние ${valueLength - MAX_DESCRIPTION_LENGTH} симв.`;
        }
        else if (valueLength < MIN_DESCRIPTION_LENGTH) {
            error = `${MIN_DESCRIPTION_LENGTH} минимальное число символов для описания.`
        }


        console.log(descriptionInputELment.setCustomValidity(error))
        descriptionInputELment.setCustomValidity(error);
        descriptionInputELment.reportValidity();
    });
}
