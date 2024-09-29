import React, { useState } from "react";
import { useAddNewProduct } from "../hook/UseQuery";

const FormAddNew = () => {
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState(0);
  const [newProductImage, setNewProductImage] = useState("");

  const { mutate } = useAddNewProduct();

  const handleAddNew = async (e) => {
    e.preventDefault();
    const obj = {
      name: newProductName,
      price: Number(newProductPrice),
      image: newProductImage,
    };
    if (!obj.name || !obj.price || !obj.image) {
      console.error("Missing fields!");
      return;
    }

    mutate(obj, {
      onSuccess: () => {
        setNewProductImage("");
        setNewProductName("");
        setNewProductPrice(0);
      },
    });
  };

  return (
    <form onSubmit={handleAddNew}>
      <label className="m-2" htmlFor="addName">
        Add name
      </label>
      <input
        value={newProductName}
        onChange={(e) => setNewProductName(e.target.value)}
        placeholder="Add new name"
        type="text"
        id="addName"
        className="mb-2"
      />
      <br />
      <label className="m-2" htmlFor="addPrice">
        Add price
      </label>
      <input
        value={newProductPrice}
        onChange={(e) => setNewProductPrice(e.target.value)}
        placeholder="Add new price"
        type="text"
        id="addPrice"
        className="mb-2"
      />
      <br />
      <label className="m-2" htmlFor="addImage">
        Add image
      </label>
      <input
        value={newProductImage}
        onChange={(e) => setNewProductImage(e.target.value)}
        placeholder="Add new image"
        type="text"
        id="addImage"
        className="mb-2"
      />
      <br />

      <button className="bg-slate-500 rounded-xl mx-2 px-2">Add</button>
    </form>
  );
};

export default FormAddNew;
