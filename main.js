const mainTitleValue = document.querySelector(".main-title-value");
const input = document.querySelector(".input");
// const clearLastBtn = document.querySelector(".clear-last");
const clearAllBtn = document.querySelector(".clear-all");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

var GPA = 0;

function GetValue(){
    let inputValue = input.value;
    let listNumbers = [inputValue];

    listNumbers = ('' + inputValue).split('');

    let result = listNumbers.map(function (x) {
        return parseInt(x, 10);
    });

    let sum = 0;

    result.forEach(element => {
        sum += element;

        GPA = sum / listNumbers.length; 

        mainTitleValue.innerHTML = GPA.toFixed(2);
    });

    // function ClearLast() {
    //     notLast = listNumbers.slice(0, -1);

    //     input.value = notLast;
    // };

    // clearLastBtn.addEventListener("click", ClearLast);
    if(GPA === 1.50 && GPA === 2.50 && GPA === 3.50 && GPA === 4.50){
        mainTitleValue.style.color = "#c9c9c9";
    }
    if(1.00 <= GPA && GPA < 1.50){
        mainTitleValue.style.color = "#670303";
    }
    if(1.50 < GPA && GPA < 2.50){
        mainTitleValue.style.color = "#b10505";
    }
    if(2.50 < GPA && GPA < 3.50){
        mainTitleValue.style.color = "#ca9904";
    }
    if(3.50 < GPA && GPA < 4.50){
        mainTitleValue.style.color = "#63bf06";
    }
    if(4.50 < GPA && GPA <= 5.00){
        mainTitleValue.style.color = "#8708f6";
    }

    console.log(GPA)
}

one.addEventListener("click", () => {
    input.innerHTML += 1;
    input.value += 1;

    GetValue();
})

two.addEventListener("click", () => {
    input.innerHTML += 2;
    input.value += 2;

    GetValue();
})

three.addEventListener("click", () => {
    input.innerHTML += 3;
    input.value += 3;

    GetValue();
})

four.addEventListener("click", () => {
    input.innerHTML += 4;
    input.value += 4;

    GetValue();
})

five.addEventListener("click", () => {
    input.innerHTML += 5;
    input.value += 5;

    GetValue();
})

function ClearAll() {
    input.value = "";
    mainTitleValue.innerHTML = "n/a";
    mainTitleValue.style.color = "#c9c9c9";
}

input.addEventListener("input", GetValue);
clearAllBtn.addEventListener("click", ClearAll);
