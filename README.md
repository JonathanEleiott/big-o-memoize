# Big O Notation and Memoize

## Big O Notation (worst-case scenario)

- Time complexity
  - amount of OPERATIONS based on the input size, NOT seconds
- Space Complexity
  - amount of memory used based on input size

## Constant - O(1) -> Excellent/Best

- always has to have the same amount of operations no matter the input size
- returning the first item in an array

## Linear Time - O(n) -> Fair

- amount of operations scales linearly with the size of the input
- looping through an array

## Logarithmic - O(log n) -> Excellent

- when the input size decrease on each operation
- finding a value in a sorted array

## Quadratic Time - O(n^2) - Horrible

- amount of operations runs n^2 times
- nested for loop

## Exponential Time - O(2^n) - Horrible

- amount of operations doubles with every additional element
- Fibonacci sequence (improved with memoization)

## Memoization

- storing of values already found
- 