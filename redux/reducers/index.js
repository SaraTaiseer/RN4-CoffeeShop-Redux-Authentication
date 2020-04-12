import { combineReducers } from "redux";

import coffeeshops from "./coffeeshops";
import cart from "./cart";
import user from "./user";
import orders from "./order";

export default combineReducers({ coffeeshops, cart, user, orders });
