import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import PropBar from "./PropBar.js";
// import { Row, Rows, Table } from "react-native-table-component";

class CatDetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breed: this.props.route.params.breed,
            img: this.props.route.params.img,
            breed_id: this.props.route.params.breed_id,
            cat: "",
            adaptability: "",
            affectionLevel: "",
            childFriendly: "",
            description: "",
            dogFriendly: "",
            energyLevel: "",
            grooming: "",
            hairless: "",
            name: "",
            album: [],
            wikipedia_url: "",
            temperament: "",
            origin: "",
            life_span: "",
        };
    }

    findCatAlbum = () => {
        let url =
            `https://api.thecatapi.com/v1/images/search?breed_ids=` +
            this.state.breed_id +
            `&limit=20&page=100&order=DESC`;
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                this.setState({
                    album: res,
                });
            });
    };

    componentDidMount = () => {
        fetch(`https://api.thecatapi.com/v1/breeds/search?q=` + this.state.breed)
            .then((res) => res.json())
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
                    name: res[0].name,
                    wikipedia_url: res[0].wikipedia_url,
                    temperament: res[0].temperament,
                    origin: res[0].origin,
                    life_span: res[0].life_span,
                });
            });

        this.findCatAlbum();
    };

    render() {
        const CHARACS = [
            {
                type: "dog friendly",
                level: this.state.dogFriendly === 0 ? 0.01 : this.state.dogFriendly,
            },
            {
                type: "child friendly",
                level: this.state.childFriendly === 0 ? 0.01 : this.state.childFriendly,
            },
            {
                type: "energyLevel",
                level: this.state.energyLevel === 0 ? 0.01 : this.state.energyLevel,
            },
            {
                type: "grooming",
                level: this.state.grooming === 0 ? 0.01 : this.state.grooming,
            },
            {
                type: "adaptability",
                level: this.state.adaptability === 0 ? 0.01 : this.state.adaptability,
            },
            {
                type: "affectionLevel",
                level:
                    this.state.affectionLevel === 0 ? 0.01 : this.state.affectionLevel,
            },
        ];

        const DETAILS = {
            tableData: [
                ["origin", this.state.origin],
                ["life_span", this.state.life_span],
                ["temperament", this.state.temperament],
            ],
        };

        return (
            <View style={styles.screen}>

                <View style={styles.topMiddleContainer1}>
                    {/* picture block */}
                    <View style={styles.topContainer}>
                        <View id="picture" style={styles.picture}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: this.state.img,
                                }}
                            />
                        </View>
                    </View>

                    <View style={styles.topMiddleContainer2}>
                        {/* description block */}
                        <View id="description" style={styles.description}>
                            <Text>description : {this.state.description}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.bottomContainer}>

                    <View style={styles.bottomMiddleContainer1}>
                        {/* details block */}
                        <View id="details" style={styles.details}>
                            {/* <Table borderStyle={{ borderWidth: 1, borderColor: "#ddd" }}>
            <Rows data={DETAILS.tableData} />
          </Table> */}
                        </View>
                    </View>

                    <View style={styles.bottomMiddleContainer2}>
                        {/* characteristics block */}
                        <View id="characteristics" style={styles.characteristics}>
                            <PropBar hue="300" saturation="40" characs={CHARACS} />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        height: 160,
        width: 130,
    },
    bar_group__bar_thin: {
        width: "0%",
        height: "4px",
        border_radius: "2px",
        background: "#ddd",

        // margin-bottom: 10px;
        // -webkit-transition: width 1s;
        // transition: width 1s;
    },
    text: {},
    details: {},

    bottomContainer: {
        flexDirection: "row",
        height: 300
    },

    bottomMiddleContainer1: {
        flex: 1,
        padding: 7,
        marginRight: 2,
        marginBottom: 2
    },
    bottomMiddleContainer2: {
        flex: 2,
        padding: 7,
        marginRight: 2,
        marginBottom: 2
    },

    topContainer: {
        flexDirection: "row",
        height: 150
    },

    topMiddleContainer1: {
        flex: 1,
        padding: 7,
        marginRight: 2,
        marginBottom: 2
    },
    topMiddleContainer2: {
        flex: 2,
        padding: 7,
        marginRight: 2,
        marginBottom: 2
    }
});




export default CatDetailScreen;
