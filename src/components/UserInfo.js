export default class UserInfo {
    constructor({ userNameSelector, userDescriptionSelector }) {
        this._profileName = document.querySelector(userNameSelector);
        this._profileJob = document.querySelector(userDescriptionSelector);
    }
    getUserInfo() {
        this._userData = {
            name: this._profileName.textContent.trim(),
            description: this._profileJob.textContent.trim()
        }
        return this._userData;
    }
    setUserInfo(profileNameInput, profileJobInput) {
        this._profileName.textContent = profileNameInput.value;
        this._profileJob.textContent = profileJobInput.value;
    }
}