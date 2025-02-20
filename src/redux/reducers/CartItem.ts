import { IProducts } from "./../../models/IProducts";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../constants";

interface CartItem extends IProducts {
  quantity: number;
}

const CartItemsReducer = (state: CartItem[] = [], action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];

    case REMOVE_FROM_CART:
      return state.filter((item) => {
        if (item.id === action.payload.id) {
          return item.quantity > 0;
        }
        return true;
      });
    case CLEAR_CART:
      return [];

    case INCREASE_QUANTITY:
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

    case DECREASE_QUANTITY:
      return state
        .map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: Math.max(item.quantity - 1, 0),
              }
            : item
        )
        .filter((item) => item.quantity > 0);

    default:
      return state;
  }
};

export default CartItemsReducer;
