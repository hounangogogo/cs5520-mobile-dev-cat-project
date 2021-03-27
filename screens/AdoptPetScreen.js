import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button, FlatList } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import { connect } from 'react-redux';
import Animal from '../models/animal';
import { getAllAdoptAnimalService } from '../services/AdoptAnimalService';

class AdoptPetScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accessToken: '',
            lostCats: [],
            // from db
            lostAnimal: []
        }
    }


    componentDidMount = () => {
        this.props.getAllAdoptAnimal();
        this.props.navigation.setOptions({
            headerLeft: () => (
                <IconButton
                    icon="home"
                    color={'black'}
                    size={40}
                    onPress={() => this.props.navigation.navigate('Home')}
                />

            ),
            headerRight: () => (
                <IconButton
                    icon="file-document-edit"
                    color={'black'}
                    size={40}
                    onPress={() => this.props.navigation.navigate('NewAdopt')}
                />

            )
        })
        this.getToken();


    }



    getToken = () => {
        fetch('https://api.petfinder.com/v2/oauth2/token', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "grant_type": "client_credentials",
                "client_id": 'A7O634I1AYU18NP1aqqyedhc6Z7VbJVHHDKwOOMBEcYIGyawDU',
                "client_secret": 'anavA0L8rN65ll1YELbh9NzIqLIDKjakuS3C9inU'
            })
        }).then((res) => res.json())
            .then((res) => {
                console.log(res)
                this.setState({
                    accessToken: res.access_token
                })
                this.getAdoptCat();
            })
    }



    getAdoptCat = () => {
        let token = this.state.accessToken;
        fetch('https://api.petfinder.com/v2/animals?type=cat&page=5', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
        }).then((res) => res.json())
            .then((res) => {
                this.setState({
                    lostCats: res.animals
                })
            })
    }


    renderDBLost = (itemData) => {
        let image = itemData.item.imageUri;
        return (
            <View>
                <Text>PetName: {itemData.item.name}</Text>
                <Text>PetBreeds: {itemData.item.breeds}</Text>
                <Text>Petcolor: {itemData.item.color}</Text>
                <Text>Petspecies: {itemData.item.species}</Text>
                <Text>Contact: {itemData.item.phone}</Text>

                <Image
                    style={{ width: 100, height: 100 }}
                    source={{
                        uri: image
                    }}
                />

            </View>
        )
    }



    renderGridItem = (itemData) => {
        //console.log(itemData.item)
        return (
            // <TouchableOpacity>
            //     <View>
            //         <Text>Age: {itemData.item.age}</Text>
            //         <Text>Name: {itemData.item.name}</Text>
            //         {
            //             itemData.item.photos.length !== 0 && 
            //             <Image
            //                 style={styles.image}
            //                 source={{
            //                     uri: itemData.item.photos[0].full
            //                 }} />
            //         }

            //     </View>
            // </TouchableOpacity>

            <TouchableOpacity
                onPress={() => this.props.navigation.navigate("AdoptPetDetail", {
                    animalId: itemData.item.id,
                    token: this.state.accessToken
                })}
                style={styles.gridItem}>
                <View style={styles.lostBox}>
                    {itemData.item.photos.length !== 0 ?
                        <Image
                            style={styles.image}
                            source={{
                                uri: itemData.item.photos[0].full
                            }}
                        /> :
                        <Image
                            style={styles.image}
                            source={{
                                uri: "https://picsum.photos/id/237/200/300"
                            }} />
                    }
                    {itemData.item.gender === "Female" ?
                        <Text style={styles.text1}>👧 {itemData.item.name}</Text>
                        :
                        <Text style={styles.text1}>👦 {itemData.item.name}</Text>
                    }
                    <Text style={styles.text2}>{itemData.item.age}</Text>
                </View>
            </TouchableOpacity>
        )
    }


    render() {
        console.log(this.props)
        return (
            <View style={styles.screen}>
                <Text>Data from db</Text>
                <View>
                    <Text>
                        {this.props.adoptAnimalFromDB.length}

                    </Text>
                    {this.props.adoptAnimalFromDB.length !== 0 ?
                        <FlatList
                            keyExtractor={(item, index) => index}
                            data={this.props.adoptAnimalFromDB}
                            renderItem={this.renderDBLost}
                            numColumns={1}
                        /> : <View />}
                </View>
                <Text>----------------------</Text>

                <FlatList
                    keyExtractor={(item, index) => index}
                    data={this.state.lostCats}
                    renderItem={this.renderGridItem}
                    numColumns={2} />
            </View>
        );
    }
}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // margin: 35,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: "#ddd"
    },

    gridItem: {
        flex: 1,
        margin: 22,
        height: 230,
        // width: 160
    },

    image: {
        // height: "75%",
        // width: "100%",
        height: 160,
        width: 160,
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: 15,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        marginTop: -15
    },
    lostBox: {
        // height: 230,
        width: 160,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        backgroundColor: "white"
    },
    text1: {
        fontFamily: 'open-sans-bold',
        color: "green",
        textAlign: 'center',
        fontSize: 15
    },
    text2: {
        fontFamily: 'open-sans',
        color: "black",
        textAlign: 'center',
        fontSize: 13
    }

})

const stateToPropertyMapper = (state) => ({
    adoptAnimalFromDB: state.adoptAnimalReducer.adoptAnimals
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


export default connect(stateToPropertyMapper, propertyToDispatchMapper)(AdoptPetScreen);