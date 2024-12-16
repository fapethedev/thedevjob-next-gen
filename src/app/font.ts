import {Bebas_Neue, Exo_2, Orbitron} from "next/font/google";

const orbitron = Orbitron({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    preload: false
});

const exo2 = Exo_2({
    style: ["normal", "italic"],
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    preload: false
});

const bebasNeue = Bebas_Neue({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400"],
    preload: false
});

export {orbitron, exo2, bebasNeue};