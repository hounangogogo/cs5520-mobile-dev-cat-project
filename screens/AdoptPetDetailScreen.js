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
            animal: null,
            dbAnimal: null,
            animalId: props.route.params.animalId,
            accessToken: props.route.params.token,
            isFromApi: props.route.params.isFromApi,
            tableBoardColor: "#D6D0C6",
            tableCellColor: "#F7F6E7",
            tableCellColorDark: "#D6D0C6",
        }
    }


    componentDidMount = () => {
        console.log()
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
        console.log("here:")
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
        let isFromApi = this.state.isFromApi;
        return (
            <View>
                {isFromApi
                    ?
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

                            <Text></Text>

                            <View style={styles.tableContainer}>
                                <Grid style={{ borderRadius: 100 }}>
                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColorDark,
                                            height: 20,
                                            borderWidth: 0.3,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Type</Text>
                                        </Col>
                                        <Col>
                                            {apiAnimal.species ?
                                                <Text style={styles.tableText}>{apiAnimal.species}</Text> :
                                                <Text style={styles.tableText}>No data available</Text>
                                            }
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColor,
                                            height: 20,
                                            borderWidth: 0.3,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Breeds</Text>
                                        </Col>
                                        <Col>
                                            {apiAnimal.breeds["primary"] ?
                                                <Text style={styles.tableText}>{apiAnimal.breeds["primary"]}</Text> :
                                                <Text style={styles.tableText}>No data available</Text>
                                            }
                                        </Col>
                                    </Row>
                                    <Row
                                        style={{

                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColorDark,
                                            height: 20,
                                            borderWidth: 0.3,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Name</Text>
                                        </Col>
                                        <Col>
                                            {apiAnimal.name ?
                                                <Text style={styles.tableText}>{apiAnimal.name}</Text> :
                                                <Text style={styles.tableText}>No data available</Text>
                                            }
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColor,
                                            height: 20,
                                            borderWidth: 0.3,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Age</Text>
                                        </Col>
                                        <Col>
                                            {apiAnimal.age ?
                                                <Text style={styles.tableText}>{apiAnimal.age}</Text> :
                                                <Text style={styles.tableText}>No data available</Text>
                                            }
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColorDark,
                                            height: 20,
                                            borderWidth: 0.3,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Gender</Text>
                                        </Col>
                                        <Col>
                                            {apiAnimal.gender ?
                                                <Text style={styles.tableText}>{apiAnimal.gender}</Text> :
                                                <Text style={styles.tableText}>No data available</Text>
                                            }
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColor,
                                            height: 20,
                                            borderWidth: 0.3,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Size</Text>
                                        </Col>
                                        <Col>
                                            {apiAnimal.size ?
                                                <Text style={styles.tableText}>{apiAnimal.size}</Text> :
                                                <Text style={styles.tableText}>No data available</Text>
                                            }
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColorDark,
                                            height: 20,
                                            borderWidth: 0.3,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Phone</Text>
                                        </Col>
                                        <Col>
                                            {apiAnimal.contact["phone"] ?
                                                <Text style={styles.tableText}>{apiAnimal.contact["phone"]}</Text> :
                                                <Text style={styles.tableText}>No data available</Text>
                                            }
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColor,
                                            height: 20,
                                            borderWidth: 0.3,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Email</Text>
                                        </Col>
                                        <Col>
                                            {apiAnimal.contact["email"] ?
                                                <Text style={styles.tableText}>{apiAnimal.contact["email"]}</Text> :
                                                <Text style={styles.tableText}>No data available</Text>
                                            }
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColorDark,
                                            height: 20,
                                            borderWidth: 0.3,
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
                    :
                    dbAnimal &&
                    <View>
                        <View style={styles.topContainer}>
                            {dbAnimal.imageUri !== null ?
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

                            <Text></Text>

                            <View style={styles.tableContainer}>
                                <Grid style={{ borderRadius: 100 }}>
                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColorDark,
                                            height: 20,
                                            borderWidth: 0.3,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Type</Text>
                                        </Col>
                                        <Col>
                                            {dbAnimal.species ?
                                                <Text style={styles.tableText}>{dbAnimal.species}</Text> :
                                                <Text style={styles.tableText}>No data available</Text>
                                            }
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColor,
                                            height: 20,
                                            borderWidth: 0.3,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Breeds</Text>
                                        </Col>
                                        <Col>
                                            {dbAnimal.breeds ?
                                                <Text style={styles.tableText}>{dbAnimal.breeds}</Text> :
                                                <Text style={styles.tableText}>No data available</Text>
                                            }
                                        </Col>
                                    </Row>
                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColorDark,
                                            height: 20,
                                            borderWidth: 0.3,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Name</Text>
                                        </Col>
                                        <Col>
                                            {dbAnimal.name ?
                                                <Text style={styles.tableText}>{dbAnimal.name}</Text> :
                                                <Text style={styles.tableText}>No data available</Text>
                                            }
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColor,
                                            height: 20,
                                            borderWidth: 0.3,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Age</Text>
                                        </Col>
                                        <Col>
                                            {dbAnimal.age ?
                                                <Text style={styles.tableText}>{dbAnimal.age}</Text> :
                                                <Text style={styles.tableText}>No data available</Text>
                                            }
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColorDark,
                                            height: 20,
                                            borderWidth: 0.3,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Gender</Text>
                                        </Col>
                                        <Col>
                                            {dbAnimal.gender ?
                                                <Text style={styles.tableText}>{dbAnimal.gender}</Text> :
                                                <Text style={styles.tableText}>No data available</Text>
                                            }
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColor,
                                            height: 20,
                                            borderWidth: 0.3,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Size</Text>
                                        </Col>
                                        <Col>
                                            {dbAnimal.size ?
                                                <Text style={styles.tableText}>{dbAnimal.size}</Text> :
                                                <Text style={styles.tableText}>No data available</Text>
                                            }
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColorDark,
                                            height: 20,
                                            borderWidth: 0.3,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Phone</Text>
                                        </Col>
                                        <Col>
                                            {dbAnimal.phone ?
                                                <Text style={styles.tableText}>{dbAnimal.phone}</Text> :
                                                <Text style={styles.tableText}>No data available</Text>
                                            }
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColor,
                                            height: 20,
                                            borderWidth: 0.3,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Email</Text>
                                        </Col>
                                        <Col>
                                            {dbAnimal.email ?
                                                <Text style={styles.tableText}>{dbAnimal.email}</Text> :
                                                <Text style={styles.tableText}>No data available</Text>
                                            }
                                        </Col>
                                    </Row>

                                    <Row
                                        style={{
                                            borderColor: this.state.tableBoardColor,
                                            backgroundColor: this.state.tableCellColorDark,
                                            height: 20,
                                            borderWidth: 0.3,
                                        }}
                                    >
                                        <Col>
                                            <Text style={styles.tableHead}>Address</Text>
                                        </Col>
                                        <Col>
                                            {dbAnimal.address ?
                                                <Text style={styles.tableText}>{dbAnimal.address}</Text> :
                                                <Text style={styles.tableText}>No data available</Text>
                                            }
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
    container: {
        flex: 1,
        // marginTop: 50,
        // marginBottom: 50,
        backgroundColor: 'white',

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
    row: {
        flexDirection: "row",
        justifyContent: "center",
        // padding: 16,
        backgroundColor: '#ddd',
        marginBottom: 3
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