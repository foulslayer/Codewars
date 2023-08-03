function solution(number) {
  let LN = []; //list of Numbers
  let sum = 0;
  let n = 1;
  if (number < 0) {
    return 0;
  }

  while (number > 3 * n) {
    LN.push(3 * n);
    n++;
  }

  n = 1;

  while (5 * n < number) {
    if (!LN.includes(5 * n)) {
      LN.push(5 * n);
    }
    n++;
  }
  console.log(LN);

  LN.forEach((element) => {
    sum += element;
  });
  console.log(sum);
  return sum;
}

solution(16);

//  if(number/3 = true)
