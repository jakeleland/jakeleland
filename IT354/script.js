// function number() {
// 	alert(typeof 42);
// }
//
// function string() {
// 	alert(typeof "hello");
// }
//
// function boolean() {
// 	alert(typeof true);
// }
//
// function undefinedf() {
// 	alert(typeof hello);
// }
//
// function functionName(a,b){
// 	console.log(a * b);
// }
//
// functionName(8, 8);
//
//
// var z = function(a,b) {
// 	console.log(a);
// 	console.log(b);
// };
//
// z("hello world", "IT354");
//
// const x = (a,b) => console.log(a + b);
//
// x(10, 73);


// function myfunction(a, b = 10) {
// 	console.log(a * b);
// }
//
// myfunction(5, 5);
//
//
// function functionName(a, ...moreParams) {
// 	console.log(a);
// 	console.log(moreParams[0]);
// }
//
// functionName("one", "two", "three","four");



function addItself(a) {
	var num = a;
	function plus() {
		num += a;
	}
	plus();
	console.log(num);
}


addItself(30);
