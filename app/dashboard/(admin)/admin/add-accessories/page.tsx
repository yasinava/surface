"use client";
import axios from "axios";
import React, { FormEvent, useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    image: "",
    color: "",
    price: 0,
    quantity: 1,
    oldPrice: "",
    saveUp: "",
  });

  const [addedProduct, setAddedProduct] = useState(false);
  const [errorProduct, setErrorProduct] = useState(false);

  let images = [];
  const setImages = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isImage = images.find((item) => item?.image === e.target[0].value);

    if (!isImage) {
      images.push({ image: e.target[0].value });
      console.log(images);
      alert("added");
    }
  };
  let otherModels = [];
  const changHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: [e.target.value],
    });
  };
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setAddedProduct(false);
    setErrorProduct(false);
    const product = {
      title: formData.title[0],
      desc: formData.desc[0],
      image: formData.image[0],
      price: Number(formData.price[0]),
      quantity: Number(formData.quantity[0]),
      oldPrice: Number(formData.oldPrice[0]),
      saveUp: Number(formData.saveUp[0]),
      images: images,
    };
    try {
      await axios
        .post("/api/add-accessories", {
          ...product,
        })
        .then((res) => setAddedProduct(true));

      setFormData({
        title: "",
        desc: "",
        image: "",
        color: "",
        price: 0,
        quantity: 1,
        oldPrice: "",
        saveUp: "",
      });
      images = [];
    } catch (error) {
      setErrorProduct(true);
    }
  };

  return (
    <div className="add-product">
      <form onSubmit={submitHandler} className="product-form">
        <div className="title">create Accessories post</div>
        <input
          required
          value={formData.title}
          name="title"
          placeholder="title"
          type="text"
          className="input"
          onChange={changHandler}
        />
        <input
          required
          value={formData.desc}
          name="desc"
          placeholder="desc"
          type="text"
          className="input"
          onChange={changHandler}
        />
        <input
          required
          value={formData.image}
          name="image"
          placeholder="image"
          type="text"
          className="input"
          onChange={changHandler}
        />
        <div className="mini-inputs">
          <input
            required
            value={formData.price}
            name="price"
            placeholder="price"
            type="number"
            className="input"
            onChange={changHandler}
          />
          <input
            required
            value={formData.quantity}
            name="quantity"
            placeholder="quantity"
            type="number"
            className="input"
            onChange={changHandler}
          />
          <input
            required
            value={formData.oldPrice}
            name="oldPrice"
            placeholder="oldPrice"
            type="text"
            className="input"
            onChange={changHandler}
          />
          <input
            required
            value={formData.saveUp}
            name="saveUp"
            placeholder="saveUp"
            type="text"
            className="input"
            onChange={changHandler}
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
      <div className="forms-img-other">
        <form onSubmit={setImages} className="product-form">
          <input
            required
            name="images"
            placeholder="images"
            type="text"
            className="input"
          />
          <button type="submit">Add Photo in gallarey</button>
        </form>
        {addedProduct && <p>your product added</p>}
        {errorProduct && <p>please try again </p>}
      </div>
    </div>
  );
};

export default page;
