import { FontDisplay } from "expo-font";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class PropBar extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ collapsed: false });
    }, 3000);
  }

  render() {
    const { collapsed } = this.state;
    const { hue, saturation, characs } = this.props;

    return (
      <View
        id="characteristics"
        style={this.state.collapsed ? styles.collapsed : styles.container}
      >
        <Text>Characteristics</Text>
        <View>
          {characs.map((charac, index) => (
            <View>
              <Text style={styles.pText}>{charac.type}</Text>
              <View
                style={styles.li}
                key={charac.type}
                style={{
                  width: `${charac.level * 50}%`,
                  backgroundColor: `hsl(${hue}, ${saturation}%, ${
                    100 / (index + 3.5)
                  }%)`,
                }}
              >
                <View tyle={styles.p}>
                  <View tyle={styles.span}>
                    <Text style={styles.spanText}>{charac.level}</Text>
                  </View>

                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 100,
    margin: "auto",
    padding: 20,
  },
  collapsed: {
    maxWidth: 100,
    margin: "auto",
    padding: 20,
  },
  image: {
    height: 160,
    width: 130,
  },
  characs: {
    marginBottom: 30,
    width: "calc(100% - 50)",
  },
  li: {
    backgroundColor: "#888",
    color: "#fff",
    marginBottom: 20,
    paddingBottom: 10,

    // transition: width 300ms ease-in-out;
  },
  p: {
    marginBottom: 10,
    color: "white",
  },
  pText: {
    fontWeight: "400",

  },
  span: {
    right: 10,
    width: 30,
    top: 11,
    color: "#fff",
    fontSize: 11,
  },
  spanText: {
    color: "white",
    textAlign: "right",
  },
});
