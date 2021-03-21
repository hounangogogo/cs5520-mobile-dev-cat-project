import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, Image, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


class ImageSelectorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pickedImg: null
        }
    }


    verifyPermissions = async() => {
        const result = await Permissions.askAsync(Permissions.MEDIA_LIBRARY)
        if(result.status !== 'granted') {
            Alert.alert('Need albumn permission');
            return false;
        }
        return true;
    }

    takeImageHandler = async() => {
        const hasPermission = await this.verifyPermissions();
        if(!hasPermission) {
            return;
        }
        const image = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5
        });
        console.log(image)
        this.setState({
            pickedImg: image.uri
        })

        this.props.onImageChoosen(image.uri)
    }


    render() {
        return (
            <View style = {styles.imagePicker}>
                <View style = {styles.imagePreview}>
                    {
                        this.state.pickedImg === null ?
                        <Text>No img picked</Text>
                        :
                        <Image style = {styles.img} source={{uri: this.state.pickedImg}}/>

                    }
                </View>
                <Button title='Select an Image' onPress={this.takeImageHandler} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imagePicker: {
        alignItems: 'center',
        marginBottom: 15
    },
    imagePreview: {
        width: '100%',
        height: 200,
        margin: 10,
        justifyContent:'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1
    },
    img: {
        width: '100%',
        height: '100%'
    }

})


export default ImageSelectorComponent;