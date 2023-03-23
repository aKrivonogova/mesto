(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t,n,r){var o=t.data,i=t.handleCardClick,u=t.handleLikeClick,a=t.handleCardDelete;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._handleLikeClick=u,this._handleCardClick=i,this._handleCardDelete=a,this._id=o._id,this._userId=r,this._ownerId=o.owner._id,this._likes=o.likes,this._name=o.name,this._link=o.link,this._cardTemplate=document.getElementById(n)}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){this._cardElement=this._cardTemplate.content.querySelector(".element").cloneNode(!0)}},{key:"updateLikesCount",value:function(e){this._likes=e,this.setLikeCount(e.length)}},{key:"setLikeCount",value:function(e){this._elementLikeCount.textContent=e,this._toggleLike()}},{key:"likedByUser",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}},{key:"_toggleLike",value:function(){this.likedByUser()?this._elementLike.classList.add("element__like_active"):this._elementLike.classList.remove("element__like_active")}},{key:"removeCard",value:function(){this._cardElement.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._elementImage.addEventListener("click",(function(){e._handleCardClick({name:e._name,link:e._link})})),this._elementLike.addEventListener("click",(function(){e._handleLikeClick()})),this._elementDelete.addEventListener("click",(function(){e._handleCardDelete()}))}},{key:"generateCard",value:function(){var e=this;return this._getTemplate(),this._elementImage=this._cardElement.querySelector(".element__image"),this._elementLike=this._cardElement.querySelector(".element__like"),this._elementDelete=this._cardElement.querySelector(".element__delete"),this._elementName=this._cardElement.querySelector(".element__name"),this._elementLikeCount=this._cardElement.querySelector(".element__like-count"),this._ownerId!==this._userId&&(this._elementDelete.style.display="none"),this._likes.find((function(t){return e._userId===t._id}))&&this._elementLike.classList.add("element__like_active"),this._elementLikeCount.textContent=this._likes.length,this._elementName.textContent=this._name,this._elementImage.src=this._link,this._elementImage.alt=this._name,this._setEventListeners(),this._cardElement}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.classList.add(this._errorClass),n.textContent=t}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));t.textContent="",t.classList.remove(this._errorClass),e.classList.remove(this._inputErrorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_disabledButton",value:function(){this._buttonElement.disabled=!0}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this._disabledButton():this._buttonElement.disabled=!1}},{key:"setInitialState",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t),e._toggleButtonState()}))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){var e=this;this._setEventListeners(),this._formElement.addEventListener("submit",(function(){e._disabledButton()}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=t,this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClick=this._handleOverlayClick.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClick",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.querySelector(".popup__close-button").addEventListener("click",(function(){e.close()}))}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose),this._popupElement.addEventListener("mousedown",this._handleOverlayClick)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose),this._popupElement.removeEventListener("mousedown",this._handleOverlayClick)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e)).popupImage=t._popupElement.querySelector(".popup__image"),t.popupImageDescription=t._popupElement.querySelector(".popup__image-description"),t}return t=u,(n=[{key:"open",value:function(e){f(y(u.prototype),"open",this).call(this),this.popupImage.src=e.link,this.popupImage.alt=e.name,this.popupImageDescription.textContent=e.name}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(l);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}var v=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._form=n._popupElement.querySelector(".form"),n._submitCallBack=t,n._inputList=n._form.querySelectorAll(".form__input"),n._popupButton=n._form.querySelector(".form__submit-button"),n._popupButtonTextContent=n._popupButton.textContent,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputList.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;S(k(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitCallBack(e._getInputValues())}))}},{key:"close",value:function(){S(k(u.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){e?(this._popupButton.textContent="Сохранение...",this._popupButton.disabled=!1):(this._popupButton.textContent=this._popupButtonTextContent,this._popupButton.disabled=!0)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(l);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==w(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}var O=function(){function e(t){var n=t.userNameSelector,r=t.userDescriptionSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(n),this._profileJob=document.querySelector(r),this._profileAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userData={name:this._profileName.textContent.trim(),description:this._profileJob.textContent.trim()},this._userData}},{key:"setUserInfo",value:function(e){this.setUserAvatar(e),e.name&&(this._profileName.textContent=e.name),e.about&&(this._profileJob.textContent=e.about)}},{key:"setUserAvatar",value:function(e){e.avatar&&(this._profileAvatar.src=e.avatar)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==L(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=t.headers,this._url=t.url}var t,n;return t=e,(n=[{key:"_checkErrors",value:function(e){return e.ok?e.json():Promise.reject("error: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch(this._url+"/cards",{method:"GET",headers:this._headers}).then(this._checkErrors)}},{key:"getUserInfo",value:function(){return fetch(this._url+"/users/me",{method:"GET",headers:this._headers}).then(this._checkErrors)}},{key:"setLike",value:function(e){return fetch(this._url+"/cards/".concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkErrors)}},{key:"deleteLike",value:function(e){return fetch(this._url+"/cards/".concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkErrors)}},{key:"addCard",value:function(e){return fetch(this._url+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkErrors)}},{key:"deleteCard",value:function(e){return fetch(this._url+"/cards/".concat(e),{method:"DELETE",headers:this._headers}).then(this._checkErrors)}},{key:"setUserInfoByAPI",value:function(e){return fetch(this._url+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.description})}).then(this._checkErrors)}},{key:"setUserAvatarByAPI",value:function(e){return fetch(this._url+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkErrors)}},{key:"getData",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==I(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var x,A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._form=t._popupElement.querySelector(".form"),t._popupButton=t._form.querySelector(".form__submit-button"),t._popupButtonTextContent=t._popupButton.textContent,t}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;B(R(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitConfirm()}))}},{key:"setSubmitAction",value:function(e){this._handleSubmitConfirm=e}},{key:"renderLoading",value:function(e){this._popupButton.textContent=e?"Сохранение...":this._popupButtonTextContent}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(l),D=document.querySelector(".popup_function_image"),U=document.querySelector(".popup_function_avatar-edit"),N=document.querySelector(".popup_function_add"),V=document.querySelector(".popup_function_edit"),J=document.querySelector(".popup_function_delete"),G=document.querySelector(".form_function_edit"),H=document.querySelector(".form_function_edit-avatar"),M=G.querySelector('input[name="name"]'),z=G.querySelector('input[name="description"]'),$=document.querySelector(".form_function_add"),F=document.querySelector(".profile__edit-button"),K=document.querySelector(".profile__add-button"),Q=document.querySelector(".profile__avatar-edit-button"),W="mesto",X={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit-button",inputErrorClass:"form__input_type-error",errorClass:"form__input-error_active"};function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Z=new P({url:"https://mesto.nomoreparties.co/v1/cohort-61",headers:{authorization:"bfd84cb4-18b1-46f8-b826-36dbd379cdad","Content-Type":"application/json"}}),ee=new i(X,$);ee.enableValidation(),new i(X,G).enableValidation();var te=new i(X,H);te.enableValidation();var ne=new O({userNameSelector:".profile__name",userDescriptionSelector:".profile__description",userAvatarSelector:".profile__avatar"}),re=new E(V,(function(e){re.renderLoading(!0),Z.setUserInfoByAPI(e).then((function(e){re.close(),ne.setUserInfo(e)})).catch((function(e){return console.log(e)})).finally((function(){return re.renderLoading(!1)}))}));re.setEventListeners(),F.addEventListener("click",(function(){var e=ne.getUserInfo();M.value=e.name,z.value=e.description,re.open()}));var oe=new E(U,(function(e){oe.renderLoading(!0),Z.setUserAvatarByAPI(e).then((function(e){oe.close(),ne.setUserAvatar(e)})).catch((function(e){return console.log(e)})).finally((function(){return oe.renderLoading(!1)}))}));oe.setEventListeners(),Q.addEventListener("click",(function(){te.setInitialState(),oe.open()}));var ie=new A(J);ie.setEventListeners();var ue=new h(D);function ae(e){ue.open(e)}ue.setEventListeners();var le=new E(N,(function(e){le.renderLoading(!0),Z.addCard(e).then((function(e){var t=ce(e);se.addItem(t),le.close()})).catch((function(e){return console.log(e)})).finally((function(){return le.renderLoading(!1)}))}));function ce(e){var t=new n({data:e,handleCardClick:ae,handleLikeClick:function(){!function(e,t){t.likedByUser()?Z.deleteLike(t._id).then((function(e){t.updateLikesCount(e.likes)})).catch((function(e){console.log(e)})):Z.setLike(t._id).then((function(e){t.updateLikesCount(e.likes)})).catch((function(e){console.log(e)}))}(0,t)},handleCardDelete:function(){!function(e,t){ie.open(),ie.setSubmitAction((function(){ie.renderLoading(!0),Z.deleteCard(e._id).then((function(){t.removeCard(),ie.close()})).catch((function(e){return console.log(e)})).finally((function(){return ie.renderLoading(!1)}))}))}(e,t)}},W,x);return t.generateCard()}le.setEventListeners(),K.addEventListener("click",(function(){ee.setInitialState(),le.open()}));var se=new v({renderer:function(e){var t=ce(e);se.addItem(t)}},".elements__list");Z.getData().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ne.setUserInfo(i),x=i._id,i&&ne.setUserInfo(i),se.renderItems(o)})).catch((function(e){console.log(e)}))})();