const linearListPets = (petsArray, separater) => {
    let str = "";
    petsArray.forEach((pet) => {
        str += pet.petName + " the " + pet.breed + separater;
    });
    console.log(str);
}
// List the pets by name
console.log("Added Carmie to front, Copper to end");
linearListPets(petsData, " | ");

// Change the first pet's name
petsData[0].petName = "Queen Stella";

// Check
console.log("Changed Stella to Queen Stella");
linearListPets(petsData, " ! ");

// Find the first pet, age is less than 3
let youngPet = petsData.find(
    (pet) => {
        if (pet.age < 3)
            return (pet);
    }
);
console.log("Pet, age less than 3 is ",
    youngPet.petName);


// Use forEach to add up all the ages of the pets
let totalYears = 0;
petsData.forEach((pet) => totalYears += pet.age);
console.log("The sum of the pet ages is ", totalYears)



// Insert this information at index 3 in the petsData array
let suki = {

    petName: "Suki",
  
    age: 3,
  
    weightInKilos: 1.0,
  
    breed: "Jack Russel Terrier",
  
    pic: "images\\suki.png",
  
  };
  
  petsData.splice(3, 0, suki);
 
  linearListPets(petsData, " | ");

  // remove the item at index 3

  petsData.splice(3, 1);
    linearListPets(petsData, " | ");