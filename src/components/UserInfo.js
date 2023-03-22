export default class UserInfo {
    constructor({ userNameSelector, userDescriptionSelector, userAvatarSelector }) {
        this._profileName = document.querySelector(userNameSelector);
        this._profileJob = document.querySelector(userDescriptionSelector);
        this._profileAvatar = document.querySelector(userAvatarSelector)
    }

    getUserInfo() {
        this._userData = {
            name: this._profileName.textContent.trim(),
            description: this._profileJob.textContent.trim()
        }
        return this._userData;
    }
    
    setUserInfo(data) {
        // Проверяем наличие
        this.setUserAvatar(data)
        if (data.name) {
            this._profileName.textContent = data.name;
        }
        if (data.about) {
            this._profileJob.textContent = data.about;
        }
    }

    setUserAvatar(data) {
        if (data.avatar) {
            this._profileAvatar.src = data.avatar;
        }
    }
}