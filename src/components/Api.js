export default class Api {
    constructor(options) {
        this._headers = options.headers;
        this._url = options.url
    }

    _checkErrors(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`error: ${res.status}`)
        }
    }

    getInitialCards() {
        return fetch(this._url + '/cards', {
            method: 'GET',
            headers: this._headers
        })
            .then(this._checkErrors)
    }

    getUserInfo() {
        return fetch(this._url + '/users/me', {
            method: 'GET',
            headers: this._headers
        })
            .then(this._checkErrors)
    }

    setLike(id) {
        return fetch(this._url + `/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._headers
        }).then(this._checkErrors);
    }

    deleteLike(id) {
        return fetch(this._url + `/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._headers
        }).then(this._checkErrors)
    }

    addCard(data) {
        return fetch(this._url + '/cards', {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        }).then(this._checkErrors)
    }

    deleteCard(cardId) {
        return fetch(this._url + `/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        }).then(this._checkErrors)
    }

    setUserInfoByAPI(data) {
        return fetch(this._url + '/users/me', {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.description
            })
        })
            .then(this._checkErrors)
    }

    setUserAvatarByAPI(data) {
        return fetch(this._url + '/users/me/avatar', {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        }).then(this._checkErrors);
    }

    getData() {
        return Promise.all([this.getInitialCards(), this.getUserInfo()])
    }
}