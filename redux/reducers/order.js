import { CHECKOUT } from "../actions/types";
import { AsyncStorage } from "react-native";

export default (orders = [], { type, payload }) => {
  switch (type) {
    case CHECKOUT:
      const newHistory = [payload, ...orders];
      AsyncStorage.setItem("history", JSON.stringify(newHistory));
      return newHistory;

    default:
      return orders;
  }
};
