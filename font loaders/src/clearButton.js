import * as style from './clearButton.scss';

const el = document.createElement("button");
el.innerHTML = 'clear';
el.classList.add(style.button);
el.onclick = function () {
    alert('clear clicked')
}
document.body.appendChild(el);