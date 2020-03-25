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


// function addItself(a) {
// 	var num = a;
// 	function plus() {
// 		num += a;
// 	}
// 	plus();
// 	console.log(num);
// }
//
//
// addItself(30);

//
// var person = new Object();
//
// person.firstname = 'Jake';
//
// person.lastname = 'Leland';
//
// person.age = 22;
//
// console.log("My first name is " + person.firstname +"! My last name is " +person.lastname + " and I'm " +person.age +" years old!");
//
//
// const friend = {
// 	firstname: 'Joe',
// 	lastname: 'Smith',
// 	age: 23
// };
//
// console.log("My first name is " + friend['firstname'] +"! My last name is " +friend['lastname'] + " and I'm " +friend['age'] +" years old!");
//
//
// var car = {color: 'blue', wheels: 4, engine: {cylinders: 4, size: 2}, weight: '2 tons'};
//
// console.log(car['engine']['size']);
//
// function Person(first, last, age, eye) {
// 	this.firstName = first;
// 	this.lastName = last;
// 	this.age = age;
// 	this.eyeColor = eye;
//
// 	console.log(first, last, age, eye)
// }
//
// Person('jake','leland',22,'blue');
//
// class points {
// 	constructor(x, y) {
// 		this.x = x;
// 		this.y = y;
// 	}
//
// 	static subtract(a, b) {
// 		const c = a.x - b.x;
// 		const d = a.y - b.y;
//
// 		return  c + d;
// 	}
// }
//
// const p1 = new points(5, 5);
// const p2 = new points(5, 5);
//
// console.log(points.subtract(p1, p2));



// function doSomething() {}
// doSomething.prototype.firstname = "Jake";
// console.log(doSomething.prototype);


// var a = {b: function () {
// 		return this.x + this.y;
// 	}};
//
// var g = Object.create(a);
//
// g.x = 5;
// g.y = 10;
//
// console.log(g.b());

console.log(this === window);




