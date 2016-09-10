[1, 2, 3, ...[4, 5, 6]] // [1, 2, 3, 4, 5, 6]

var a = [1, 2];
var b = [3, 4];
var c = [...a, ...b, 5]; // [1, 2, 3, 4, 5]

[1, ...[2, [3]], 4] // [1, 2, [3], 4]

[...'hello'] // ["h", "e", "l", "l", "o"]

var a = [1, 2, 3];
console.log(5, 7, ...a); // 5 7 1 2 3

const sum = (x, ...xs) => xs.length ? x + sum(...xs) : x;
sum(1, 2, 3, 4, 5); // 15


Object.assign({ x: 1 }, { f: 1}) // { x: 1, f: 1}