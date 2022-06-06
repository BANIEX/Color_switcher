let firstCircle = document.getElementsByClassName("circle1")[0];
let secondCircle = document.getElementsByClassName("circle2")[0];
let thirdCircle = document.getElementsByClassName("circle3")[0];
let fourthCircle = document.getElementsByClassName("circle4")[0];

firstCircle.addEventListener("click", function(){
    let colourOfFirstCircle = window.getComputedStyle(firstCircle).backgroundColor;
    document.body.style.backgroundColor = colourOfFirstCircle
    
})

secondCircle.addEventListener("click", function(){
    let colourOfSecondCircle = window.getComputedStyle(secondCircle).backgroundColor;
    document.body.style.backgroundColor = colourOfSecondCircle
    
})

thirdCircle.addEventListener("click", function(){
    let colourOfThirdCircle = window.getComputedStyle(thirdCircle).backgroundColor;
    document.body.style.backgroundColor = colourOfThirdCircle
    
})

fourthCircle.addEventListener("click", function(){
    let colourOfFourthCircle = window.getComputedStyle(fourthCircle).backgroundColor;
    document.body.style.backgroundColor = colourOfFourthCircle
    
})
