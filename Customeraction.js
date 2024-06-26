import { buy_cake } from "./Caketypes";

export const purchasecake = () => {
  return {
    // It returns an object
    type: buy_cake, // type contains a string value for the type of action performed
  };
};
