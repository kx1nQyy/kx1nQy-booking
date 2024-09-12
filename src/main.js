import {generateAds} from "./data";
import "./ad-form.js";
import "./ad-card-list";
import {renderAdCardList} from "./ad-card-list";

const rootElement = document.getElementById('app');
const ADVERTISMENT_COUNT = 5;

const ads = generateAds(ADVERTISMENT_COUNT);
// console.log(ads);

if (rootElement) {
    renderAdCardList(ads, rootElement);
}
