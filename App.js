import React, { Component } from "react";
import { loadAsync } from "expo-font";
import { Spinner } from "native-base";

// Navigation
import RootNavigator from "./Navigation";
import { NavigationContainer } from "@react-navigation/native";

// Redux
import { Provider } from "react-redux";
import store from "./redux";

class App extends Component {
  // state = {
  //   loading: true
  // };

  // async componentDidMount() {
  //   await loadAsync({
  //     Roboto: require("native-base/Fonts/Roboto.ttf"),
  //     Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
  //   });
  //   this.setState({ loading: false });
  // }

  render() {
    // if (this.state.loading) {
    //   return <Spinner color="white" />;
    // }
    return (
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
