import {OPENSTREATMAP_COPYRIGHT, CITIES} from "./const";

const MAP_ELEMENT_ID = 'map-canvas';
const SCALE_LEVEL = 16;

const mapInit = () => {
    const map = L.map(MAP_ELEMENT_ID)
        .setView(
            CITIES.khv,
            SCALE_LEVEL
        );

    L.tileLayer(
        'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            attribution: OPENSTREATMAP_COPYRIGHT
        }
    ).addTo(map);

    return map;
}

export {mapInit}
