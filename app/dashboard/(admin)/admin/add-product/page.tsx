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
    intelCorei: "",
    ram: "",
    hard: "",
    graphic: "",
    screen: "",
    suggestion: "",
    new: "",
  });
  const [otherModelData, setOtherModelData] = useState({
    title: "",
    price: 0,
    quantity: 1,
    oldPrice: "",
    saveUp: "",
    intelCorei: "",
    ram: "",
    hard: "",
    graphic: "",
    screen: "",
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
  const setOtherModel = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    otherModels.push({
      title: e.target[0].value,
      price: Number(e.target[1].value),
      quantity: Number(e.target[2].value),
      oldPrice: e.target[3].value,
      saveUp: e.target[4].value,
      intelCorei: e.target[5].value,
      ram: e.target[6].value,
      graphic: e.target[7].value,
      hard: e.target[8].value,
      screen: e.target[9].value,
    });
    console.log(otherModels);
    alert("added");
  };
  const OtherModelChangHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtherModelData({
      ...otherModelData,
      [e.target.name]: [e.target.value],
    });
  };
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
      oldPrice: formData.oldPrice[0],
      saveUp: formData.saveUp[0],
      intelCorei: formData.intelCorei[0],
      ram: formData.ram[0],
      hard: formData.hard[0],
      graphic: formData.graphic[0],
      screen: formData.screen[0],
      suggestion: formData.suggestion[0],
      new: formData.new[0],
      images: images,
      otherModels: otherModels,
    };
    console.log(product);
    try {
      await axios
        .post("/api/add-product", {
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
        intelCorei: "",
        ram: "",
        hard: "",
        graphic: "",
        screen: "",
        suggestion: "",
        new: "",
      });
      images = [];
      otherModels = [];
    } catch (error) {
      setErrorProduct(true);
    }
  };

  return (
    <div className="add-product">
      <form onSubmit={submitHandler} className="product-form">
        <div className="title">create product post</div>
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
            value={formData.oldPrice}
            name="oldPrice"
            placeholder="oldPrice"
            type="text"
            className="input"
            onChange={changHandler}
          />
          <input
            value={formData.saveUp}
            name="saveUp"
            placeholder="saveUp"
            type="text"
            className="input"
            onChange={changHandler}
          />
          <input
            value={formData.intelCorei}
            name="intelCorei"
            placeholder="intelCorei"
            type="text"
            className="input"
            onChange={changHandler}
          />
          <input
            value={formData.ram}
            name="ram"
            placeholder="ram"
            type="text"
            className="input"
            onChange={changHandler}
          />
          <input
            value={formData.graphic}
            name="graphic"
            placeholder="graphic"
            type="text"
            className="input"
            onChange={changHandler}
          />
          <input
            value={formData.hard}
            name="hard"
            placeholder="hard"
            type="text"
            className="input"
            onChange={changHandler}
          />
          <input
            value={formData.screen}
            name="screen"
            placeholder="screen"
            type="text"
            className="input"
            onChange={changHandler}
          />
          <div className="mini-inputs">
            <span>suggestion</span>
            <input
              value="suggestion"
              name="suggestion"
              placeholder="suggestion"
              type="checkbox"
              className="input"
              onChange={changHandler}
            />

            <span>new</span>
            <input
              value="new"
              name="new"
              placeholder="new"
              type="checkbox"
              className="input"
              onChange={changHandler}
            />
          </div>
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
        <form onSubmit={setOtherModel} className="product-form">
          <input
            required
            name="title"
            placeholder="title"
            type="text"
            className="input"
            onChange={OtherModelChangHandler}
          />
          <div className="mini-inputs">
            <input
              required
              name="price"
              placeholder="price"
              type="number"
              className="input"
              onChange={OtherModelChangHandler}
            />
            <input
              required
              name="quantity"
              placeholder="quantity"
              type="number"
              className="input"
              onChange={OtherModelChangHandler}
            />
            <input
              required
              name="oldPrice"
              placeholder="oldPrice"
              type="text"
              className="input"
              onChange={OtherModelChangHandler}
            />
            <input
              required
              name="saveUp"
              placeholder="saveUp"
              type="text"
              className="input"
              onChange={OtherModelChangHandler}
            />
            <input
              required
              name="intelCorei"
              placeholder="intelCorei"
              type="text"
              className="input"
              onChange={OtherModelChangHandler}
            />
            <input
              required
              name="ram"
              placeholder="ram"
              type="text"
              className="input"
              onChange={OtherModelChangHandler}
            />
            <input
              required
              name="graphic"
              placeholder="graphic"
              type="text"
              className="input"
              onChange={OtherModelChangHandler}
            />
            <input
              required
              name="hard"
              placeholder="hard"
              type="text"
              className="input"
              onChange={OtherModelChangHandler}
            />
            <input
              required
              name="screen"
              placeholder="screen"
              type="text"
              className="input"
              onChange={OtherModelChangHandler}
            />
          </div>
          <button type="submit">Add other model</button>
        </form>
      </div>
    </div>
  );
};

export default page;
