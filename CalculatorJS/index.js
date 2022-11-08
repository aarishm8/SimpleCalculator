
let display = document.querySelector("#input")
let btns = document.querySelectorAll(".btn")
let clear = document.querySelector(".red")
let equal = document.querySelector(".green")

btns.forEach(function(btn){
    btn.addEventListener('click', (e) => {
        let user_typed = e.target.dataset.num;
        display.value += user_typed;
    })
});

equal.addEventListener("click", (e) => {
    if(display.value == ""){
        confirm("Put a Number to calculate")
    }
    else{
        let answer = eval(display.value);
        display.value = answer;
    }
})

clear.addEventListener("click", (e) => {
    display.value = "";
})
