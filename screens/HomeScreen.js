import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { IconButton, Colors } from 'react-native-paper';
import { connect } from 'react-redux';
import { getAllAdoptAnimalService } from '../services/AdoptAnimalService'
import Animal from '../models/animal';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.props.navigation.setOptions({
            headerLeft: () => (
                <IconButton
                    icon="menu"
                    color={'black'}
                    size={40}
                    onPress={() => this.props.navigation.toggleDrawer()}
                />

            )
        })

        this.props.getAllAdoptAnimal();

    }


    render() {
        console.log(this.props.AdoptAnimalFromDB)
        let adoptPet = this.props.AdoptAnimalFromDB;
        return (
            <View style={styles.screen}>

                <View style={styles.dgScreen}>
                    <Animatable.View animation={dogAnimation}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DogSearch')}>
                            <Text style={styles.headerText}>Dog</Text>
                            <Image
                                style={styles.image}
                                source={require('../assets/dog2.png')}
                                resizeMode="contain"
                            />

                        </TouchableOpacity>
                    </Animatable.View>

                    <Animatable.View animation={catAnimation}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CatSearch')}>
                            <Text style={styles.headerText}>Cat</Text>
                            <Image
                                style={styles.image}
                                source={require('../assets/catHomePage.png')}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </Animatable.View>

                </View>



                <Text style={styles.lostPets1}>Pets Available for Adoption</Text>



                {
                    adoptPet &&
                    <View style={styles.bottomContainer}>
                        <View style={styles.middleContainer1}>
                            <Image
                                style={styles.lostPetsImage}
                                source={{
                                    uri: "https://picsum.photos/id/237/200/300"
                                }} />
                            <Text style={styles.lostPets2}>aa</Text>
                        </View>



                        <View style={styles.middleContainer4}>
                            <Image
                                style={styles.lostPetsImage}
                                source={require('../assets/more.png')}
                                resizeMode="contain"
                            />
                            <Text style={styles.lostPets2}>Meet More!~</Text>
                        </View>
                    </View>
                }



                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        @5520 Mobile
                    </Text>
                    <Text style={styles.footerText}>
                        Author: Haonan Zhao, Ying Tuo, Junyan Ling
                    </Text>
                </View>

            </View >
        );
    }
}


const dogAnimation = {
    0: {
        translateX: -200
    },
    0.5: {
        translateX: -30
    },
    1: {
        translateX: 0
    }
}


const catAnimation = {

    0: {
        translateX: 200
    },
    0.5: {
        translateX: 30
    },
    1: {
        translateX: 0
    }

}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dgScreen: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 130,
        marginBottom: 130
    },
    image: {
        width: 200,
        height: 200,
        padding: 1,
        alignSelf: 'flex-start'
    },

    bottomContainer: {
        flexDirection: "row",
        height: 150
    },

    middleContainer1: {
        flex: 1,
        padding: 7,
        marginRight: 2,
        marginBottom: 2
    },
    middleContainer2: {
        flex: 1,
        padding: 7,
        marginRight: 2,
        marginBottom: 2
    },
    middleContainer3: {
        flex: 1,
        padding: 7,
        marginRight: 2,
        marginBottom: 2
    },
    middleContainer4: {
        flex: 1,
        padding: 7,
        marginRight: 2,
        marginBottom: 2
    },

    lostPetsImage: {
        height: 90,
        width: 90,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
    },

    lostPets1: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'green',
        fontFamily: 'open-sans-bold',
        fontSize: 20,
    },

    lostPets2: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'green',
        fontFamily: 'open-sans',
        fontSize: 10,
        textAlign: 'center'
    },

    footer: {
        // flex: 0.1,
        bottom: -45,
        height: 50,
        width: "100%",
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center'
    },

    footerText: {
        color: "yellow",
        textAlign: 'center',
        fontSize: 18,
    },

    headerText: {
        color: "green",
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
        fontSize: 18,
    }
})





const stateToPropertyMapper = (state) => ({
    AdoptAnimalFromDB: state.adoptAnimalReducer.adoptAnimals
})


const propertyToDispatchMapper = (dispatch) => ({
    getAllAdoptAnimal: () =>
        getAllAdoptAnimalService()
            .then(data => {
                console.log(data)
                const loadedAdoptAnimal = [];
                for (const key in data) {
                    loadedAdoptAnimal.push(new Animal(
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
                    type: 'ALL_ADOPT_ANIMAL',
                    allAdopt: loadedAdoptAnimal
                })
            })
})


export default connect(stateToPropertyMapper, propertyToDispatchMapper)(HomeScreen);



