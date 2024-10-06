import {generateAds} from "./data.js";
import {renderAdCardList} from "./ad-card-list.js";
import "./ad-form.js";
import "./ad-card-list.js";
import "./modal.js";
import "./map.js";

const rootElement = document.getElementById('app');
const ADVERTISMENT_COUNT = 5;

const ads = generateAds(ADVERTISMENT_COUNT);


if (rootElement) {
    renderAdCardList(ads, rootElement);
}
