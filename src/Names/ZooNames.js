function randomAnimal(){
    const animals = [
        "Hippo",
        "Fish",
        "Doplhin",
        "Bird",
        "Crab",
        "Bat",
        "Dragon",
        "Otter",
        "Parrot",
        "Tiger",
        "Lion",
        "Whale",
        "Unicorn",
        "Turtle",
        "Bear",
        "Squirrel",
        "Squid",
        "Grizzly",
        "Spider",
        "Dog",
        "Giraffe",
        "Zebra",
        "Crocodile",
        "Horse",
        "Elephant",
        "Duck",
        "Owl",
        "Ant",
        "Dog",
        "Chimpanzee",
        "Octopus",
        "Raven",
        "Bee",
        "Rabbit",
        "Fish",
        "Dinosaur",
        "Bee",
        "Monkey",
        "Butterfly"
    ];
    const random = animals[Math.floor(Math.random() * animals.length)];
    return random;
}

function addRandomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }

export { randomAnimal, addRandomColor };