
//First Method

// let firstCircle = document.getElementsByClassName("circle1")[0];
// let secondCircle = document.getElementsByClassName("circle2")[0];
// let thirdCircle = document.getElementsByClassName("circle3")[0];
// let fourthCircle = document.getElementsByClassName("circle4")[0];

// firstCircle.addEventListener("click", function(){
//     let colourOfFirstCircle = window.getComputedStyle(firstCircle).backgroundColor;
//     document.body.style.backgroundColor = colourOfFirstCircle
    
// })

// secondCircle.addEventListener("click", function(){
//     let colourOfSecondCircle = window.getComputedStyle(secondCircle).backgroundColor;
//     document.body.style.backgroundColor = colourOfSecondCircle
    
// })

// thirdCircle.addEventListener("click", function(){
//     let colourOfThirdCircle = window.getComputedStyle(thirdCircle).backgroundColor;
//     document.body.style.backgroundColor = colourOfThirdCircle
    
// })

// fourthCircle.addEventListener("click", function(){
//     let colourOfFourthCircle = window.getComputedStyle(fourthCircle).backgroundColor;
//     document.body.style.backgroundColor = colourOfFourthCircle
    
// })


// Second Method
let circleLength = document.getElementsByClassName("circle").length
console.log(circleLength);
for(let i = 0;i < circleLength; i++){
    document.getElementsByClassName("circle")[i].addEventListener("click", function(){
        let circleObject = document.getElementsByClassName("circle")[i];
        let colourOfCircle = window.getComputedStyle(circleObject).backgroundColor;
        document.body.style.backgroundColor = colourOfCircle;
    })
}





// Third Method

// AllCircles = document.querySelectorAll('.circle');
// for(let i = 0; i < AllCircles.length; i++){
//     AllCircles[i].addEventListener("click", function(event){
//         console.log(event.target.classList)
//         classElement = document.querySelector(`.${event.target.classList[0]}.${event.target.classList[1]}`);

//         checkout = window.getComputedStyle(classElement);
//         console.log(checkout.backgroundColor)
//         document.body.style.backgroundColor = checkout.backgroundColor;
//     })
// }




