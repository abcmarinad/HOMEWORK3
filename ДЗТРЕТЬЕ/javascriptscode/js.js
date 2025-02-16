let box = document.querySelectorAll(".clickbox");

box.forEach(function(clickbox){
    clickbox.addEventListener("click", function(){
        if(clickbox.style.backgroundColor === "lightsteelblue"){
            clickbox.style.backgroundColor = "yellow";
            clickbox.classList.add('yellow'); // Добавляем класс .yellow
            console.log("change color");
        }
        else{
            clickbox.style.backgroundColor = "lightsteelblue";
            clickbox.classList.remove('yellow'); // Удаляем класс .yellow
        }
    });
});







