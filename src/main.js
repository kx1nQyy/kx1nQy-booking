import {generateAds} from "./data.js";
import {renderAdCardList} from "./ad-card-list.js";
import "./ad-form.js";
import "./ad-card-list.js";
import "./modal.js";

const rootElement = document.getElementById('app');
const ADVERTISMENT_COUNT = 5;

const ads = generateAds(ADVERTISMENT_COUNT);
// console.log(ads);

if (rootElement) {
    renderAdCardList(ads, rootElement);
}
