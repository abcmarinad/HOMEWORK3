document.addEventListener("DOMContentLoaded", function () {

    let box = document.querySelector(".clickbox");

    box.addEventListener("click", function() {
        if (box.style.backgroundColor === "lightsteelblue") {
            box.style.backgroundColor = "yellow";
            box.style.margin = '2vw';
            console.log("Цвет изменён на жёлтый");
        } else {
            box.style.backgroundColor = "lightsteelblue";
            box.style.margin = '1vw';
        }
    });

});











