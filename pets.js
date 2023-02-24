const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation",
        pic: "stella.png"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi",
        pic: "cody.png"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian",
        pic: "mango.png"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python",
        pic: "lucy.png"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog",
        pic: "buhmie.png"
    }
];

const linearListPets = (petsArray, separater) => {
    let str = "";
    petsArray.forEach((pet) => {
        str += pet.petName + " the " + pet.breed + separater;
    });
    console.log(str);
}

//Add a pet to the front of the array
petsData.unshift({
    petName: "Carmie",
    age: 3,
    weightInKilos: 28,
    breed: "Greyhound",
    pic: "images\\carmie.png"
});

// Now add a pet to the end of the array
petsData.push({
    petName: "Copper",
    age: 3,
    weightInKilos: 0.3,
    breed: "Mali Uromastyx",
    pic: "images\\copper.png"
});

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


    // Add the content of our array to DOM

    const showInfo = () => {
        // get a handle to the input field and get the value
        let petNumber = document.querySelector("#petNum").value;
        // the array is zero-based, so subtract 1
        petNumber = parseInt(petNumber) - 1;
        // get a handle to the paragraph
        let selectedPetInfo = document.querySelector(".selectedPetInfo");
        // get the correspoding petsData object
        let pet = petsData[petNumber];
        // set the information
        selectedPetInfo.textContent = `${pet.petName} is a ${pet.breed}
                                    and is ${pet.age} years old.This pet weights ${pet.weightInKilos} kilos.`;
        let petPic = document.querySelector(".selectedPetPic");
        // set the image
        petPic.src = pet.pic;
    }
    // ------------------------------------------------------
    // JAVASCRIPT
    // Get a handle to the petsInfo paragraph
    let petsInfo = document.querySelector(".petsInfo");
    // Add content by modifying the textContent property
    petsInfo.textContent = `Welcome to our newest pet,
                            ${petsData[petsData.length - 1].petName} the
                            ${petsData[petsData.length - 1].breed}`;

                            //pet length is 5 because we have 5 objects
                            //index start at (0-4) so 5 - 1 = 4
    
    let petsList = document.querySelector(".petsList");
    let allPetsList = `<ol>`;
    petsData.forEach((pet) => {
        allPetsList += `<li> ${pet.petName} the ${pet.breed}</li>`;
    });
    allPetsList += `</ol>`;
    
    petsList.innerHTML = allPetsList;