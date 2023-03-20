export default class Api {
    constructor(options) {
        this._headers = options.headers;
        this._url = options.url
    }

    // Проверяем ответ сервера 
    _checkErrors(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`error: ${res.status}`)
        }
    }
    // Получаем карточки с сервера
    getInitialCards() {
        return fetch(this._url + '/cards', {
            method: 'GET',
            headers: this._headers
        })
            .then(this._checkErrors)
    }
    // Получаем данные пользователя 
    getUserInfo() {
        return fetch(this._url + '/users/me', {
            method: 'GET', 
            headers: this._headers
        })
        .then(this._checkErrors)
    }
    
    getData(){
        return Promise.all([this.getInitialCards(), this.getUserInfo()]);
    }
}