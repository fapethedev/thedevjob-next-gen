import {Bebas_Neue, Exo_2, Orbitron} from "next/font/google";

const orbitron = Orbitron({
    style: ["normal"],
    weight: ["400", "500", "600", "700", "800", "900"]
});

const exo2 = Exo_2({
    style: ["normal", "italic"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const bebasNeue = Bebas_Neue({
    style: ["normal"],
    weight: ["400"]
});

export {orbitron, exo2, bebasNeue};