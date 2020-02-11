const zero = a => (a ? a(0) : 0);

const one = a => (a ? a(1) : 1);

const two = a => (a ? a(2) : 2);

const three = a => (a ? a(3) : 3);

const four = a => (a ? a(4) : 4);

const five = a => (a ? a(5) : 5);

const six = a => (a ? a(6) : 6);

const seven = a => (a ? a(7) : 7);

const eight = a => (a ? a(8) : 8);

const nine = a => (a ? a(9) : 9);

const plus = b => a => Math.floor(a + b);

const minus = b => a => Math.floor(a - b);

const times = b => a => Math.floor(a * b);

const dividedBy = b => a => Math.floor(a / b);

console.log(seven(times(five())), 'test 35');
console.log(four(plus(nine())), 'test 13');
console.log(eight(minus(three())), 'test 5');
console.log(six(dividedBy(two())), 'test 3');
