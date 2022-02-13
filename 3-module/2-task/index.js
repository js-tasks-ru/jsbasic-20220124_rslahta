let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  // ваш код...
  return arr.filter((i) => i >= a && i <= b);
}

let filtered = filterRange(arr, 1, 4);
