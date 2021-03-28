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
      scores: [],
      filterBreeds: [],
      adaptabilityWeight: result.adaptability - 5,
      childFriendlyWeight: result.childFriendly - 5,
      dogFriendlyWeight: result.dogFriendly - 5,
      energyLevelWeight: result.energyLevel - 5,
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
    let { filterBreeds } = this.state;
    for (let i = 0; i < filterBreeds.length; i++) {
      console.log("@ curr filterBreeds: ", filterBreeds[i]);
      let score = this.calScores(filterBreeds[i]);
      this.state.scores.push(Math.floor(score * 100) / 100);
    }
    // console.log(this.state.filterBreeds);
  };

  calScores = (pet) => {
    let score =
      (100 +
        pet.adaptability * this.state.adaptabilityWeight +
        pet.child_friendly * this.state.childFriendlyWeight +
        pet.dog_friendly * this.state.dogFriendlyWeight +
        pet.energy_level * this.state.energyLevelWeight) /
      2;

    return score;
  };

  // componentWillUnmount = () => {
  //     clearInterval(this.counterTimer);
  // }

  renderGridItem = (itemData) => {
    console.log("@itemData", itemData);
    console.log("@score", this.state.scores);
    let catImage = itemData.item.image
      ? itemData.item.image.url
      : "https://i.pinimg.com/736x/33/32/6d/33326dcddbf15c56d631e374b62338dc.jpg";
    return (
      <View style={{ flexDirection: "row" }}>
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
          </View>
        </TouchableOpacity>
        <View
          style={{
            marginLeft: "8%",
            marginBottom: "5%",
            marginTop: "5%",
            marginRight: "8%",
          }}
        >
          <Text style={styles.text}>{itemData.item.name}</Text>
          <Text style={styles.text}>
            Adaptability:{itemData.item.adaptability}
          </Text>
          <Text style={styles.text}>
            Child Friendly:{itemData.item.child_friendly}
          </Text>
          <Text style={styles.text}>
            Dog Friendly:{itemData.item.dog_friendly}
          </Text>
          <Text style={styles.text}>
            Energy Level:{itemData.item.energy_level}
          </Text>
          <Text style={styles.text}>
            Total Score: {this.state.scores[itemData.index]}
          </Text>
        </View>
      </View>
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
            <Text
              style={{
                fontFamily: "open-sans-bold",
                marginBottom: "10%",
                marginTop: "10%",
                marginLeft: "8%",
              }}
            >
              TOP 5 Cats that most suitable for you!
            </Text>

            <FlatList
              keyExtractor={(item, index) => index}
              data={this.state.filterBreeds}
              renderItem={this.renderGridItem}
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
    marginLeft: "5%",
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
    // alignItems: "center",
  },
  eachCat: {
    flexDirection: "row",
  },
  text: {
    fontFamily: "open-sans-bold",
  },
});
