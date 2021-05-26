import axios from "axios";
import { URL } from "../const/firebase";
import { circuralProgress } from "./fullScreenCircuralProgress";
import { addSnackbar } from "./snackbar";

export const addRecipeAsyncActionCreator = (form) => (dispatch, getState) => {
  dispatch(circuralProgress.add());
  return axios
    .post(URL + "recipes.json", form)
    .then(() => {
      dispatch(circuralProgress.remove());
      dispatch(addSnackbar("Przepis dodano prawidłowo"));
    })
    .catch(() => {
      dispatch(circuralProgress.remove());
      dispatch(
        addSnackbar("Dodawanie nie powiodło się, spróbuj ponownie później", 'red')
      );
      return Promise.reject();
    });
};

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
