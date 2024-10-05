const modalElement = document.querySelector('.modal');
const modalOpenElement = document.querySelector('.open-btn');
const modalCloseElement = document.querySelector('.close-btn');

const openModal = () => {
    // добавляем класс к элементу
    modalElement.classList.add('modal--open');
    modalCloseElement.addEventListener('click', closeModal);
};

const closeModal = () => {
    // снимаем класс с элемента
    modalElement.classList.remove('modal--open');
    modalCloseElement.removeEventListener('click', closeModal);

}

const escapeCloseModal = () => {
    document.addEventListener('keydown', function (evt) {
        const key = evt.key;
        if (key === "Escape") {
            closeModal();
        }
    });
};

const overlayCloseModaL = () => {
    modalElement.addEventListener('click', (evt) => {
        if (evt.target === modalElement) {
            closeModal();
        }
    });
};

if (modalElement) {
    modalOpenElement.addEventListener('click', openModal);
    escapeCloseModal();
    overlayCloseModaL();
}

modalElement.addEventListener('click', (evt) => {
    if (evt.target === modalElement) {
        closeModal();
    }
});

