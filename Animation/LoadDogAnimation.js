import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

class LoadDogAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Animatable.Image
          style={styles.img}
          source={require("../assets/dogfood.png")}
          iterationCount={3}
          animation={{
            0: {
              opacity: 0,
              width: 100,
              height: 100,
            },
            0.5: {
              opacity: 1,
              height: 150,
              width: 150,
            },
            1: {
              opacity: 0,
              width: 100,
              height: 100,
            },
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
  },
});

export default LoadDogAnimation;
