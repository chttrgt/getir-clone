import { IProducts } from "../../../models/IProducts";
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../../constants";

interface CartItem extends IProducts {
  quantity: number;
}

export const addToCart = (item: any) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (item: any) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const increaseQuantity = (item: any) => {
  return {
    type: "INCREASE_QUANTITY",
    payload: item,
  };
};
