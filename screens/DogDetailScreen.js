import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import PropBar from "../components/PropBar.js";
import { IconButton, Colors } from "react-native-paper";

import { Col, Row, Grid } from "react-native-easy-grid";
import * as Animatable from "react-native-animatable";

const customerImageIn = {
  from: {
    width: 26,
    height: 32,
    opacity: 0,
    translateX: -100,
    translateY: -100,
    borderRadius: 15,
    // rotate: "40deg",
  },
  to: {
    width: 250,
    height: 250,
    opacity: 1,
    translateX: 0,
    translateY: 0,
    borderRadius: 15,
    // rotate: "0deg",
  },
};

class DogDetailScreen extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      breed: this.props.route.params.breed,
      img: this.props.route.params.img,
      breed_id: this.props.route.params.breed_id,
      dog: "",
      bred_for: "",
      name: "",
      wikipedia_url: "",
      temperament: "",
      origin: "",
      life_span: "",
      description: "",
    };
  }

  setHeaderBar = () => {
    this.props.navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="dog"
          color={"#f2a154"}
          size={40}
          onPress={() =>
            this.props.navigation.navigate("AdoptDetail", {
              type: "dog",
              breed: this.state.breed,
            })
          }
        />
      ),
    });
  };

  componentDidMount = () => {
    this.setHeaderBar();

    // fetch(
    //   `https://api.thedogapi.com/v1/images/search?breed_ids=` +
    //     this.state.breed_id
    // )
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //     this.setState({
    //       dogDesc: res,
    //       description: res[0].description,
    //     });
    //   });

    fetch(`https://api.thedogapi.com/v1/breeds/search?q=` + this.state.breed)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          dog: res,
          name: res[0].name,
          wikipedia_url: res[0].wikipedia_url,
          temperament: res[0].temperament,
          origin: res[0].origin,
          life_span: res[0].life_span,
          description: res[0].description,
          bred_for: res[0].bred_for,
          tableBoardColor: "#D6D0C6",
          tableCellColor: "#F7F6E7",
          tableCellColorDark: "#D6D0C6",
        });
      });
  };

  render() {
    console.log("this is the res of dog", this.state.dogDesc);
    const DETAILS = [
      ["origin", this.state.origin],
      ["life_span", this.state.life_span],
      ["temperament", this.state.temperament],
    ];
    console.log(DETAILS);
    return (

      <ScrollView style={styles.screen}>

        <View>
          <Text></Text>
          <Text style={styles.headText}>{this.state.breed}</Text>
        </View>

        <View style={styles.topContainer}>
          <Animatable.Image
            style={styles.image}
            source={{
              uri: this.state.img,
            }}
            animation={customerImageIn}
            duration={2000}
          />
        </View>

        <View>
          <Text style={styles.headText}>Description</Text>
          <Text style={styles.text}>{this.state.bred_for}</Text>
          <Text></Text>
        </View>

        <View style={styles.outsideContainer}>
          <Text style={styles.headText}>Introduction</Text>

          <View style={styles.tableContainer}>
            <Grid style={{ borderRadius: 100 }}>
              <Row
                style={{
                  // borderWidth: 0.3,
                  borderColor: this.state.tableBoardColor,
                  backgroundColor: this.state.tableCellColorDark,
                  height: 20,
                }}
              >
                <Col>
                  <Text style={styles.tableHead}>Origin</Text>
                </Col>
                <Col>
                  <Text style={styles.tableText}>{this.state.origin}</Text>
                </Col>
              </Row>

              <Row
                style={{
                  // borderWidth: 0.3,
                  borderColor: this.state.tableBoardColor,
                  backgroundColor: this.state.tableCellColor,
                  height: 20,
                }}
              >
                <Col>
                  <Text style={styles.tableHead}>Life Span</Text>
                </Col>
                <Col>
                  <Text style={styles.tableText}>
                    {this.state.life_span} years
                  </Text>
                </Col>
              </Row>

              <Row
                style={{
                  // borderWidth: 0.3,
                  borderColor: this.state.tableBoardColor,
                  backgroundColor: this.state.tableCellColorDark,
                  height: 40,
                }}
              >
                <Col>
                  <Text style={styles.tableHead}>Temperament</Text>
                </Col>
                <Col>
                  <Text style={styles.tableText}>{this.state.temperament}</Text>
                </Col>
              </Row>
            </Grid>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#ECEBE4",
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

  topContainer: {
    // flexDirection: "column",
    // height: 300,
    // width: "100%",
    // marginTop: "50%",
    // backgroundColor: "#ECEBE4",
    justifyContent: "center",
    alignItems: "center",
  },

  // topMiddleContainer1: {
  //   flex: 1,
  //   marginRight: 2,
  //   marginLeft: "5%",
  // },
  // topMiddleContainer2: {
  //   flex: 2,
  //   marginRight: "5%",
  // },
  bottomContainer: {
    // flexDirection: "row",
    // height: 500,
    // padding: 7,
    // marginRight: 1,
    // marginBottom: 2,
    // marginTop: "10%",
  },
  tableContainer: {
    justifyContent: "center",
    padding: 10,
    borderRadius: 100,
  },
  // bottomMiddleContainer1: {
  //   flex: 1.4,
  //   marginLeft: "3%",
  //   marginBottom: 2,
  //   borderRadius: 15,
  // },
  // bottomMiddleContainer2: {
  //   flex: 1,
  //   marginTop: "5%",
  //   marginBottom: 2,
  // },
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
    marginBottom: 5,
    textAlign: 'center',
  },
  breedText: {
    color: "#54514B",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 5,
    textAlign: 'center',
  },
  text: {
    color: "#54514B",
    fontSize: 15,
    marginRight: "5%",
    textAlign: 'center',
  },
});

export default DogDetailScreen;
