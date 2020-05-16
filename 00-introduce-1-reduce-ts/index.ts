let shopCar: Array<number> = [1.234, 2.584, 3.451, 4.462, 5.022222];

let shopCarSum: number = shopCar.reduce((prev: number, curr: number): number => {
  return (Number(prev.toFixed(2))) + (Number(curr.toFixed(2)));
}, 0);


console.log(shopCarSum);