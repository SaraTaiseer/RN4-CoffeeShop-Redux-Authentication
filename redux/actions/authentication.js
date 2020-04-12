import decode from "jwt-decode";

import instance from "./instance";

import { SET_CURRENT_USER } from "./types";
import { AsyncStorage } from "react-native";

const setCurrentUser = (token) => {
  setAuthToken(token);
  return {
    type: SET_CURRENT_USER,
    payload: token ? decode(token) : null,
  };
};
export const checkForToken = () => async (dispatch) => {
  const currentTimeInSeconds = Date.now() / 1000;
  const token = await AsyncStorage.getItem("token");

  if (token && decode(token).exp >= currentTimeInSeconds)
    dispatch(setCurrentUser(token));
  else dispatch(setCurrentUser());
};

const setAuthToken = (token) => {
  if (token) {
    AsyncStorage.setItem("token", token);
    instance.defaults.headers.Authorization = `jwt ${token}`;
  } else {
    AsyncStorage.removeItem("token");
    delete instance.defaults.headers.Authorization;
  }
};

export const login = (userData, redirect) => async (dispatch) => {
  try {
    const response = await instance.post("login/", userData);
    const { token } = response.data;

    dispatch(setCurrentUser(token));
    redirect();
  } catch (error) {
    console.error("Error while logging in!", error);
  }
};

export const signup = (userData, redirect) => async (dispatch) => {
  try {
    await instance.post("register/", userData);
    dispatch(login(userData, redirect));
  } catch (error) {
    console.error("Error while signing up!", error);
  }
};

export const logout = () => {
  return setCurrentUser();
};
