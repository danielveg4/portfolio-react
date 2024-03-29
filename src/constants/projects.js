import { v4 } from "uuid";

const Contracultura = {
    id: v4(),
    title: "Contracultura",
    live: "http://contracultura.eu/",
    code: "https://github.com/danielveg4/contracultura",
    image: "assets/images/insure1.png",
    image2: "assets/images/insure2.png",
    image3: "assets/images/insure3.png",
    image4: "assets/images/insure4.png",
    active: true
};

const Reshipi = {
    id: v4(),
    title: "Reshipi",
    live: "https://danielveg4.github.io/reshipi/",
    code: "https://github.com/danielveg4/recetas-cocina-reshipi",
    image: "assets/images/reshipi.jpg",
    image2: "assets/images/reshipi2.png",
    image3: "assets/images/reshipi3.png",
    image4: "assets/images/reshipi4.png",
    active: false
};

const SpaceTourism = {
    id: v4(),
    title: "Space Tourism",
    live: "https://danielveg4.github.io/spacetourism/",
    code: "https://github.com/danielveg4/space-tourism-react",
    image: "assets/images/clip1.png",
    image2: "assets/images/clip2.png",
    image3: "assets/images/clip3.png",
    image4: "assets/images/clip4.png",
    active: false
};

const RestApiCountries = {
    id: v4(),
    title: "Rest API Countries",
    live: "https://danielveg4.github.io/rest-countries/",
    code: "https://github.com/danielveg4/rest-countries-api-with-color-theme-switcher",
    image: "assets/images/easy1.png",
    image2: "assets/images/easy2.png",
    image3: "assets/images/easy3.png",
    image4: "assets/images/easy4.png",
    active: false
};

export const PROJECTS = [Contracultura, RestApiCountries, Reshipi, SpaceTourism];