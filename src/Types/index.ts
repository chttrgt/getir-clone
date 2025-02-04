import { ICategory } from "../models/ICategory";
import { IProducts } from "../models/IProducts";

export type RootStackParamList = {
  Home: undefined;
  CategoryDetails: { catItem: ICategory };
  ProductDetails: { proItem: IProducts };
};
