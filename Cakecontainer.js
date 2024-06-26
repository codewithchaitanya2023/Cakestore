// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { purchasecake } from "./Customeraction"; // Named import

// const Cakecontainer = () => {
//   const noofcakes = useSelector((state) => state.noofcake);
//   const dispatch = useDispatch();
//   return (
//     <>
//       <div>Cakecontainer</div>
//       <h1>No of cakes - {noofcakes}</h1>
//       <button onClick={() => dispatch(purchasecake())}>Buy cake</button>
//       <button onClick={() => dispatch(purchasecake())}>Buy cake</button>
//     </>
//   );
// };

// export default Cakecontainer;
// // //use useselector hook
// // How is the state managed in the store and how do we access it in components using hooks?
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { purchasecake } from "./Customeraction";
import "./cakeContainer.css";

const CakeContainer = () => {
  const noOfCakes = useSelector((state) => state.noOfCakes);
  const cakeImages = useSelector((state) => state.cakeImages);
  const dispatch = useDispatch();

  return (
    <div className="cake-container">
      <h1>Number of cakes - {noOfCakes}</h1>
      <button onClick={() => dispatch(purchasecake())}>Buy Cake</button>
      <div className="cake-gallery">
        {cakeImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Cake ${index + 1}`}
            className="cake-image"
          />
        ))}
      </div>
    </div>
  );
};

export default CakeContainer;
