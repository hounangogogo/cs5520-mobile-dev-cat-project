import React, { Component } from 'react';
import { View, Button, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';


const AnimatableTouch = Animatable.createAnimatableComponent(TouchableOpacity);


class AdoptScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chooseDog: true
        }
    }
    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.choose}>
                    <AnimatableTouch onPress={() => {
                        this.setState({
                            chooseDog: true
                        })
                    }}>
                        <Animatable.Image
                            animation={{
                                from: {
                                    height: this.state.chooseDog ? 100 : 150,
                                    width: this.state.chooseDog ? 100 : 150
                                },
                                to: {
                                    height: this.state.chooseDog ? 150 : 100,
                                    width: this.state.chooseDog ? 150 : 100
                                }

                            }}
                            style={styles.img}
                            source={require('../assets/img/dog.png')}
                        />
                    </AnimatableTouch>
                    <AnimatableTouch onPress={() => {
                        this.setState({
                            chooseDog: false
                        })
                    }}>
                        <Animatable.Image
                            animation={{
                                from: {
                                    height: this.state.chooseDog ? 150 : 100,
                                    width: this.state.chooseDog ? 150 : 100
                                },
                                to: {
                                    height: this.state.chooseDog ? 100 : 150,
                                    width: this.state.chooseDog ? 100 : 150
                                }

                            }}
                            style={styles.img}
                            source={require('../assets/img/cat.png')}
                        />
                    </AnimatableTouch>
                </View>

                <View style={styles.form}>
                    {
                        this.state.chooseDog ?
                            <View>
                                <Text>Dog Form</Text>
                            </View>
                            :
                            <View>
                                <Text>Cat Form</Text>
                            </View>
                    }
                </View>
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
    choose: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: 100,
        width: 100
    }
})


export default AdoptScreen;