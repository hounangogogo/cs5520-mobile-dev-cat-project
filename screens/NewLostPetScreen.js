import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import ImageSelectorComponent from '../components/ImageSelectorComponent';

class NewLostPetScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            breeds: '',
            color: '',
            species: '',
            phone: '',
            image: '',
        }
    }

    imageChosenHandler = (imagePath) => {
        this.setState({
            image: imagePath
        })
    }


    addNewLost = () => {
        this.props.addNewLostAnimal(
            this.state.name,
            this.state.breeds,
            this.state.color,
            this.state.species,
            this.state.phone,
            this.state.image
        );
        this.props.navigation.navigate('LostPet 🙀')
    }


    render() {
        console.log(this.props)
        return (

            <ScrollView style={styles.form}>
                <Text style={styles.label}>Pet name</Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.name}
                    onChangeText={(e) => {
                        this.setState({
                            name: e
                        })
                    }}
                    placeholder="Pet Name" />

                <Text style={styles.label}>Pet Color</Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.color}
                    onChangeText={(e) => {
                        this.setState({
                            color: e
                        })
                    }}
                    placeholder="Pet Color" />


                <Text style={styles.label}>Pet Breeds</Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.breeds}
                    onChangeText={(e) => {
                        this.setState({
                            breeds: e
                        })
                    }}
                    placeholder="Pet Breeds" />


                <Text style={styles.label}>Pet Species</Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.species}
                    onChangeText={(e) => {
                        this.setState({
                            species: e
                        })
                    }}
                    placeholder="Pet Species" />



                <Text style={styles.label}>Contact</Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.phone}
                    onChangeText={(e) => {
                        this.setState({
                            phone: e
                        })
                    }}
                    placeholder="Phone" />
                <ImageSelectorComponent onImageChoosen={this.imageChosenHandler} />

                <Button title='Submit' onPress={this.addNewLost} />
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }
})


const stateToPropertyMapper = (state) => {
    return {
        lostAnimalFromDB: state.lostAnimalReducer.lostAnimals
    }
}


const propertyToDispatchMapper = (dispatch) => {
    return {
        addNewLostAnimal: (
            animalName,
            animalBreeds,
            animalColor,
            animalSpecies,
            phone,
            animalImage) => {
            dispatch({
                type: 'ADD_LOST_ANIMAL',
                name: animalName,
                breeds: animalBreeds,
                color: animalColor,
                species: animalSpecies,
                phone: phone,
                image: animalImage
            })
        }
    }
}


export default connect(stateToPropertyMapper, propertyToDispatchMapper)(NewLostPetScreen);