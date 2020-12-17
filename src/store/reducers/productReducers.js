import { SET_PRODUCTS } from "../actions/type";

//start värde
const initialState = {
  productState: [],
};

export default function hej(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        productsState: action.payload,
      };
    default:
      return state;
  }
}
