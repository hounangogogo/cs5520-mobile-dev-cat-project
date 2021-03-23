import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { IconButton, Colors } from "react-native-paper";
import { connect } from "react-redux";
import { getAllAdoptAnimalService } from "../services/AdoptAnimalService";
import Animal from "../models/animal";

const logoAnimation = {
  0: {
    width: 65,
    height: 32,
    opacity: 0.3,
    rotate: "0deg",
  },
  0.33: {
    width: 180,
    height: 100,
    opacity: 0.6,
    rotate: "20deg",
  },
  0.66: {
    width: 180,
    height: 100,
    opacity: 1,
    rotate: "-20deg",
  },
  1: {
    width: 180,
    height: 100,
    opacity: 1,
    rotate: "0deg",
  },
};

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

    this.props.getAllAdoptAnimal();
  };

  render() {
    console.log(this.props.AdoptAnimalFromDB);
    let adoptPet = this.props.AdoptAnimalFromDB;
    return (
      <ScrollView>
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

          <Text style={styles.lostPets1}>Pets Available for Adoption</Text>
          <Text>adopt number: {adoptPet.length}</Text>
          {adoptPet && (
            <View style={styles.bottomContainer}>
              <View style={styles.middleContainer1}>
                <Image
                  style={styles.lostPetsImage}
                  source={{
                    uri: "https://picsum.photos/id/237/200/300",
                  }}
                />
                <Text style={styles.lostPets2}>aa</Text>
              </View>

              <View style={styles.middleContainer4}>
                <Image
                  style={styles.lostPetsImage}
                  source={require("../assets/more.png")}
                  resizeMode="contain"
                />
                <Text style={styles.lostPets2}>Meet More!~</Text>
              </View>
            </View>
          )}

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
      </ScrollView>
    );
  }
}

const dogAnimation = {
  0: {
    translateX: -200,
  },
  0.5: {
    translateX: -30,
  },
  1: {
    translateX: 0,
  },
};

const catAnimation = {
  0: {
    translateX: 200,
  },
  0.5: {
    translateX: 30,
  },
  1: {
    translateX: 0,
  },
};

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

const stateToPropertyMapper = (state) => ({
  AdoptAnimalFromDB: state.adoptAnimalReducer.adoptAnimals,
});

const propertyToDispatchMapper = (dispatch) => ({
  getAllAdoptAnimal: () =>
    getAllAdoptAnimalService().then((data) => {
      const loadedAdoptAnimal = [];
      for (const key in data) {
        loadedAdoptAnimal.push(
          new Animal(
            key,
            data[key].animalName,
            data[key].animalBreeds,
            data[key].animalColor,
            data[key].animalSpecies,
            data[key].phone,
            data[key].animalImage
          )
        );
      }
      dispatch({
        type: "ALL_ADOPT_ANIMAL",
        allAdopt: loadedAdoptAnimal,
      });
    }),
});

export default connect(
  stateToPropertyMapper,
  propertyToDispatchMapper
)(HomeScreen);
