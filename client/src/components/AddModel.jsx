import React, { useState, useContext } from "react";
import ModelFinder from "../apis/ModelFinder";
import Header from "../components/Header";
import { ModelsContext } from "../context/ModelsContext"
import '../index.css'

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
    <>
    <Header/>
    <div className="mb-4">
      <form action="">
        <div className="form-row">
        <div className="col">
            <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              type="text"
              className="form-control"
              placeholder="id"
            />
          </div>
          <div className="col">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="name"
            />
          </div>
          <div className="col">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="location"
            />
          </div>
          <div className="col">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="custom-select my-1 mr-sm-2"
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="button"
          >
            Add
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default AddModel;
