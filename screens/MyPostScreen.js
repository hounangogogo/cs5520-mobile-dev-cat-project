import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import { getAllAdoptAnimalService } from "../services/AdoptAnimalService";
import { getAllLostAnimalService } from '../services/LostAnimalService';
import Animal from '../models/animal';

class MyPostScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount = () => {
        this.props.getAllAdoptAnimal();
        this.props.getAllLostAnimal();
    }



    render() {
        let myLostPost = this.props.LostAnimalFromDB;
        let myAdoptPost = this.props.AdoptAnimalFromDB;

        console.log(this.props)
        return (
            <View style={styles.screen}>
                <Text>MyPost Screenssss</Text>
                <Text>my adopt: {myAdoptPost.length}</Text>
                <Text>my lost: {myLostPost.length}</Text>

            </View>
        )
    }

}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})





const stateToPropertyMapper = (state) => ({
    AdoptAnimalFromDB: state.adoptAnimalReducer.adoptAnimals,
    LostAnimalFromDB: state.lostAnimalReducer.lostAnimals
});

const propertyToDispatchMapper = (dispatch) => ({
    getAllAdoptAnimal: () =>
        getAllAdoptAnimalService().then((data) => {
            console.log(data);
            const loadedAdoptAnimal = [];
            for (const key in data) {
                loadedAdoptAnimal.push(
                    new Animal(
                        key,
                        data[key].animalName,
                        data[key].animalBreeds,
                        data[key].animalColor,
                        data[key].animalSpecies,
                        data[key].phone,
                        data[key].animalImage
                    )
                );
            }
            dispatch({
                type: "ALL_ADOPT_ANIMAL",
                allAdopt: loadedAdoptAnimal,
            });
        }),


    getAllLostAnimal: () =>
        getAllLostAnimalService()
            .then(data => {
                console.log(data)
                const loadedLostAnimal = [];
                for (const key in data) {
                    loadedLostAnimal.push(new Animal(
                        key,
                        data[key].animalName,
                        data[key].animalBreeds,
                        data[key].animalColor,
                        data[key].animalSpecies,
                        data[key].phone,
                        data[key].animalImage
                    ))
                }
                dispatch({
                    type: 'ALL_LOST_ANIMAL',
                    allLost: loadedLostAnimal
                })
            })
});

export default connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(MyPostScreen);
