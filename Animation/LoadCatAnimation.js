import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

class LoadCatAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Animatable.Image
          style={styles.img}
          source={require("../assets/catfoot.png")}
          iterationCount={3}
          animation={{
            0: {
              opacity: 0,
              width: 90,
              height: 90,
            },
            0.5: {
              opacity: 1,
              height: 120,
              width: 120,
            },
            1: {
              opacity: 0,
              width: 90,
              height: 90,
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

export default LoadCatAnimation;
