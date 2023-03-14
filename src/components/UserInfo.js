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
    setUserInfo(profileName, profileJob) {
        this._profileName.textContent = profileName;
        this._profileJob.textContent = profileJob;
    }
}