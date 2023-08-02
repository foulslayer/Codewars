let sum = 0;

function maps(x) {
  const newArr = x.flatMap((I) => I * 2);
  console.log(newArr);
}

maps([1, 2, 3]);

/*

I misunderstood the problem's requirements.
The original task was to create a function maps
that takes an array x and returns a new array where each element is doubled.
 However, my current implementation using flatMap
is doubling each individual element in the array x, which is not the desired behavior.

how it should been done 

function maps(x) {
  const newArr = x.map((item) => item * 2);
  return newArr;
}

console.log(maps([1, 2, 3])); // Output: [2, 4, 6]



*/
