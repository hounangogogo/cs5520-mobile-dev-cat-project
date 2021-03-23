import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Slider, Icon } from "react-native-elements";
import { connect } from "react-redux";
import * as Animatable from "react-native-animatable";
import { IconButton, Colors } from 'react-native-paper';

const AnimatableTouch = Animatable.createAnimatableComponent(TouchableOpacity);

class AdoptScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chooseDog: true,

      // for cat
      adaptability: 5,
      affectionLevel: 5,
      childFriendly: 5,
      dogFriendly: 5,
      energyLevel: 5,
      grooming: 5,
      hairless: 5,

      // for dog
    };
  }

  componentDidMount = () => {
    this.props.navigation.setOptions({
      headerLeft: () => (
          <IconButton
              icon="home"
              color={'black'}
              size={40}
              onPress={() => this.props.navigation.navigate('Home')}
          />

      ),
      headerRight: () => (
          <IconButton
              icon="bullhorn"
              color={'black'}
              size={40}
              onPress={() => this.props.navigation.navigate('NewAdpot')}
          />

      )
  })
  }
  
  render() {
    console.log(this.state);
    return (
      <View style={styles.screen}>
        <View style={styles.choose}>
          <AnimatableTouch
            onPress={() => {
              this.setState({
                chooseDog: true,
              });
            }}
          >
            <Animatable.Image
              animation={{
                from: {
                  height: this.state.chooseDog ? 100 : 150,
                  width: this.state.chooseDog ? 100 : 150,
                },
                to: {
                  height: this.state.chooseDog ? 150 : 100,
                  width: this.state.chooseDog ? 150 : 100,
                },
              }}
              style={styles.img}
              source={require("../assets/img/dog.png")}
            />
          </AnimatableTouch>
          <AnimatableTouch
            onPress={() => {
              this.setState({
                chooseDog: false,
              });
            }}
          >
            <Animatable.Image
              animation={{
                from: {
                  height: this.state.chooseDog ? 150 : 100,
                  width: this.state.chooseDog ? 150 : 100,
                },
                to: {
                  height: this.state.chooseDog ? 100 : 150,
                  width: this.state.chooseDog ? 100 : 150,
                },
              }}
              style={styles.img}
              source={require("../assets/img/cat.png")}
            />
          </AnimatableTouch>
        </View>

        <View style={styles.form}>
          {this.state.chooseDog ? (
            <View>
              <Text>Dog Form</Text>
              <View style={styles.form}>
                <Text style={styles.label}>Pet name</Text>
                <TextInput
                  style={styles.textInput}
                  value={this.state.name}
                  onChange={(e) => {
                    this.setState({
                      name: e.target.value,
                    });
                  }}
                  placeholder="Pet Name"
                />

                <Text style={styles.label}>Pet Color</Text>
                <TextInput
                  style={styles.textInput}
                  value={this.state.color}
                  onChange={(e) => {
                    this.setState({
                      color: e.target.value,
                    });
                  }}
                  placeholder="Pet Color"
                />

                <Text style={styles.label}>Pet Breeds</Text>
                <TextInput
                  style={styles.textInput}
                  value={this.state.breeds}
                  onChange={(e) => {
                    this.setState({
                      breeds: e.target.value,
                    });
                  }}
                  placeholder="Pet Breeds"
                />

                <Text style={styles.label}>Pet Species</Text>
                <TextInput
                  style={styles.textInput}
                  value={this.state.species}
                  onChange={(e) => {
                    this.setState({
                      species: e.target.value,
                    });
                  }}
                  placeholder="Pet Species"
                />

                <Text style={styles.label}>Contact</Text>
                <TextInput
                  style={styles.textInput}
                  value={this.state.phone}
                  onChange={(e) => {
                    this.setState({
                      phone: e.target.value,
                    });
                  }}
                  placeholder="Phone"
                />

                <Button title="Submit" onPress={this.addNewLost} />
              </View>
            </View>
          ) : (
            <View>
              {/* Cat Form */}
              <View style={styles.form}>
                <Text style={styles.label}>
                  Adaptability: {Math.round(this.state.adaptability, 2)}
                </Text>
                <Slider
                  value={this.state.adaptability}
                  onValueChange={(adaptability) =>
                    this.setState({ adaptability })
                  }
                  maximumValue={10}
                  thumbStyle={{
                    height: 20,
                    width: 20,
                    backgroundColor: "transparent",
                  }}
                  thumbProps={{
                    children: (
                      <Icon
                        name="pets"
                        size={10}
                        reverse
                        containerStyle={{ bottom: 10, right: 10 }}
                        color="#54514B"
                      />
                    ),
                  }}
                />

                <Text style={styles.label}>
                  AffectionLevel: {Math.round(this.state.affectionLevel, 2)}
                </Text>
                <Slider
                  value={this.state.affectionLevel}
                  onValueChange={(affectionLevel) =>
                    this.setState({ affectionLevel })
                  }
                  maximumValue={10}
                  thumbStyle={{
                    height: 20,
                    width: 20,
                    backgroundColor: "transparent",
                  }}
                  thumbProps={{
                    children: (
                      <Icon
                        name="pets"
                        size={10}
                        reverse
                        containerStyle={{ bottom: 10, right: 10 }}
                        color="#54514B"
                      />
                    ),
                  }}
                />

                <Text style={styles.label}>
                  Child Friendly: {Math.round(this.state.childFriendly, 2)}
                </Text>
                <Slider
                  value={this.state.childFriendly}
                  onValueChange={(childFriendly) =>
                    this.setState({ childFriendly })
                  }
                  maximumValue={10}
                  thumbStyle={{
                    height: 20,
                    width: 20,
                    backgroundColor: "transparent",
                  }}
                  thumbProps={{
                    children: (
                      <Icon
                        name="pets"
                        size={10}
                        reverse
                        containerStyle={{ bottom: 10, right: 10 }}
                        color="#54514B"
                      />
                    ),
                  }}
                />

                <Text style={styles.label}>
                  Dog Friendly: {Math.round(this.state.dogFriendly, 2)}
                </Text>
                <Slider
                  value={this.state.dogFriendly}
                  onValueChange={(dogFriendly) =>
                    this.setState({ dogFriendly })
                  }
                  maximumValue={10}
                  thumbStyle={{
                    height: 20,
                    width: 20,
                    backgroundColor: "transparent",
                  }}
                  thumbProps={{
                    children: (
                      <Icon
                        name="pets"
                        size={10}
                        reverse
                        containerStyle={{ bottom: 10, right: 10 }}
                        color="#54514B"
                      />
                    ),
                  }}
                />

                <Text style={styles.label}>
                  Energy Level: {Math.round(this.state.energyLevel, 2)}
                </Text>
                <Slider
                  value={this.state.energyLevel}
                  onValueChange={(energyLevel) =>
                    this.setState({ energyLevel })
                  }
                  maximumValue={10}
                  thumbStyle={{
                    height: 20,
                    width: 20,
                    backgroundColor: "transparent",
                  }}
                  thumbProps={{
                    children: (
                      <Icon
                        name="pets"
                        size={10}
                        reverse
                        containerStyle={{ bottom: 10, right: 10 }}
                        color="#54514B"
                      />
                    ),
                  }}
                />

                <Text style={styles.label}>
                  Grooming: {Math.round(this.state.grooming, 2)}
                </Text>
                <Slider
                  value={this.state.grooming}
                  onValueChange={(grooming) => this.setState({ grooming })}
                  maximumValue={10}
                  thumbStyle={{
                    height: 20,
                    width: 20,
                    backgroundColor: "transparent",
                  }}
                  thumbProps={{
                    children: (
                      <Icon
                        name="pets"
                        size={10}
                        reverse
                        containerStyle={{ bottom: 10, right: 10 }}
                        color="#54514B"
                      />
                    ),
                  }}
                />

                <Button title="Submit" onPress={this.addNewLost} />
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // margin: 35,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#ddd",
  },
  choose: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  img: {
    height: 100,
    width: 100,
  },
});

export default AdoptScreen;
