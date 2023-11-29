import { fetchRing } from "./slice";

export const fetchRingThunk = () => {
  return async (dispatch, getState) => {
    console.log("=======");
    let res = await fetch("http://localhost:3000/products_ring");
    let data = await res.json();

    dispatch(fetchRing(data));
  };
};
