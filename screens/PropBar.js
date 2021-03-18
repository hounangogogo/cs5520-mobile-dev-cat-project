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
            <View
              style={styles.li}
              key={charac.type}
              style={{
                width: `${charac.level * 100}%`,
                backgroundColor: `hsl(${hue}, ${saturation}%, ${
                  100 / (index + 3.5)
                }%)`,
              }}
            >
              <View tyle={styles.p}>
                <Text style={styles.pText}>{charac.type}</Text>

                <View tyle={styles.span}>
                  <Text style={styles.spanText}>{charac.level}</Text>
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
    maxWidth: "100px",
    margin: "auto",
    padding: "20px",
  },
  collapsed: {
    maxWidth: "100px",
    margin: "auto",
    padding: "20px",
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
    color: "white",
  },
  span: {
    right: "10px",
    width: "30px",
    top: "11px",
    color: "#fff",
    fontSize: "11px",
  },
  spanText: {
    color: "white",
    textAlign: "right",
  },
});
