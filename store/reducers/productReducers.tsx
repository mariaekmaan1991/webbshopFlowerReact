import { SET_PRODUCTS } from "../actions/type";

//start värde
const initialState = {
  productState: [],
};

export default function (state = initialState, action: any) {
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
