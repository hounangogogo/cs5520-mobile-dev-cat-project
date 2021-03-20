export const ADD_LOST_ANIMAL = 'ADD_LOST_ANIMAL';

export const addLostAnimal = (name) => {
    return {type: ADD_LOST_ANIMAL, animalData: {name : name}}
}