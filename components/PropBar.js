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
      <View id="characteristics" style={styles.container}>
        <View>
          {characs.map((charac, index) => (
            <View>
              {/* <View style={styles.pTextBlock}> */}
              <Text style={styles.pText}>{charac.type}</Text>
              {/* </View> */}
              <View
                style={styles.li}
                key={charac.type}
                style={{
                  width: `${charac.level * 22}%`,
                  // height: "13%",
                  backgroundColor: `hsl(${hue}, ${saturation}%, ${
                    100 / (index + 3.5)
                  }%)`,
                  borderRadius: 5,
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
    maxWidth: "100%",
    margin: "auto",
    padding: 20,
  },
  characs: {
    marginBottom: "5%",
    width: "calc(100% - 50)",
  },
  li: {
    width: "50%",
    backgroundColor: "#888",
    color: "#fff",
    marginBottom: "5%",
    paddingBottom: 10,

    // transition: width 300ms ease-in-out;
  },
  p: {
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
    fontSize: 9,
  },
});
