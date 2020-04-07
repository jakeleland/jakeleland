export default class Cat {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

export function printName(cat) {
	console.log(`Cat's name is ${cat.name}`)
}

export function printAge(cat) {
	console.log(`Cat's age is ${cat.age}`)
}
