import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';



class CatDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breed: this.props.route.params.breed,
            img: this.props.route.params.img,
            breed_id: this.props.route.params.breed_id,
            cat: '',
            adaptability: '',
            affectionLevel: '',
            childFriendly: '',
            description: '',
            dogFriendly: '',
            energyLevel: '',
            grooming: '',
            hairless: '',
            name: '',
            album: []

        }
    }


    findCatAlbum = () => {
        let url = `https://api.thecatapi.com/v1/images/search?breed_ids=` + this.state.breed_id + `&limit=20&page=100&order=DESC`
        fetch(url)
            .then(res => res.json())
            .then((res) => {
                console.log(res)
                this.setState({
                    album: res
                })
            })
    }


    componentDidMount = () => {

        fetch(`https://api.thecatapi.com/v1/breeds/search?q=` + this.state.breed)
            .then(res => res.json())
            .then((res) => {
                
                this.setState({
                    cat: res,
                    adaptability: res[0].adaptability,
                    affectionLevel: res[0].affection_level,
                    childFriendly: res[0].child_friendly,
                    description: res[0].description,
                    dogFriendly: res[0].dog_friendly,
                    energyLevel: res[0].energy_level,
                    grooming: res[0].grooming,
                    hairless: res[0].hairless,
                    name: res[0].name
                })
            })

        this.findCatAlbum();
    }

    render() {
        console.log(this.state.cat)
        return (
            <View style={styles.screen}>
                <Image
                    style={styles.image}
                    source={{
                        uri: this.state.img
                    }}
                />
                <Text>name : {this.state.name}</Text>
                <Text>description : {this.state.description}</Text>
                <Text>hairless : {this.state.hairless}</Text>
                <Text>dog friendly : {this.state.dogFriendly}</Text>
                <Text>child friendly : {this.state.childFriendly}</Text>
                <Text>energyLevel : {this.state.energyLevel}</Text>

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

export default CatDetailScreen;