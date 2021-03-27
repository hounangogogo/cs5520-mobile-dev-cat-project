import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

class AdoptPetDetailScreen extends Component {
    constructor(props) {
        super(props);
        console.log(props.route.params);
        this.state = {
            animal: '',
            animalId: props.route.params.animalId,
            accessToken: props.route.params.token
        }
    }


    componentDidMount = () => {
        this.getAnimalById();
    }

    getAnimalById = () => {
        let token = this.state.accessToken;
        let animalId = this.state.animalId;
        fetch(`https://api.petfinder.com/v2/animals/${animalId}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
        }).then((res) => res.json())
            .then((res) => {
                console.log(res)
                this.setState({
                    animal: res.animal
                })
            })
    }


    render() {
        let fechedAnimal = this.state.animal;
        return (
            <View>
                <Text>Lost Pet Detail</Text>
                {
                    fechedAnimal &&
                    <View>
                        <Text>{fechedAnimal.age}</Text>
                        <Text>{fechedAnimal.name}</Text>
                        <Text>{fechedAnimal.gender}</Text>
                        <Text>{fechedAnimal.size}</Text>
                        <Text>{fechedAnimal.species}</Text>
                        <Text>{fechedAnimal.contact.email}</Text>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={{
                                uri: fechedAnimal.photos[0].full
                            }}
                        />
                    </View>
                }
            </View>
        );
    }
}

export default AdoptPetDetailScreen;