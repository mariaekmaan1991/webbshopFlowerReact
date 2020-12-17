import axios from "axios";

import { SET_PRODUCTS } from "./type";

export const getProducts = () => (dispatch: any) => {
  axios.get("http://localhost:8888/").then((res) =>
    dispatch({
      type: SET_PRODUCTS,
      payload: res.data,
    })
  );
};
