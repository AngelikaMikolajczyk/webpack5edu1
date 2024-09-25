import _ from "lodash";

document.getElementById("button1").addEventListener("click", function() {
    const el = document.getElementById('header');
    el.innerHTML = "you clicked the button!"

    const listItems = ["apple", "orange", "banana"];
    const ul = document.getElementById("shoppingList");
    _.forEach(listItems, function(item){
        const tempEl = document.createElement("li");
        tempEl.innerHTML = item;
        ul.appendChild(tempEl);
    })
})