import React, { useState, useContext } from "react";
import ModelFinder from "../apis/ModelFinder";
import Header from "../components/Header";
import { ModelsContext } from "../context/ModelsContext"
import '../index.css'
import ModelList from "./ModelList";

const AddModel = () => {
  const { addModels } = useContext(ModelsContext);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ModelFinder.post("/", {
        id,
        name,
        location,
        price_range: priceRange,
      });
      console.log(response.data.data);
      addModels(response.data.data.model);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
    <Header/>
    <div className="add">
      <form action="">
        <div className="container">
        <h1 className="title">New Model:</h1>
        <div className="form">
          <div className="row">
            <div className="col-lg">
            <label htmlFor="name">Name</label>
              <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              type="text"
              className="form-control"
              placeholder="id"
            />
            </div>
            <div className="col-lg" >
            <label htmlFor="name">Name</label>
              <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="name"
              />
            </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <label htmlFor="name">Name</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          <div className="col-sm">
          <label htmlFor="name">Name</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <label htmlFor="name">Name</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          <div className="col-sm">
          <label htmlFor="name">Name</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <label htmlFor="name">Name</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          <div className="col-sm">
          <label htmlFor="name">Name</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <label htmlFor="name">Name</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          <div className="col-sm">
          <label htmlFor="name">Name</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <label htmlFor="name">Name</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          <div className="col-sm">
          <label htmlFor="name">Name</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <label htmlFor="name">Name</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          <div className="col-sm">
          <label htmlFor="name">Name</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <label htmlFor="name">Name</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          <div className="col-sm">
          <label htmlFor="name">Name</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <label htmlFor="name">Name</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          <div className="col-sm">
          <label htmlFor="name">Name</label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="custom-select my-1 mr-sm-2 add-form"
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
        </div>

        <div className="add-button">
            <button
            onClick={handleSubmit}
            type="submit"
            className="button"
            >
            Add
            </button>
        </div>
      </div>
      </div>
      </form>
    </div>
    </div>
  );
};

export default AddModel;
