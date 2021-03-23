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
  ScrollView
} from "react-native";
import { Slider, Icon, CheckBox } from "react-native-elements";
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
      size: 2,
      checkedWorking: false,
      checkedSporting: false,
      checkedNonSporting: false,
      checkedHound: false,
      checkedToy: false,
      checkedTerrier: false,
      checkedMixed: false,
      checkedCurious: false,
      checkedIndependent: false,
      checkedIntelligent: false,
      checkedStubborn: false,
      checkedEnergetic: false
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
    let s = this.state.size;

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

        {this.state.chooseDog ? (
          // <View style={styles.scroll}>
            <ScrollView
              ref={(scrollView) => this.scrollView = scrollView}
              scrollEnabled={this.state.scrollEnabled}
              style={{flex:1}}
            // style={styles.form}
            >
              <View style={styles.form}>

                {(s < 0.5) ? <Text style={styles.label}>Choose your favorite size: Extra Small</Text> :
                  (s < 1.5) ? <Text style={styles.label}>Choose your favorite size: Small</Text> :
                    (s < 2.5) ? <Text style={styles.label}>Choose your favorite size: Medium</Text> :
                      (s < 3.5) ? <Text style={styles.label}>Choose your favorite size: Large</Text> :
                        (s >= 3.5) ? <Text style={styles.label}>Choose your favorite size: Extra Large</Text> :
                          ""
                }
                <Slider
                  value={this.state.size}
                  onValueChange={(size) =>
                    this.setState({ size })
                  }
                  maximumValue={4}
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

                <Text style={styles.label}>Choose breed groups you are interested in:</Text>
                <CheckBox
                  left
                  title='Working'
                  iconLeft
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  checkedColor='green'
                  checked={this.state.checkedWorking}
                  onPress={() => this.setState({ checkedWorking: !this.state.checkedWorking })}
                />
                <CheckBox
                  left
                  title='Sporting'
                  iconLeft
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  checkedColor='green'
                  checked={this.state.checkedSporting}
                  onPress={() => this.setState({ checkedSporting: !this.state.checkedSporting })}
                />
                <CheckBox
                  left
                  title='Non-Sporting'
                  iconLeft
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  checkedColor='green'
                  checked={this.state.checkedNonSporting}
                  onPress={() => this.setState({ checkedNonSporting: !this.state.checkedNonSporting })}
                />
                <CheckBox
                  left
                  title='Hound'
                  iconLeft
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  checkedColor='green'
                  checked={this.state.checkedHound}
                  onPress={() => this.setState({ checkedHound: !this.state.checkedHound })}
                />
                <CheckBox
                  left
                  title='Toy'
                  iconLeft
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  checkedColor='green'
                  checked={this.state.checkedToy}
                  onPress={() => this.setState({ checkedToy: !this.state.checkedToy })}
                />
                <CheckBox
                  left
                  title='Terrier'
                  iconLeft
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  checkedColor='green'
                  checked={this.state.checkedTerrier}
                  onPress={() => this.setState({ checkedTerrier: !this.state.checkedTerrier })}
                />
                <CheckBox
                  left
                  title='Mixed'
                  iconLeft
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  checkedColor='green'
                  checked={this.state.checkedMixed}
                  onPress={() => this.setState({ checkedMixed: !this.state.checkedMixed })}
                />

                <Text style={styles.label}>Choose the temperaments you like:</Text>
                <CheckBox
                  left
                  title='Curious'
                  iconLeft
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  checkedColor='green'
                  checked={this.state.checkedCurious}
                  onPress={() => this.setState({ checkedCurious: !this.state.checkedCurious })}
                />
                <CheckBox
                  left
                  title='Independent'
                  iconLeft
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  checkedColor='green'
                  checked={this.state.checkedIndependent}
                  onPress={() => this.setState({ checkedIndependent: !this.state.checkedIndependent })}
                />
                <CheckBox
                  left
                  title='Intelligent'
                  iconLeft
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  checkedColor='green'
                  checked={this.state.checkedIntelligent}
                  onPress={() => this.setState({ checkedIntelligent: !this.state.checkedIntelligent })}
                />
                <CheckBox
                  left
                  title='Stubborn'
                  iconLeft
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  checkedColor='green'
                  checked={this.state.checkedStubborn}
                  onPress={() => this.setState({ checkedStubborn: !this.state.checkedStubborn })}
                />
                <CheckBox
                  left
                  title='Energetic'
                  iconLeft
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  checkedColor='green'
                  checked={this.state.checkedEnergetic}
                  onPress={() => this.setState({ checkedEnergetic: !this.state.checkedEnergetic })}
                />
                <CheckBox
                  left
                  title='Wild'
                  iconLeft
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  checkedColor='green'
                  checked={this.state.checkedWild}
                  onPress={() => this.setState({ checkedWild: !this.state.checkedWild })}
                />
                <CheckBox
                  left
                  title='Alert'
                  iconLeft
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  checkedColor='green'
                  checked={this.state.checkedAlert}
                  onPress={() => this.setState({ checkedAlert: !this.state.checkedAlert })}
                />


                <Button title="Submit" onPress={this.addNewLost} />
              </View>
            </ScrollView>
          // </View>
        ) : (
            <View style={styles.scroll}>
              <ScrollView
                ref={(scrollView) => this.scrollView = scrollView}
                scrollEnabled={this.state.scrollEnabled}
                style={{height:"100%"}}
              // style={styles.screen}
              >
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
              </ScrollView>
            </View>
          )}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // margin: 35,
    padding: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#ddd",
  },
  choose: {
    margin: 50,
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    // margin: 30,
    justifyContent: "center",
    // alignItems: "center",
  },
  scroll: {
    // justifyContent: "center",
    // alignItems: "center",
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
