import { ICategory } from "../models/ICategory";

export type RootStackParamList = {
  Home: undefined;
  CategoryDetails: { catItem: ICategory };
};
