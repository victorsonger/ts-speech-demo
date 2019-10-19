add(1, 2);
add(3, 4);

let number1 = document.getElementsByName('number1')[0] as HTMLInputElement;
let number2 = document.getElementsByName('number2')[0] as HTMLInputElement;
number1.onkeyup = number2.onkeyup = function() {
  console.log(add(Number(number1.value), Number(number2.value)));
};

add(4, 5);
