import {addMarkers} from "./marker";
import {generateAds} from "./data.js";
import {mapInit} from "./map";

const ADVERTISMENT_COUNT = 1;

const ads = generateAds(ADVERTISMENT_COUNT);
const map = mapInit();
addMarkers(ads, map);
