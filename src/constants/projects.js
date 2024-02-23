import { v4 } from "uuid";

const Contracultura = {
    id: v4(),
    title: "Contracultura",
    live: "http://contracultura.eu/",
    code: "https://github.com/danielveg4/contracultura",
    image: "public/assets/images/insure1.png",
    image2: "public/assets/images/insure2.png",
    image3: "public/assets/images/insure3.png",
    image4: "public/assets/images/insure4.png",
    active: true
};

const Easybank = {
    id: v4(),
    title: "Easybank",
    live: "https://danielveg4.github.io/clipboard_landing_page/",
    code: "https://github.com/danielveg4/clipboard_landing_page",
    image: "public/assets/images/easy1.png",
    image2: "public/assets/images/easy2.png",
    image3: "public/assets/images/easy3.png",
    image4: "public/assets/images/easy4.png",
    active: false
};

const Reshipi = {
    id: v4(),
    title: "Reshipi",
    live: "https://danielveg4.github.io/clipboard_landing_page/",
    code: "https://github.com/danielveg4/clipboard_landing_page",
    image: "public/assets/images/reshipi.jpg",
    active: false
};

const SpaceTourism = {
    id: v4(),
    title: "Space Tourism",
    live: "https://danielveg4.github.io/clipboard_landing_page/",
    code: "https://github.com/danielveg4/clipboard_landing_page",
    image: "public/assets/images/insure1.png",
    active: false
};

export const PROJECTS = [Contracultura, Easybank, Reshipi, SpaceTourism];