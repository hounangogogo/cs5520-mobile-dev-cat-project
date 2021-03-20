import Animal from '../../models/animal';


const initialState = {
    lostAnimals: []
};


const lostAnimalReducer = (prevState = initialState, action) => {
    switch(action.type) {
        case 'ADD_LOST_ANIMAL':
            const newAnimal = new Animal(new Date().toString(), action.animalData.name)
            return {
                lostAnimals: prevState.lostAnimals.concat(newAnimal)
            }

        default:
            return prevState;
    }
};

export default lostAnimalReducer;