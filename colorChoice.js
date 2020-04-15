let left = document.getElementById('left');
let right = document.getElementById('right');
let central = document.getElementById('central');
let active = document.getElementById('active');
let rectangle = document.getElementById('rectangle');
let rectangle2 = document.getElementById('rectangle2');
let triangle1 = document.getElementById('triangle1');
let triangle2 = document.getElementById('triangle2');
let triangle3 = document.getElementById('triangle3');
let circle1 = document.getElementById('circle1');
let circle2 = document.getElementById('circle2');
let circle3 = document.getElementById('circle3');
let circleBig = document.getElementById('circlebig');
let background = document.getElementById('background');
let background2 = document.getElementById('background2');

var border=[active,rectangle, rectangle2, circle1, circle2, circle3, circleBig, background2];
var triangle=[triangle1, triangle2, triangle3];
var back =[central,background];

function setColor1() {
    left.addEventListener('click', centralColor => {
        centralColor = document.getElementById('central').style.backgroundColor;
        leftColor = document.getElementById('left').style.backgroundColor;

        left.style.backgroundColor = centralColor;

        back.forEach(element => {
            element.style.backgroundColor=leftColor;
        });
       
        triangle.forEach(element => {
            element.style.stroke=leftColor;
        });
        border.forEach(element => {
            element.style.borderColor=leftColor;
        });
    });
}

setColor1();

function setColor2() {
    right.addEventListener('click', centralColor => {
        centralColor = document.getElementById('central').style.backgroundColor;
        rightColor = document.getElementById('right').style.backgroundColor;
        right.style.backgroundColor = centralColor;
        central.style.backgroundColor = rightColor;
       

        back.forEach(element => {
            element.style.backgroundColor=rightColor;
        });
       
        triangle.forEach(element => {
            element.style.stroke=rightColor;
        });
        border.forEach(element => {
            element.style.borderColor=rightColor;
        });
    });
}

setColor2();
