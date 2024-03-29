export default class Section {
    constructor({renderer}, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    
    renderItems(array) {
        array.forEach((item) => {
            this._renderer(item);
        });
    }
    // Отрисовка элемента 
    addItem(element) {
        this._container.prepend(element);
    }
}