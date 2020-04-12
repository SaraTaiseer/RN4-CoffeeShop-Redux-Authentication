import React from "react";
import { Text, View, List, ListItem, Card, CardItem } from "native-base";
import { connect } from "react-redux";
import styles from "./styles";
// Components
import LogoutButton from "./LogoutButton";

const OrderItem = ({ order }) => (
  <ListItem button style={styles.listitem} onPress={() => alert("Hi")}>
    <Card style={styles.transparent}>
      <CardItem style={styles.transparent}>
        <Text>{order.date.toString()}</Text>
      </CardItem>
    </Card>
  </ListItem>
);

const Profile = ({ username, orders }) => {
  const orderList = orders.map((order) => (
    <OrderItem order={order} key={order.date.toString()} />
  ));
  return (
    <View>
      <Text>{username}'s History' </Text>
      <List>{orderList}</List>
      <LogoutButton />
    </View>
  );
};
const mapStateToProps = ({ user, orders }) => ({
  username: user?.username,
  orders,
});
export default connect(mapStateToProps)(Profile);
// export default Profile;
