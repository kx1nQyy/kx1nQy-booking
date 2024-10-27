const modalElement = document.querySelector('.modal');
const modalOpenElement = document.querySelector('.open-btn');
const modalCloseElement = document.querySelector('.close-btn');

const openModal = () => {
    // добавляем класс к элементу
    modalElement.classList.add('modal--open');

    // добавляем обработчики
    modalCloseElement.addEventListener('click', closeModal);
    modalElement.addEventListener('click', onOverlayClick);
    document.addEventListener('keydown', onModalEscKeydown)
};

const closeModal = () => {
    // снимаем класс с элемента
    modalElement.classList.remove('modal--open');

    // снимаем обработчики
    modalCloseElement.removeEventListener('click', closeModal);
    modalElement.removeEventListener('click', onOverlayClick);
    document.removeEventListener('keydown', onModalEscKeydown)
}

const onModalEscKeydown = (evt) => {
    if (evt.key === "Escape") {
        closeModal();
    }
};

const onOverlayClick = (evt) => {
    if (evt.target === modalElement) {
        closeModal();
    }
};

if (modalElement) {
    modalOpenElement.addEventListener('click', openModal);
}
