// import { buy_cake } from "./Caketypes";

// const initialstate = {
//   noofcake: 30,
// };
// const Cakereducer = (state = initialstate, action) => {
//   switch (action.type) {
//     case buy_cake:
//       return {
//         ...state,

//         noofcake: state.noofcake - 1,
//       };
//     default:
//       return state;
//   }
// };
// export default Cakereducer;

// //reducer contain store

import { buy_cake } from "./Caketypes";

const initialState = {
  noOfCakes: 30,
  cakeImages: [
    "/images/image1.webp",
    "/images/image2.webp",
    "/images/image3.webp",
  ],
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case buy_cake:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
