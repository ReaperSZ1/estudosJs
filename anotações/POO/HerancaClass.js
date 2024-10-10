// Classe base (superclasse)
class Animal { // classe base / pai
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} is making a sound.`);
    }

    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
}

// Classe derivada (subclasse)
class Dog extends Animal { // extends == filho de ou vem de
    constructor(name, breed) {
        super(name); // Chama o construtor da classe base
        this.breed = breed;
    }

    makeSound() {
        console.log(`${this.name} is barking.`);
        // polimorfismo: quando doisn metodos possuem mesmo nome podemos usar o super para referenciar o metodo anterior
        super.makeSound() // pegando o metodo de Animal na linha 7 // Rex is making a sound.
    }

    fetch() {
        console.log(`${this.name} is fetching a ball.`);
    }
}

// Outra subclasse
class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    makeSound() {
        console.log(`${this.name} is meowing.`);
    }

    climb() {
        console.log(`${this.name} is climbing a tree.`);
    }
}

// Subclasse derivada de outra subclasse
class Puppy extends Dog {
    constructor(name, breed, age) {
        super(name, breed);
        this.age = age;
    }

    play() {
        console.log(`${this.name}, the ${this.breed} puppy, is playing.`);
    }
}

// Utilização das classes
const genericAnimal = new Animal('Generic Animal');
genericAnimal.makeSound(); // deriva da propria classe Animal
genericAnimal.sleep(); // deriva da propria classe Animal

const dog = new Dog('Rex', 'German Shepherd');
dog.makeSound(); // deriva da propria classe Dog
dog.fetch(); // deriva da propria classe Dog
dog.sleep(); // deriva da classe pai Animal

const cat = new Cat('Whiskers', 'Tabby');
cat.makeSound(); // deriva da propria classe Dog
cat.climb(); // deriva da propria classe cat
cat.sleep(); // deriva da classe pai Animal

const puppy = new Puppy('Buddy', 'Golden Retriever', 1);
puppy.makeSound(); // deriva da classe pai a Dog
puppy.fetch(); // deriva da classe pai a Dog
puppy.play(); // deriva da propria classe cat
puppy.sleep(); // deriva da classe avô Animal