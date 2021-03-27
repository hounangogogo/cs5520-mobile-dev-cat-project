import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import * as Animatable from "react-native-animatable";
import { Col, Row, Grid } from "react-native-easy-grid";

class AdoptPetDetailScreen extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        console.log(props.route.params);
        this.state = {
            animal: '',
            dbAnimal: '',
            animalId: props.route.params.animalId,
            accessToken: props.route.params.token,
            isFromApi: props.route.params.isFromApi,
            tableBoardColor: "#D6D0C6",
            tableCellColor: "#F7F6E7",
            tableCellColorDark: "#D6D0C6",
        }
    }


    componentDidMount = () => {
        console.log(this.state.isFromApi)
        this.state.isFromApi ? this.getAnimalById() : this.getAnimalFromDB()


    }

    getAnimalFromDB = () => {
        console.log(this.state.animalId)
        console.log(this.props.adoptAnimalFromDB)
        let tmpAnimal = this.props.adoptAnimalFromDB.find(ani => ani.id === this.state.animalId)
        console.log(tmpAnimal)
        this.setState({
            dbAnimal: tmpAnimal

        })
    }

    getAnimalById = () => {
        let token = this.state.accessToken;
        let animalId = this.state.animalId;
        fetch(`https://api.petfinder.com/v2/animals/${animalId}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
        }).then((res) => res.json())
            .then((res) => {
                console.log(res)
                console.log(res.animal)

                this.setState({
                    animal: res.animal,
                })
            })
    }


    render() {
        console.log(this.state.dbAnimal)
        console.log(this.state.animal)
        let apiAnimal = this.state.animal;
        let dbAnimal = this.state.dbAnimal;
        return (
            <View>
                {
                    apiAnimal &&
                    <View>
                        <View style={styles.topContainer}>
                            {apiAnimal.photos.length !== 0 ?
                                <Animatable.Image
                                    style={styles.image}
                                    source={{
                                        uri: apiAnimal.photos[0].full
                                    }}
                                    duration={1000}
                                />
                                :
                                <Animatable.Image
                                    style={styles.image}
                                    source={{
                                        uri: "https://picsum.photos/id/237/200/300"
                                    }}
                                    duration={1000}
                                />
                            }
                        </View>

                        <View style={styles.outsideContainer}>
                            <Text style={styles.headText}>More about this cute {apiAnimal.species}! </Text>

                            <View style={styles.tableContainer}>
                                <Grid style={{ borderRadius: 100 }}>
                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColorDark,
                                            // height: "300%",
                                            // width: "100%"
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Type</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.tableText}>{apiAnimal.species}</Text>
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColor,
                                            // height: "300%",
                                            // width: "100%"
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Breeds</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.tableText}>{apiAnimal.breeds["primary"]}</Text>
                                        </Col>
                                    </Row>
                                    <Row
                                        style={{

                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColorDark,
                                            // height: "300%",
                                            borderWidth: 3,
                                            width: "100%"
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Name</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.tableText}>{apiAnimal.name}</Text>
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColor,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Age</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.tableText}>{apiAnimal.age}</Text>
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColorDark,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Gender</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.tableText}>{dbAnimal.gender}</Text>
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColor,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Size</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.tableText}>{apiAnimal.size}</Text>
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColorDark,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Phone</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.tableText}>{apiAnimal.contact["phone"]}</Text>
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColor,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Email</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.tableText}>{apiAnimal.contact["email"]}</Text>
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColorDark,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Address</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.tableText}>{apiAnimal.contact["address"]["city"]}, {apiAnimal.contact["address"]["state"]}</Text>
                                        </Col>
                                    </Row>

                                </Grid>
                            </View>
                        </View>
                    </View>
                }
                {
                    dbAnimal &&
                    <View>
                        <View style={styles.topContainer}>
                            {dbAnimal.imageUri ?
                                <Animatable.Image
                                    style={styles.image}
                                    source={{
                                        uri: dbAnimal.imageUri
                                    }}
                                    duration={1000}
                                />
                                :
                                <Animatable.Image
                                    style={styles.image}
                                    source={{
                                        uri: "https://picsum.photos/id/237/200/300"
                                    }}
                                    duration={1000}
                                />
                            }
                        </View>

                        <View style={styles.outsideContainer}>
                            <Text style={styles.headText}>More about this cute {dbAnimal.species}! </Text>

                            <View style={styles.tableContainer}>
                                <Grid style={{ borderRadius: 100 }}>
                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColorDark,
                                            // height: "300%",
                                            // width: "100%"
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Type</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.tableText}>{dbAnimal.species}</Text>
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColor,
                                            // height: "300%",
                                            // width: "100%"
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Breeds</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.tableText}>{dbAnimal.breeds}</Text>
                                        </Col>
                                    </Row>
                                    <Row
                                        style={{

                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColorDark,
                                            // height: "300%",
                                            borderWidth: 3,
                                            width: "100%"
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Name</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.tableText}>{dbAnimal.name}</Text>
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColor,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Age</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.tableText}>{dbAnimal.age}</Text>
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColorDark,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Gender</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.tableText}>{dbAnimal.gender}</Text>
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColor,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Size</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.tableText}>{dbAnimal.size}</Text>
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColorDark,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Phone</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.tableText}>{dbAnimal.phone}</Text>
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColor,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Email</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.tableText}>{dbAnimal.email}</Text>
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColorDark,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Address</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.tableText}>{dbAnimal.address}</Text>
                                        </Col>
                                    </Row>

                                </Grid>
                            </View>
                        </View>
                    </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ECEBE4",
    },
    topContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    tableContainer: {
        // flex: 1.4,
        // marginLeft: "3%",
        // marginBottom: 2,
        borderRadius: 15,
        width: "100%",
        padding: 10,
        flex: 1,
    },
    bottomContainer: {
        flexDirection: "column",
        // height: 500,
        // padding: 7,
        // marginRight: 1,
        // marginBottom: 2,
        // marginTop: "10%",
        // justifyContent: "center",
        // alignItems: "center",
    },
    image: {
        height: 250,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        margin: 10,
    },
    tableText: {
        textAlign: "auto",
        color: "#54514B",
        fontWeight: "200",
        fontFamily: "Arial",
        fontSize: 12.5,
    },
    tableHead: {
        textAlign: "left",
        color: "#54514B",
        fontWeight: "500",
        fontSize: 13,
    },
    headText: {
        color: "#54514B",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: 'center',

    },
    text: {
        color: "#54514B",
        fontSize: 15,
        textAlign: "justify",
        marginRight: "5%",
    },
})



const stateToPropertyMapper = (state) => ({
    adoptAnimalFromDB: state.adoptAnimalReducer.adoptAnimals
})

const propertyToDispatchMapper = (dispatch) => ({

})

const customerImageIn = {
    from: {
        width: 26,
        height: 32,
        opacity: 1,
        translateX: -200,
        translateY: -200,
        borderRadius: 15,
        // rotate: "40deg",
    },
    to: {
        width: 260,
        height: 320,
        opacity: 0.3,
        translateX: 0,
        translateY: 0,
        borderRadius: 15,
        // rotate: "0deg",
    },
};

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(AdoptPetDetailScreen);