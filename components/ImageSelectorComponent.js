import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, Image, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


class ImageSelectorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
        ImagePicker.launchImageLibraryAsync();
    }


    render() {
        return (
            <View style = {styles.imagePicker}>
                <View style = {styles.imagePreview}>
                    <Text>No img picked</Text>
                    <Image style = {styles.img}/>
                </View>
                <Button title='Take an Image' onPress={this.takeImageHandler} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imagePicker: {
        alignItems: 'center'
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