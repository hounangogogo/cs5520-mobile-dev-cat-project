import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import * as Animatable from "react-native-animatable";
import { IconButton } from "react-native-paper";
import { connect } from "react-redux";
import { getAllAdoptAnimalService } from "../services/AdoptAnimalService";
import Animal from "../models/animal";
import { catAnimation, dogAnimation, logoAnimation } from "../effect/HomeEffect";


class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.navigation.setOptions({
      headerLeft: () => (
        <IconButton
          icon="menu"
          color={"black"}
          size={40}
          onPress={() => this.props.navigation.toggleDrawer()}
        />
      ),
    });

  };

  render() {
    console.log(this.props.AdoptAnimalFromDB);
    let adoptPet = this.props.AdoptAnimalFromDB;
    return (
     
        <View style={styles.screen}>
          <View style={styles.logo}>
            <Animatable.Image
              style={styles.logoImage}
              source={require("../assets/hipet.png")}
              animation={logoAnimation}
              duration={5000}
            />
          </View>
          <View style={styles.dgScreen}>
            <Animatable.View animation={dogAnimation}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("DogSearch")}
              >
                <Text style={styles.headerText}>Dog</Text>
                <Image
                  style={styles.image}
                  source={require("../assets/dog2.png")}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </Animatable.View>

            <Animatable.View animation={catAnimation}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("CatSearch")}
              >
                <Text style={styles.headerText}>Cat</Text>
                <Image
                  style={styles.image}
                  source={require("../assets/catHomePage.png")}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </Animatable.View>
          </View>
          <View style={styles.divider}></View> 

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              @CS5520 Mobile App Development
            </Text>
            <Text style={styles.footerText}></Text>
            <Text style={styles.footerText}>
              Developer: Haonan Zhao, Ying Tuo, Junyan Ling
            </Text>
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
  divider: {
    backgroundColor: "#D6D0C6",
    width: "100%",
    height: "0.4%",
    marginBottom: "3%",
  },
  dgScreen: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "8%",
    marginBottom: "15%",
  },
  image: {
    width: 200,
    height: 200,
    padding: 1,
    alignSelf: "flex-start",
  },
  logo: {
    marginTop: "20%",
  },
  logoimage: {
    paddingTop: "20%",
    alignSelf: "flex-start",
  },

  bottomContainer: {
    flexDirection: "row",
    height: 150,
  },

  middleContainer1: {
    flex: 1,
    padding: 7,
    marginRight: 2,
    marginBottom: 2,
  },
  middleContainer2: {
    flex: 1,
    padding: 7,
    marginRight: 2,
    marginBottom: 2,
  },
  middleContainer3: {
    flex: 1,
    padding: 7,
    marginRight: 2,
    marginBottom: 2,
  },
  middleContainer4: {
    flex: 1,
    padding: 7,
    marginRight: 2,
    marginBottom: 2,
  },

  lostPetsImage: {
    height: 90,
    width: 90,
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },

  lostPets1: {
    justifyContent: "center",
    alignItems: "center",
    color: "#54514B",
    fontFamily: "open-sans-bold",
    fontSize: 14,
  },

  lostPets2: {
    justifyContent: "center",
    alignItems: "center",
    color: "#54514B",
    fontFamily: "open-sans",
    fontSize: 10,
    textAlign: "center",
  },

  footer: {
    height: "10%",
    width: "100%",
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },

  footerText: {
    color: "#54514B",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "200",
  },

  headerText: {
    color: "#54514B",
    fontFamily: "open-sans-bold",
    textAlign: "center",
    fontSize: 18,
  },
});


export default HomeScreen;
