import _ from "lodash";
import * as style from './index.css';
import './clearButton';
import logoImage from './assets/webpack-logo.png';
// import "./assets/fonts/Redressed-Regular.ttf";

const btn1 = document.getElementById("button1");
const logoEl = document.getElementById("logo");

btn1.addEventListener("click", function() {
    const el = document.getElementById('header');
    el.innerHTML = "you clicked the button!";
    el.classList.add(style.header);

    const listItems = ["apple", "orange", "banana"];
    const ul = document.getElementById("shoppingList");
    _.forEach(listItems, function(item){
        const tempEl = document.createElement("li");
        tempEl.innerHTML = item;
        ul.appendChild(tempEl);
    })
});

btn1.classList.add(style.button);
logoEl.src = logoImage;