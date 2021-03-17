import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            breeds: []
        }
    }

    componentDidMount = () => {
        fetch(`https://api.thecatapi.com/v1/breeds`)
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    breeds: res
                })
            })
    }


    searchCat = (breeds) => {

    }


    renderGridItem = (itemData) => {

        return (

            <TouchableOpacity
                style={styles.gridItem}
                onPress={() =>
                    this.props.navigation.navigate('CatDetail',  {
                            breed: itemData.item.name,
                            img: itemData.item.image.url
                        }
                    )
                }>
                <View>
                    {itemData.item.image &&
                        <Image
                            style={styles.image}
                            source={{
                                uri: itemData.item.image.url
                            }}
                        />
                    }
                    <Text>{itemData.item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }


    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={'dd'}
                        value={'dd'}
                    />
                    <Button title='Search Cat' />
                </View>
                <Text>{this.state.breeds.length}</Text>
                <FlatList
                    keyExtractor={(item, index) => index}
                    data={this.state.breeds}
                    renderItem={this.renderGridItem}
                    numColumns={2} />
            </View>
        )
    }

}

HomeScreen.navigationOptions = {
    headerTitle: 'Home',
    headerStyle: {
        backgroundColor: Colors.orange
    },
    headerTintColor: 'white'
}



const styles = StyleSheet.create({
    screen: {

        margin: 35
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#30475e'
    },
    formContainer: {
        width: '100%'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 200
    },
    image: {
        height: 160,
        width: 130
    }
})

export default HomeScreen;