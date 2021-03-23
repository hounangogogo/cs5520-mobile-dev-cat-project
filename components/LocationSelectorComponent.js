import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, ActivityIndicator, Alert } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

class LocationSelectorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pickedLocation: null,
            isFetchingLocation: false
        }
    }

    verifyLocationPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION)
        if (result.status !== 'granted') {
            Alert.alert('Need location permission');
            return false;
        }
        return true;
    }

    getLocationHandler = async () => {
        const hasPermission = await this.verifyLocationPermissions();
        if (!hasPermission) {
            return;
        }
        try {
            this.setState({
                isFetchingLocation: true
            })
            const location = await Location.getCurrentPositionAsync({
                timeout: 5000
            });
            this.setState({
                pickedLocation: {
                    lat: location.coords.altitude,
                    long: location.coords.longitude
                }
            })
        } catch (error) {
            Alert.alert('Could not fetch location')
        }

        this.setState({
            isFetchingLocation: false
        })
    }



    render() {
        console.log(this.state.pickedLocation)
        return (
            <View style={styles.locationPicker}>
                <View style={styles.mapPreview}>
                    {this.isFetchingLocation 
                    ? <ActivityIndicator /> 
                    : <Text>No Location Yet</Text>}
                </View>

                <Button title='Get user location'
                    onPress={this.getLocationHandler} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    locationPicker: {
        marginBottom: 15
    },
    mapPreview: {
        marginBottom: 10,
        width: '100%',
        height: 150,
        borderColor: '#ccc',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default LocationSelectorComponent;
