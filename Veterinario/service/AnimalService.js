import{Animal} from "../model/Animal.js";
export function getAnimals(){
    const animal1 = new Animal(1,"Bobolon","M",null,"DOG");
    const animal2 = new Animal(2,"Pluto","M",345,"DOG");
    const animal3 = new Animal(3,"Firulais","M",567,"CAT");
    const animal4 = new Animal(4,"Pumba","M",967,"DOG");
    const animal5 = new Animal(5,"Fabiconda","F",482,"SNAKE");
    const animal6 = new Animal(6,"Manunu","F",null,"CAT");
    const animal7 = new Animal(7,"Viktorina","F",583,"DOG");
    return[animal1,animal2,animal3,animal4,animal5,animal6,animal7];
}

export function getAnimal(idAnimal){
    const animals = getAnimals();
   
    return animals.find(function(ani){return ani.id === idAnimal;});
}

function getDogs(){
    const animals = getAnimals();

    return animals.filter(function(animal){return animal.type === "DOG";})
}