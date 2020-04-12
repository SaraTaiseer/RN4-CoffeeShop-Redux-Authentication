import React, { Component } from "react";
import { connect } from "react-redux";
// Screen Names
import { SIGNUP, SHOP, COFFEESHOP } from "../../Navigation/screenNames";

import { login } from "../../redux/actions";
// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
import styles from "./styles";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  render() {
    const { navigation, login } = this.props;
    const { username, password } = this.state;
    const goToCoffeeList = () =>
      navigation.navigate(SHOP, { screen: COFFEESHOP });
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Login</Text>
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="#A6AEC1"
          value={username}
          onChangeText={(username) => this.setState({ username })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Password"
          placeholderTextColor="#A6AEC1"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => this.setState({ password })}
        />
        <TouchableOpacity
          style={styles.authButton}
          onPress={() => login(this.state, goToCoffeeList)}
        >
          <Text style={styles.authButtonText}>Log in</Text>
        </TouchableOpacity>
        <Text
          style={styles.authOther}
          onPress={() => navigation.replace(SIGNUP)}
        >
          Click here to register!
        </Text>
      </View>
    );
  }
}
const mapDispatchToProps = { login };
export default connect(null, mapDispatchToProps)(Login);
