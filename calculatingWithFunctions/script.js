function zero(a) {
	return a ? a(0) : 0;
}
function one(a) {
	return a ? a(1) : 1;
}
function two(a) {
	return a ? a(2) : 2;
}
function three(a) {
	return a ? a(3) : 3;
}
function four(a) {
	return a ? a(4) : 4;
}
function five(a) {
	return a ? a(5) : 5;
}
function six(a) {
	return a ? a(6) : 6;
}
function seven(a) {
	return a ? a(7) : 7;
}
function eight(a) {
	return a ? a(8) : 8;
}
function nine(a) {
	return a ? a(9) : 9;
}

function plus(b) {
	return function(a) {
		return Math.floor(a + b);
	};
}
function minus(b) {
	return function(a) {
		return Math.floor(a - b);
	};
}
function times(b) {
	return function(a) {
		return Math.floor(a * b);
	};
}
function dividedBy(b) {
	return function(a) {
		return Math.floor(a / b);
	};
}

console.log(seven(times(five())), 'test 35');
console.log(four(plus(nine())), 'test 13');
console.log(eight(minus(three())), 'test 5');
console.log(six(dividedBy(two())), 'test 3');
