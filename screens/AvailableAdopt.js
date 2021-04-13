import React, { Component } from "react";
import { View, Text, Button, StyleSheet, FlatList, Image } from "react-native";

class AvailableAdopt extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      accessToken: "",
      type: this.props.route.params.type,
      breed: this.props.route.params.breed,
      animals: [],
    };
  }

  componentDidMount = () => {
    this.getToken();
  };

  getToken = () => {
    fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        grant_type: "client_credentials",
        client_id: "A7O634I1AYU18NP1aqqyedhc6Z7VbJVHHDKwOOMBEcYIGyawDU",
        client_secret: "anavA0L8rN65ll1YELbh9NzIqLIDKjakuS3C9inU",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          accessToken: res.access_token,
        });
        this.getAvaiable();
      });
  };

  getAvaiable = () => {
    let token = this.state.accessToken;
    let breed = this.state.breed;
    fetch(`https://api.petfinder.com/v2/animals?breed=${breed}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.animals.length !== 0) {
          this.setState({
            animals: res.animals,
          });
        }
      });
  };

  renderGridItem = (itemData) => {
    console.log(this.state.animals.length);
    let catImage =
      itemData.item.photos.length !== 0
        ? itemData.item.photos[0].small
        : "https://i.pinimg.com/736x/33/32/6d/33326dcddbf15c56d631e374b62338dc.jpg";
    return (
      <View style={styles.gridItem}>
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
        <Text>{itemData.item.name}</Text>
        <Text>{itemData.item.size}</Text>
      </View>
    );
  };

  render() {
    let animals = this.state.animals;
    return (
      <View style={{flex: 1}}>
        {this.state.animals.length !== 0 ? (
          <View style={{flex:1}}>
            <Text
              style={{
                fontFamily: "open-sans-bold",
                marginBottom: "3%",
                marginTop: "5%",
                marginLeft: "8%",
                fontSize: 16,
              }}
            >
              Available Pets For Adoption
            </Text>
            <FlatList
              keyExtractor={(item, index) => index}
              data={animals}
              renderItem={this.renderGridItem}
              numColumns={2}
            />
          </View>
        ) : (
          <View>
            <Text style={styles.text}>We Are Sorry... </Text>
            <Text style={styles.text}>No Available Pets for Adoption Now</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // margin: 35,
  },
  animationScreen: {
    flex: 1,
    // margin: 35,
    alignItems: "center",
    justifyContent: "center",
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

  text: {
    fontFamily: "open-sans-bold",
    marginBottom: "3%",
    marginTop: "20%",
    marginLeft: "8%",
    fontSize: 18,
    color: "#ddd",
    alignItems: "center",
  },
});

export default AvailableAdopt;
