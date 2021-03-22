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
  Dimensions,
  ScrollView,
  SafeAreaView
} from "react-native";
import { Slider, Icon } from "react-native-elements";
import { connect } from "react-redux";
import * as Animatable from "react-native-animatable";
import DragSortableView from './DragSortableView';
import { CheckBox } from 'react-native-elements';

import { TEST_DATA } from './data';

const { width } = Dimensions.get('window')

const parentWidth = width
const childrenWidth = width
const childrenHeight = 48

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

      data: TEST_DATA,
      scrollEnabled: true,

    };
  }

  render() {
    let s = this.state.size;

    console.log(this.state);
    return (
      <ScrollView
        ref={(scrollView) => this.scrollView = scrollView}
        scrollEnabled={this.state.scrollEnabled}
        style={styles.screen}>
        {/* <View style={styles.screen}> */}

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
          <View>
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
                iconType='material'
                checkedIcon='clear'
                uncheckedIcon='add'
                checkedColor='red'
                checked={this.state.checkedWorking}
                onPress={() => this.setState({ checkedWorking: !this.state.checkedWorking })}
              />
              <CheckBox
                left
                title='Sporting'
                iconLeft
                iconType='material'
                checkedIcon='clear'
                uncheckedIcon='add'
                checkedColor='red'
                checked={this.state.checkedSporting}
                onPress={() => this.setState({ checkedSporting: !this.state.checkedSporting })}
              />
              <CheckBox
                left
                title='Non-Sporting'
                iconLeft
                iconType='material'
                checkedIcon='clear'
                uncheckedIcon='add'
                checkedColor='red'
                checked={this.state.checkedNonSporting}
                onPress={() => this.setState({ checkedNonSporting: !this.state.checkedNonSporting })}
              />
              <CheckBox
                left
                title='Hound'
                iconLeft
                iconType='material'
                checkedIcon='clear'
                uncheckedIcon='add'
                checkedColor='red'
                checked={this.state.checkedHound}
                onPress={() => this.setState({ checkedHound: !this.state.checkedHound })}
              />
              <CheckBox
                left
                title='Toy'
                iconLeft
                iconType='material'
                checkedIcon='clear'
                uncheckedIcon='add'
                checkedColor='red'
                checked={this.state.checkedToy}
                onPress={() => this.setState({ checkedToy: !this.state.checkedToy })}
              />
              <CheckBox
                left
                title='Terrier'
                iconLeft
                iconType='material'
                checkedIcon='clear'
                uncheckedIcon='add'
                checkedColor='red'
                checked={this.state.checkedTerrier}
                onPress={() => this.setState({ checkedTerrier: !this.state.checkedTerrier })}
              />
              <CheckBox
                left
                title='Mixed'
                iconLeft
                iconType='material'
                checkedIcon='clear'
                uncheckedIcon='add'
                checkedColor='red'
                checked={this.state.checkedMixed}
                onPress={() => this.setState({ checkedMixed: !this.state.checkedMixed })}
              />

              <Text style={styles.label}>Rank the temperaments you prefer:</Text>

              <DragSortableView
                dataSource={this.state.data}

                parentWidth={parentWidth}

                childrenWidth={childrenWidth}
                childrenHeight={childrenHeight}

                scaleStatus={'scaleY'}

                onDragStart={(startIndex, endIndex) => {
                  this.setState({
                    scrollEnabled: false
                  })
                }}
                onDragEnd={(startIndex) => {
                  this.setState({
                    scrollEnabled: true
                  })
                }}
                onDataChange={(data) => {
                  if (data.length != this.state.data.length) {
                    this.setState({
                      data: data
                    })
                  }
                }}
                keyExtractor={(item, index) => item.txt} // FlatList作用一样，优化
                onClickItem={(data, item, index) => {

                }}
                renderItem={(item, index) => {
                  return this.renderItem(item, index)
                }}
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
      </ScrollView>
    )
  }

  renderItem(item, index) {
    return (
      <View style={styles.item}>
        <View style={styles.item_children}>
          <Image
            style={styles.item_icon}
            source={item.icon} />
          <Text style={styles.item_text}> {item.txt}</Text>
        </View>
      </View>
    )
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
    marginTop: 30,
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

  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  item: {
    width: childrenWidth,
    height: childrenHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item_children: {
    width: childrenWidth,
    height: childrenHeight - 4,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  item_icon: {
    width: childrenHeight * 0.6,
    height: childrenHeight * 0.6,
    marginLeft: 15,
    resizeMode: 'contain',
  },
  item_text: {
    marginRight: 15,
    color: 'green'
  }
});

export default AdoptScreen;
