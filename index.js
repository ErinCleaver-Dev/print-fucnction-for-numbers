const printNumbers = (num) => {
  let numbers = "";
  if(n < 1 && num > 150) {
    return "Not within a given range"
  } else {
    for(let i = 1; i <= num; i++) {
      numbers+=i;
    }
  }
  return numbers;
}

console.log(printNumbers(5))