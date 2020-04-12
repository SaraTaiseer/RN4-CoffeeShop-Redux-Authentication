import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CoffeeList from "../../Components/CoffeeList";
import CoffeeDetail from "../../Components/CoffeeDetail";

// Screens
import { COFFEESHOPS, COFFEESHOP } from "../screenNames";

// Config
import screenOptions from "../screenOptions";

const { Navigator, Screen } = createStackNavigator();

function ShopStack() {
  return (
    <Navigator initialRouteName={COFFEESHOPS} screenOptions={screenOptions}>
      <Screen name={COFFEESHOPS} component={CoffeeList} />
      <Screen
        name={COFFEESHOP}
        component={CoffeeDetail}
        options={({ route }) => ({ title: route.params.coffeeshop.name })}
      />
    </Navigator>
  );
}

export default ShopStack;
