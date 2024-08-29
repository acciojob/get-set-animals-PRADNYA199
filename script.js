//complete this code
class Animal {
	constructor(species)
	{
		this.species=species;
	}
	get species(){
		this.species=species;
	}
	makeSound(){
		return sound the animal makes
	}
}

class Dog extends Animal {
	constructor(species){
		super (species);
	}
	bark(){
		return woof
	}
}

class Cat extends Animal {
	constructor(species){
		super (species);
	}
	purr(){
		return purr;
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
