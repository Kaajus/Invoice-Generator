import React, { useState } from "react";
import "./Info.css";

function CostCalculator() {
    console.count();
  const [lineItem, setLineItem] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [isSetPrice, setIsSetPrice] = useState(false);

  const numberOfItems = (e) => {
    setLineItem(e.target.value);
    
      console.log("The lineItem is", lineItem);
      console.log("The e.target.value of lineItem is", e.target.value);

  };

  const fillDescription = (e) => {
    setDescription(e.target.value);
  };

  const changeQuantity = (e) => {
    setQuantity(e.target.value);
    console.log("e.target.value is for quantity is", e.target.value);
    console.log("The actual quantity is", quantity);
  };

  const priceSet = (e) => {
    setIsSetPrice(true);
    setPrice(e.target.value);
    console.log("Price is set");
    console.log("The price is", price);
  };

 
  return (
    <div className="row-1">
      <input placeholder="Item" value={lineItem} onChange={numberOfItems} />
      <input
        placeholder="Description"
        value={description}
        onChange={fillDescription}
      />
      <input
        placeholder="Quantity"
        value={quantity}
        onChange={changeQuantity}
      />
      <input placeholder="Price" value={price} onChange={priceSet} />

      <input
        placeholder="Total Cost"
        value={(price * quantity) ?? 0}
        onChange={setIsSetPrice}
      />
    </div>
  );
}

export default CostCalculator;
