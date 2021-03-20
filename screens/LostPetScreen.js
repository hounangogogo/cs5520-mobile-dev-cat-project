import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { IconButton, Colors } from 'react-native-paper';

class LostPetScreen extends Component {
    constructor(props) {
        console.log("sdfsdf")
        super(props);
        this.state = {
            accessToken: '',
            lostCats: []
        }
    }


    componentDidMount = () => {
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
                    icon="bullhorn"
                    color={'black'}
                    size={40}
                    onPress={() => this.props.navigation.navigate('NewLost')}
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
                this.getLostCat();
            })
    }



    getLostCat = () => {
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




    renderGridItem = (itemData) => {
        console.log(itemData.item)
        return (
            <TouchableOpacity>
                <View>
                    <Text>Age: {itemData.item.age}</Text>
                    <Text>Name: {itemData.item.name}</Text>
                    {
                        itemData.item.photos.length !== 0 && 
                        <Image
                            style={styles.image}
                            source={{
                                uri: itemData.item.photos[0].full
                            }} />
                    }

                </View>
            </TouchableOpacity>
        )
    }




    render() {
        console.log(this.state.lostCats)
        return (
            <View>
                <Text>LostPetScreen</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 160,
        width: 160,
    },

})


export default LostPetScreen;