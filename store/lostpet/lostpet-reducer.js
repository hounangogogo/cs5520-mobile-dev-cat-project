import {ADD_LOST_ANIMAL} from './lostpet-action';
import Animal from '../../models/animal';


const initialState = {
    lostAnimals: []
};


export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_LOST_ANIMAL:
            const newAnimal = new Animal(new Date().toString(), action.animalData.name)
            return {
                lostAnimals: state.lostAnimals.concat(newAnimal)
            }

        default:
            return state;
    }
};