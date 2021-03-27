const url = 'https://cs5520-mobiledev-project-default-rtdb.firebaseio.com/';



export const getAllAdoptAnimalService = () => {
    return fetch(`${url}/adopt.json`)
        .then(response => response.json())
        .then(response => {
            console.log('herer')
            console.log(response)
            return response;
        })
        .catch((error) => console.log(error))
}




export const addNewAdoptAnimal = (animalName,
    animalBreeds, animalColor, animalAge, animalSize, animalGender, animalSpecies, phone, email, address, description, animalImage) => {
    return fetch(`${url}/adopt.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            animalName,
            animalBreeds,
            animalColor,
            animalAge,
            animalSize,
            animalGender,
            animalSpecies,
            phone,
            email,
            address,
            description,
            animalImage
        })
    }).then(response => response.json())
        .then(response => {
            return response;
        })
        .catch((error) => console.log(error))
}

