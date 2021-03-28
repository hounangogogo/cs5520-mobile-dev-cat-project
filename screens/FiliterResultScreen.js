import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
  Animated,
  ScrollView,
  Dimensions,
} from "react-native";
import LoadCatAnimation from "../Animation/LoadCatAnimation";
const dimensions = Dimensions.get("window");
export default class FiliterResultScreen extends Component {
  constructor(props) {
    super(props);
    let result = this.props.route.params.rules;
    console.log(result);
    this.state = {
      weight: this.props,
      breeds: [],
      filterBreeds: [],
      adaptabilityWeight: result.adaptability,
      childFriendlyWeight: result.childFriendly,
      dogFriendlyWeight: result.dogFriendly,
      energyLevelWeight: result.energyLevel,
    };
  }

  componentDidMount = () => {
    fetch(
      `https://api.thecatapi.com/v1/breeds?api_key=28d63f2d-2529-4a36-9bca-af21c9266759`
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          breeds: res,
          filterBreeds: res,
        });
        //console.log(this.state.filterBreeds);

        this.sortPets();
      });
    this.counterTimer = setTimeout(
      () =>
        this.setState({
          isAnimationTimeOut: true,
        }),
      2300
    );
  };

  sortPets = () => {
    console.log("@ before this.state.filterBreeds", this.state.filterBreeds);
    this.state.filterBreeds.sort((pet1, pet2) => {
      return this.calScores(pet2) - this.calScores(pet1);
    });
    console.log("@this.state.filterBreeds", this.state.filterBreeds);
    this.setState({
      filterBreeds: this.state.filterBreeds.slice(0, 5),
    });
  };

  calScores = (pet) => {
    let score =
      pet.adaptability * this.state.adaptabilityWeight +
      pet.child_friendly * this.state.childFriendlyWeight +
      pet.dog_friendly * this.state.dogFriendlyWeight +
      pet.energy_level * this.state.energyLevelWeight;

    console.log("@score", score);
    return score;
  };

  // componentWillUnmount = () => {
  //     clearInterval(this.counterTimer);
  // }

  renderGridItem = (itemData) => {
    let catImage = itemData.item.image
      ? itemData.item.image.url
      : "https://i.pinimg.com/736x/33/32/6d/33326dcddbf15c56d631e374b62338dc.jpg";
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() =>
          this.props.navigation.navigate("CatDetail", {
            breed: itemData.item.name,
            img: catImage,
            breed_id: itemData.item.id,
          })
        }
      >
        <View style={styles.catInfo}>
          {itemData.item.image ? (
            <Image
              style={styles.image}
              source={{
                uri: catImage,
              }}
            />
          ) : (
            <Image
              style={styles.image}
              source={{
                uri: catImage,
              }}
            />
          )}
          <Text style={styles.text}>{itemData.item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View
        style={
          this.state.isAnimationTimeOut ? styles.screen : styles.animationScreen
        }
      >
        {this.state.isAnimationTimeOut ? (
          <View>
            <Image
              style={styles.searchImage}
              source={require("../assets/catSearch.png")}
              resizeMode="contain"
            />

            <FlatList
              keyExtractor={(item, index) => index}
              data={this.state.filterBreeds}
              renderItem={this.renderGridItem}
              numColumns={2}
            />
          </View>
        ) : (
          <LoadCatAnimation />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    // margin: 35,
  },
  animationScreen: {
    flex: 1,
    // margin: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    // paddingHorizontal: 2,
    // paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#30475e",
  },
  formContainer: {
    width: "100%",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 200,
  },
  image: {
    height: 160,
    width: 160,
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  imageContainer: {},
  searchImage: {
    width: dimensions.width,
    height: dimensions.height / 5,
    marginTop: "-5%",
    alignSelf: "flex-start",
  },
  catInfo: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "open-sans-bold",
  },
});
