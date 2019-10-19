let shopCar: Array<number> = [1.234, 2.584, 3.451, 4.462];

let shopCarSum: number = shopCar.reduce((prev: number, curr: number): number => {
  return prev.toFixed(2) + curr.toFixed(2);
}, 0);


console.log(shopCarSum);