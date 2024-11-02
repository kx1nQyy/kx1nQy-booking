import {POINTS} from "./const.js";
import {addMarkers} from "./marker.js";
import {generateAds} from "./data.js";
import {mapInit} from "./map.js";
import './ad-form.js';

const ads = generateAds(POINTS.khv);
const map = mapInit();
addMarkers(ads, map);
