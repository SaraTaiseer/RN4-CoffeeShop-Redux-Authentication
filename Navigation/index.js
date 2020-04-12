import React from "react";
import { Icon } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Components
import CartIcon from "./CartIcon";

// Screens
import { SHOP, CART, USER, LOGIN, SIGNUP } from "./screenNames";
import UserStack from "./StackNavigators/UserStack";
import CartStack from "./StackNavigators/CartStack";
import ShopStack from "./StackNavigators/ShopStack";

const { Navigator, Screen } = createBottomTabNavigator();

function RootTabNavigator() {
  return (
    <Navigator
      initialRouteName={SHOP}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "white",
        inactiveTintColor: "black",
        style: {
          backgroundColor: "rgb(20,90,100)",
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName = "";
          switch (route.name) {
            case USER:
              iconName = "account";
              break;

            case SHOP:
              iconName = "coffee";
              break;

            default:
              return <CartIcon color={color} />;
          }
          return (
            <Icon
              name={iconName}
              type="MaterialCommunityIcons"
              style={{ color }}
            />
          );
        },
      })}
    >
      <Screen name={USER} component={UserStack} />
      <Screen name={SHOP} component={ShopStack} />
      <Screen name={CART} component={CartStack} />
    </Navigator>
  );
}

export default RootTabNavigator;
