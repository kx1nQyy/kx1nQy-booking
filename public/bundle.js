/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHECK_INS: () => (/* binding */ CHECK_INS),
/* harmony export */   DESCRIPTIONS: () => (/* binding */ DESCRIPTIONS),
/* harmony export */   EVICTIONS: () => (/* binding */ EVICTIONS),
/* harmony export */   PRICE_VALUES: () => (/* binding */ PRICE_VALUES),
/* harmony export */   TITLES: () => (/* binding */ TITLES)
/* harmony export */ });
const TITLES = [
    'Уютное гнездышко для молодоженов',
    'Отличное место для отдыха всей семьей',
    'Симпатичная квартирка для одного',
    'Большая квартира-студия',
    'Скромная квартира на окраине города'
];

const PRICE_VALUES = [
    3000,
    2500,
    3500,
    4000,
    7000
];

const CHECK_INS = [
    '2024.07.20 14:00',
    '2024.04.24 14:00',
    '2024.02.10 14:00',
    '2024.09.12 14:00',
    '2024.12.01 14:00'
];

const EVICTIONS = [
    '2024.12.24 10:00',
    '2024.10.03 10:00',
    '2024.01.04 10:00',
    '2024.08.11 10:00',
    '2024.05.30 10:00'
];

const DESCRIPTIONS = [
    'description-1',
    'description-2',
    'description-3',
];




/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAds: () => (/* binding */ getAds)
/* harmony export */ });
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enum */ "./src/enum.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./src/const.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/util.js");






const MAX_ROOM_COUNT = 3;
const MAX_GUEST_COUNT = 7;

function getAd(count) {
    return {
        id: (0,_util__WEBPACK_IMPORTED_MODULE_2__.getRandomInt)(1, count),
        title: (0,_util__WEBPACK_IMPORTED_MODULE_2__.getRandomArrayElement)(_const__WEBPACK_IMPORTED_MODULE_1__.TITLES),
        price: {
            value: (0,_util__WEBPACK_IMPORTED_MODULE_2__.getRandomArrayElement)(_const__WEBPACK_IMPORTED_MODULE_1__.PRICE_VALUES),
            currency: (0,_util__WEBPACK_IMPORTED_MODULE_2__.getRandomEnumElement)(_enum__WEBPACK_IMPORTED_MODULE_0__.Currency)
        },
        type: (0,_util__WEBPACK_IMPORTED_MODULE_2__.getRandomEnumElement)(_enum__WEBPACK_IMPORTED_MODULE_0__.HouseType),
        capacity: {
            rooms: (0,_util__WEBPACK_IMPORTED_MODULE_2__.getRandomInt)(1, MAX_ROOM_COUNT),
            guests: (0,_util__WEBPACK_IMPORTED_MODULE_2__.getRandomInt)(1, MAX_GUEST_COUNT)
        },
        dateTime: {
            checkIn: (0,_util__WEBPACK_IMPORTED_MODULE_2__.getRandomArrayElement)(_const__WEBPACK_IMPORTED_MODULE_1__.CHECK_INS),
            eviction: (0,_util__WEBPACK_IMPORTED_MODULE_2__.getRandomArrayElement)(_const__WEBPACK_IMPORTED_MODULE_1__.EVICTIONS)
        },
        features: {
            wifi: (0,_util__WEBPACK_IMPORTED_MODULE_2__.getRandomBoolValue)(),
            dishwasher: (0,_util__WEBPACK_IMPORTED_MODULE_2__.getRandomBoolValue)(),
            parking: (0,_util__WEBPACK_IMPORTED_MODULE_2__.getRandomBoolValue)(),
            washer: (0,_util__WEBPACK_IMPORTED_MODULE_2__.getRandomBoolValue)(),
            elevator: (0,_util__WEBPACK_IMPORTED_MODULE_2__.getRandomBoolValue)(),
            conditioner: (0,_util__WEBPACK_IMPORTED_MODULE_2__.getRandomBoolValue)(),
        },
        description: (0,_util__WEBPACK_IMPORTED_MODULE_2__.getRandomArrayElement)(_const__WEBPACK_IMPORTED_MODULE_1__.DESCRIPTIONS),
        location: {
            latitude:  35.6895,
            longitude: 139.692
        },
        user: {
            id: 1,
            login: 'k1to',
            photo_path: 'user01.png',
        }
    };
}

function getAds(count) {
    const ads = [];

    for (let i = 0; i < count; i++) {
        ads.push(getAd());
    }

    return ads;
}




/***/ }),

/***/ "./src/enum.js":
/*!*********************!*\
  !*** ./src/enum.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Currency: () => (/* binding */ Currency),
/* harmony export */   HouseType: () => (/* binding */ HouseType)
/* harmony export */ });
const HouseType = {
    Flat:  {
        id: 1,
        value: {
            ru: 'Кввртира',
            en: 'flat'
        }
    },
    Bungalow:  {
        id: 2,
        value: {
            ru: 'Бунгало',
            en: 'bungalow'
        }
    },
    Hotel:  {
        id: 3,
        value: {
            ru: 'Отель',
            en: 'hotel'
        }
    },
    House:  {
        id: 4,
        value: {
            ru: 'Дом',
            en: 'house'
        }
    },
    Palace:  {
        id: 5,
        value: {
            ru: 'Дворец',
            en: 'palace'
        }
    },
};

const Currency = {
    Ruble: '&#8381;',
    Dollar: '&dollar;',
    Pound: '&pound;',
    Yen: '&yen;'
};




/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRandomArrayElement: () => (/* binding */ getRandomArrayElement),
/* harmony export */   getRandomBoolValue: () => (/* binding */ getRandomBoolValue),
/* harmony export */   getRandomEnumElement: () => (/* binding */ getRandomEnumElement),
/* harmony export */   getRandomInt: () => (/* binding */ getRandomInt)
/* harmony export */ });
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getRandomArrayElement(array) {
    return array[getRandomInt(0, array.length - 1)];
}

function getRandomEnumElement(object) {
    return getRandomArrayElement(Object.values(object));
}

function getRandomBoolValue() {
    return Boolean(getRandomInt(0, 1));
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");


const ADVERTISMENT_COUNT = 5;

const ads = (0,_data__WEBPACK_IMPORTED_MODULE_0__.getAds)(ADVERTISMENT_COUNT);

console.log(ads);

/******/ })()
;
//# sourceMappingURL=bundle.js.map