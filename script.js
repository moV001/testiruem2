function changeBackground(color) {
    document.body.style.backgroundColor = color;
    const backButton = document.createElement('button');
    backButton.classList.add('back-button');
    backButton.textContent = 'Назад';
    backButton.onclick = function() {
        document.body.style.backgroundColor = 'black'; // Изменено на черный цвет
        this.remove();
    };
    document.body.appendChild(backButton);
}