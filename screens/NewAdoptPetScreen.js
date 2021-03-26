import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import ImageSelectorComponent from '../components/ImageSelectorComponent';
import { addNewAdoptAnimal } from '../services/AdoptAnimalService';
import LocationSelectorComponent from '../components/LocationSelectorComponent';
import PropTypes from 'prop-types';
import emailPropType from 'email-prop-type';


// NewAdoptPetScreen.propTypes = {
//     name: PropTypes.string.isRequired,
//     // 加
//     email: emailPropType.isRequired, // can also specify emailPropType if it is not required
//   };

class NewAdoptPetScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            breeds: '',
            color: '',
            species: '',
            phone: '',
            
            email: '',
            address: '',
            description: '',
            image: ''
        }
    }

    imageChosenHandler = (imagePath) => {
        this.setState({
            image: imagePath
        })
    }


    addNewAdopt = () => {
        this.props.addNewAdoptAnimal(
            this.state.name,
            this.state.breeds,
            this.state.color,
            this.state.species,
            this.state.phone,
            
            this.state.email,
            this.state.address,
            this.state.description,
            this.state.image,
        );
        this.props.navigation.navigate('AdoptPet 🦮')
    }


    render() {
        //console.log(this.props)
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


                <Text style={styles.label}>Pet Type</Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.species}
                    onChangeText={(e) => {
                        this.setState({
                            species: e
                        })
                    }}
                    placeholder="Pet Type" />

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
                <TextInput
                    style={styles.textInput}
                    value={this.state.email}
                    onChangeText={(e) => {
                        this.setState({
                            email: e
                        })
                    }}
                    placeholder="email" />
                <TextInput
                    style={styles.textInput}
                    value={this.state.address}
                    onChangeText={(e) => {
                        this.setState({
                            address: e
                        })
                    }}
                    placeholder="address" />

                <Text style={styles.label}>Description</Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.description}
                    onChangeText={(e) => {
                        this.setState({
                            description: e
                        })
                    }}
                    placeholder="Please describe your pet or your thoughts" />

                <ImageSelectorComponent
                    onImageChoosen={this.imageChosenHandler}
                    useCamera={true}
                />

                {/* <LocationSelectorComponent /> */}

                <Button title='Submit' onPress={this.addNewAdopt} />
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



const stateToPropertyMapper = (state) => ({
    adoptAnimalFromDB: state.adoptAnimalReducer.adoptAnimals
})


const propertyToDispatchMapper = (dispatch) => ({
    addNewAdoptAnimal: (animalName,
        animalBreeds, animalColor, animalSpecies, phone, email, address, description, animalImage) =>
        addNewAdoptAnimal(animalName,
            animalBreeds, animalColor, animalSpecies, phone, email, address, description, animalImage)
            .then(data => {
                console.log(data)
                dispatch({
                    type: 'ADD_ADOPT_ANIMAL',
                    id: data.name,
                    name: animalName,
                    breeds: animalBreeds,
                    color: animalColor,
                    species: animalSpecies,
                    phone: phone,
                    email: email,
                    address: address,
                    description: description,
                    image: animalImage,
                })
            })
})


export default connect(stateToPropertyMapper, propertyToDispatchMapper)(NewAdoptPetScreen);
