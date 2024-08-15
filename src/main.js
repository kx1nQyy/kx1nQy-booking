import {generateAds} from "./data";
import "./ad-form.js";
import "./ad-card-list";

const ADVERTISMENT_COUNT = 20;

const ads = generateAds(ADVERTISMENT_COUNT);

console.log(ads);
