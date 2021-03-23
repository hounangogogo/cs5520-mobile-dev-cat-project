import React, { Component } from 'react';
import { View, Image, Button, StyleSheet, Text, ActivityIndicator, Alert } from 'react-native';
import ENV from '../env';



class MapPreviewComponent extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.location.lat)
        console.log(this.props.location.long)

        this.state = {
            imagePreviewUrl : `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${
                props.location.long
              }&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${
                props.location.lat
              },${props.location.long}&key=${ENV.googleApiKey}`
            

        }
    }



    render() {
        return (
            <View style={{ ...styles.mapPreview, ...this.props.style }}>
                {
                    this.props.location !== null
                        ? <Image style={styles.mapImage}
                            source={{ uri: this.state.imagePreviewUrl }} />
                        : this.props.children
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    mapImage: {
        width: 300,
        height: 200
    },
    mapPreview: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default MapPreviewComponent;