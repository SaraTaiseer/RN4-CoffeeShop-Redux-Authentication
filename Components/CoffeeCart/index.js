import React, { Component } from "react";
import { Text, List, Button } from "native-base";
import { connect } from "react-redux";

// Component
import CartItem from "./CartItem";

import { checkoutCart, login } from "../../redux/actions";
import { LOGIN, USER } from "../../Navigation/screenNames";

const CoffeeCart = ({ cart, user, checkoutCart, navigation }) => {
  const cartItems = cart.map((item) => (
    <CartItem item={item} key={item.drink + item.option} />
  ));

  return (
    <List>
      {cartItems.length ? (
        <>
          {cartItems}
          <Button
            full
            danger
            onPress={
              user
                ? () => checkoutCart({ date: new Date(), items: cart })
                : () => navigation.navigate(USER, { screen: LOGIN })
            }
          >
            <Text>{user ? "Checkout" : "login"}</Text>
          </Button>
        </>
      ) : (
        <Text style={{ textAlign: "center" }}>Buy something</Text>
      )}
    </List>
  );
};

const mapStateToProps = ({ cart, user }) => ({
  cart,
  user,
});

const mapDispatchToProps = { checkoutCart };

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeCart);
