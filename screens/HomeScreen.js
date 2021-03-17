import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';



class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.dgScreen}>
                    <Animatable.View animation={dogAnimation}>
                        <TouchableOpacity onPress = {()=> this.props.navigation.navigate('DogSearch')}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: `https://www.jamiesale-cartoonist.com/wp-content/uploads/dog-12.png`
                                }}
                            />
                        </TouchableOpacity>
                    </Animatable.View>

                    <Animatable.View animation={catAnimation}>
                        <TouchableOpacity onPress = {()=> this.props.navigation.navigate('CatSearch')}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: `https://www.pinclipart.com/picdir/middle/402-4022519_kawaii-cute-cat-kitten-cats-catlove-report-kawaii.png`
                                }}
                            />
                        </TouchableOpacity>
                    </Animatable.View>

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
        alignItems: 'center'
    },
    dgScreen: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 260
    }
})


export default HomeScreen;