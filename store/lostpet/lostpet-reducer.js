import Animal from '../../models/animal';


const initialState = {
    lostAnimals: []
};


const lostAnimalReducer = (prevState = initialState, action) => {
    switch (action.type) {

        case 'ALL_LOST_ANIMAL':
            return {
                lostAnimals: action.allLost
            }

        case 'ADD_LOST_ANIMAL':
            const newAnimal = new Animal(
                action.id,
                action.name,
                action.breeds,
                action.color,
                action.species,
                action.phone,
                action.image)
            return {
                lostAnimals: prevState.lostAnimals.concat(newAnimal)
            }

        default:
            return prevState;
    }
};

export default lostAnimalReducer;