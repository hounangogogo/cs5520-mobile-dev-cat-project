import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';



class DogDetailScreen extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            dog: '',
            breed: this.props.route.params.breed,
            img: this.props.route.params.img,
            breed_id: this.props.route.params.breed_id,
        }
    }


    componentDidMount = () => {
        fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=`+this.state.breed_id)
            .then(res => res.json())
            .then((res) => {
                console.log(res)
                this.setState({
                    dog: res
                })
            })
    }


    render() {
        console.log(this.state.dog)
        return (
            <View style={styles.screen}>
                <Text>Dog Detail</Text>
                <Image
                    style={styles.image}
                    source={{
                        uri: this.state.img
                    }}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 160,
        width: 130
    }
})

export default DogDetailScreen;