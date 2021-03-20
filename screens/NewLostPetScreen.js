import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Button } from 'react-native';



class NewLostPetScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            breeds: '',
            color: '',
            species: '',
            phone: ''
        }
    }

    render() {
        return (
            <View style={styles.form}>
                <Text style={styles.label}>Pet name</Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.name}
                    onChange={(e) => {
                        this.setState({
                            name: e.target.value
                        })
                    }}
                    placeholder="Pet Name" />

                <Text style={styles.label}>Pet Color</Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.color}
                    onChange={(e) => {
                        this.setState({
                            color: e.target.value
                        })
                    }}
                    placeholder="Pet Color" />


                <Text style={styles.label}>Pet Breeds</Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.breeds}
                    onChange={(e) => {
                        this.setState({
                            breeds: e.target.value
                        })
                    }}
                    placeholder="Pet Breeds" />


                <Text style={styles.label}>Pet Species</Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.species}
                    onChange={(e) => {
                        this.setState({
                            species: e.target.value
                        })
                    }}
                    placeholder="Pet Species" />



                <Text style={styles.label}>Contact</Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.phone}
                    onChange={(e) => {
                        this.setState({
                            phone: e.target.value
                        })
                    }}
                    placeholder="Phone" />

                <Button title='Submit' onPress={() => { }} />
            </View>

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


export default NewLostPetScreen;