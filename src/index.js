import style from "./css/index.scss"
import { sum } from "./sum";
import Icon from "./assets/img/proba.png"

let heading = document.querySelector("#demo"),
    sumValue = sum(167, 5);

heading.innerHTML = `Moje wyniko to: 15 + 5 = ${sumValue}`;

let myIcon = new Image();
myIcon.src = Icon;
document.querySelector("div").appendChild(myIcon);
document.querySelector("div").classList.add("change");