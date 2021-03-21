import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import PropBar from "./PropBar.js";

import { Col, Row, Grid } from "react-native-easy-grid";
import * as Animatable from "react-native-animatable";

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

  componentDidMount = () => {
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
      <View style={styles.screen}>
        <View style={styles.topContainer}>
          {/* picture block */}
          <View style={styles.topMiddleContainer1}>
            <Animatable.Image
              style={styles.image}
              source={{
                uri: this.state.img,
              }}
              animation={customerImageIn}
              duration={5000}
            />
          </View>

          {/* description block */}
          <View style={styles.topMiddleContainer2}>
            <Text style={styles.headText}>Description</Text>
            <Text style={styles.text}>{this.state.bred_for}</Text>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          {/* details block */}
          <View style={styles.bottomMiddleContainer1}>
            <Text style={styles.headText}>Introduction</Text>
            <Grid style={{ borderRadius: 100 }}>
              <Row
                style={{
                  borderWidth: 0.3,
                  borderColor: this.state.tableBoardColor,
                  backgroundColor: this.state.tableCellColorDark,
                  height: "10%",
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
                  borderWidth: 0.3,
                  borderColor: this.state.tableBoardColor,
                  backgroundColor: this.state.tableCellColor,
                  height: "10%",
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
                  borderWidth: 0.3,
                  borderColor: this.state.tableBoardColor,
                  backgroundColor: this.state.tableCellColorDark,
                  height: "22%",
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

          {/* characteristics block */}
          <View style={styles.bottomMiddleContainer2}>
            {/* <PropBar hue="25" saturation="85.5" characs={CHARACS} /> */}
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
    backgroundColor: "#ECEBE4",
  },
  image: {
    height: 160,
    width: 130,
  },

  topContainer: {
    flexDirection: "row",
    height: 300,
    width: "100%",
    marginTop: "50%",
    backgroundColor: "#ECEBE4",
  },

  topMiddleContainer1: {
    flex: 1,
    marginRight: 2,
    marginLeft: "5%",
  },
  topMiddleContainer2: {
    flex: 2,
    marginRight: "5%",
  },
  bottomContainer: {
    flexDirection: "row",
    height: 500,
    padding: 7,
    marginRight: 1,
    marginBottom: 2,
    marginTop: "10%",
  },

  bottomMiddleContainer1: {
    flex: 1.4,
    marginLeft: "3%",
    marginBottom: 2,
    borderRadius: 15,
  },
  bottomMiddleContainer2: {
    flex: 1,
    marginTop: "5%",
    marginBottom: 2,
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
    marginBottom: "5%",
  },
  text: {
    color: "#54514B",
    fontSize: 15,
    textAlign: "auto",
    marginRight: "5%",
  },
});

export default DogDetailScreen;
