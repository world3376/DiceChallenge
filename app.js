// 테스트
// alert('테스트');
var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');
var hi = document.querySelector('hi');


img1.setAttribute('src', 'images/dice6.png');
img2.setAttribute('src', 'images/dice6.png');

var num1 = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;

console.log('넘1은:', num1);
console.log('넘2은:', num2);

img1.setAttribute('src', 'images/dice' + num1 + '.png');
img2.setAttribute('src', 'images/dice' + num2 + '.png');

if (num1 > num2) {
    h1.textContent = "player 1 win";
}
else if (num1 < num2) {
    h1.textContent = "player 2 win";
}
else {
    h1.textContent = "Draw!";
}





