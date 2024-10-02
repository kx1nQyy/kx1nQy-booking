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

if (modalElement) {
    modalOpenElement.addEventListener('click', openModal);
}

modalElement.addEventListener('click', (evt) => {
    if (evt.target === modalElement) {
        closeModal();
    }
});

document.addEventListener('keydown', function(evt) {
    const key = evt.key;
    if (key === "Escape") {
        closeModal();
    }
});
