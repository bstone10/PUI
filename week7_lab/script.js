function Panda(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Panda";
  this.image = "panda.png";
}

function Cat(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Cat";
  this.image = "cat.png";
}

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Dog";
  this.image = "dog.png";
}

var animals = [new Panda(), new Cat(), new Dog()];

var names = ['abc', 'bcd', 'cde', 'def', 'efg', 'fgh', 'ghi', 'hij', 'ijk']

function generateRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
    var randomIndex = generateRandomIndex(names.length);
    return names[randomIndex];
}

function generateRandomAge() {
    return generateRandomIndex(10);
}

function generateRandomAnimal() {
    var randomIndex = generateRandomIndex(animals.length);
    var randomAnimal = animals[randomIndex];
    if (randomAnimal instanceof Panda) {
        return new Panda(generateRandomName(), generateRandomAge());
    } 
    if (randomAnimal instanceof Cat) {
        return new Cat(generateRandomName(), generateRandomAge());
    } 
    if (randomAnimal instanceof Dog) {
        return new Dog(generateRandomName(), generateRandomAge());
    } 
}

$(document).ready(function() {
  var animal = generateRandomAnimal();
  $("#animal-name").text("Hi, my name is " + animal.name + "!");
  $('#animal-age').text("I am " + animal.age + ' years old');
  $("#animal-img").attr("src", animal.image);
});













