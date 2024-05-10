// Constant - O(1)
const getFirst = (arr) => {
  return arr[1]; // O(1)
}


// Linear - O(n)
const findValue = (arr, value) => {
  for(let i = 0; i < arr.length; i++) { // O(n)
    if(arr[i] === value) { // O(1)
      return true; // O(1)
    }
  }

  // for(let i = 0; i < arr.length; i++) { // O(n)
  //   if(arr[i] === value) { // O(1)
  //     return true; // O(1)
  //   }
  // }

  return false; // O(1)
}


// Logarithmic - O(log n)
const binarySearch = (arr, target) => {
  let firstIndex = 0;
  let lastIndex = arr.length - 1;

  while(firstIndex <= lastIndex) {
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2);

    if(arr[middleIndex] === target) {
      return middleIndex;
    }

    if(arr[middleIndex] > target) {
      lastIndex = middleIndex - 1;
    } else {
      firstIndex = middleIndex + 1;
    }
  }

  return -1;
}

// Quadratic - O(n^2)
const matchElements = (arr) => {
  for(let i = 0; i < arr.length; i++) { // O(n)
    for(let j = 0; j < arr.length; j++) { // O(n)
      if(i !== j && arr[i] === arr[j]) {
        return `Match found at indexes ${i} and ${j}`;
      }
    }
  }
  return `No matches found`;
}


// Expotential - O(2^n)

const fibo = (num) => {
  if(num < 2) {
    return num;
  }

  return fibo(num - 1) + fibo(num - 2);
}



// Memoization

const fiboMemo = (num, memo = {}) => {
  if(memo[num]) { // O(1)
    return memo[num]; // O(1)
  }

  if(num < 2) { // O(1)
    return num; // O(1)
  }

  memo[num] = fiboMemo(num - 1, memo) + fiboMemo(num - 2, memo); // O(n)
  return memo[num]; // O(1)
}

console.log(fiboMemo(50));

