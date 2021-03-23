const url = 'https://cs5520-mobiledev-project-default-rtdb.firebaseio.com/';



export const getAllLostAnimalService = () => {
    return fetch(`${url}/lost.json`)
        .then(response => response.json())
        .then(response => {
            console.log('herer')
            console.log(response)
            return response;
        })
        .catch((error) => console.log(error))
}




export const addNewLostAnimal = (animalName,
    animalBreeds, animalColor, animalSpecies, phone, animalImage) => {
    return fetch(`${url}/lost.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            animalName,
            animalBreeds,
            animalColor,
            animalSpecies,
            phone,
            animalImage
        })
    }).then(response => response.json())
        .then(response => {
            return response;
        })
        .catch((error) => console.log(error))
}

