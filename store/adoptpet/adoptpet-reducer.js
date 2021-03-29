import Animal from '../../models/animal';

const initialState = {
    adoptAnimals: []
};


const adoptAnimalReducer = (prevState = initialState, action) => {
    switch (action.type) {

        case 'ALL_ADOPT_ANIMAL':
            return {
                adoptAnimals: action.allAdopt
            }

        case 'ADD_ADOPT_ANIMAL':
            const newAnimal = new Animal(
                action.id,
                action.name,
                action.breeds,
                action.color,
                action.age,
                action.size,
                action.gender,
                action.species,
                action.phone,
                action.email,
                action.address,
                action.description,
                action.image)
            return {
                adoptAnimals: prevState.adoptAnimals.concat(newAnimal)
            }

        default:
            return prevState;
    }
};

export default adoptAnimalReducer;