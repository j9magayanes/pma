import React, { useState, useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ModelsContext } from "../context/ModelsContext";
import ModelFinder from "../apis/ModelFinder";
import Header from "./Header";
import '../index.css';

const UpdateModel = (props) => {
  const { id } = useParams();
  let history = useHistory();
  const { models } = useContext(ModelsContext);
  const [newId, setNewId] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await ModelFinder.get(`/${id}`);
      console.log(response.data.data);
      setNewId(response.data.data.model.newId);
      setName(response.data.data.model.name);
      setLocation(response.data.data.model.location);
      setPriceRange(response.data.data.model.price_range);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedModel = await ModelFinder.put(`/${id}`, {
      id,
      name,
      location,
      price_range: priceRange,
    });
    history.push("/");
  };

  return (
    <div>
      <form action="">
        <div className="container">
        <h1 className="title">Update Model:</h1>
        <div className="form">
          <div className="row">
            <div className="col-sm">
             <label htmlFor="name">Name</label>
              <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              className="form-control"
              type="text"
              />
            </div> 
            <div className="col-sm">
            <label htmlFor="name">Name</label>
              <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              id="location"
              className="form-control"
              type="text"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
            <label htmlFor="name">Name</label>
              <input
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              id="price_range"
              className="form-control"
              type="number"
              />
            </div>
            <div className="col-sm">
            <label htmlFor="name">Name</label>
              <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              id="location"
              className="form-control"
              type="text"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
            <label htmlFor="name">Name</label>
              <input
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              id="price_range"
              className="form-control"
              type="number"
              />
            </div>
            <div className="col-sm">
            <label htmlFor="name">Name</label>
              <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              id="location"
              className="form-control"
              type="text"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
            <label htmlFor="name">Name</label>
              <input
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              id="price_range"
              className="form-control"
              type="number"
              />
            </div>
            <div className="col-sm">
            <label htmlFor="name">Name</label>
              <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              id="location"
              className="form-control"
              type="text"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
            <label htmlFor="name">Name</label>
              <input
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              id="price_range"
              className="form-control"
              type="number"
              />
            </div>
            <div className="col-sm">
            <label htmlFor="name">Name</label>
              <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              id="location"
              className="form-control"
              type="text"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
            <label htmlFor="name">Name</label>
              <input
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              id="price_range"
              className="form-control"
              type="number"
              />
            </div>
            <div className="col-sm">
            <label htmlFor="name">Name</label>
              <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              id="location"
              className="form-control"
              type="text"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
            <label htmlFor="name">Name</label>
              <input
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              id="price_range"
              className="form-control"
              type="number"
              />
            </div>
            <div className="col-sm">
            <label htmlFor="name">Name</label>
              <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              id="location"
              className="form-control"
              type="text"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
            <label htmlFor="name">Name</label>
              <input
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              id="price_range"
              className="form-control"
              type="number"
              />
            </div>
            <div className="col-sm">
            <label htmlFor="name">Name</label>
              <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              id="location"
              className="form-control"
              type="text"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
            <label htmlFor="name">Name</label>
              <input
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              id="price_range"
              className="form-control"
              type="number"
              />
            </div>
            <div className="col-sm">
            <label htmlFor="name">Name</label>
              <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              id="location"
              className="form-control"
              type="text"
              />
            </div>
          </div>
          <div className="add-button">
            <button
            type="submit"
            onClick={handleSubmit}
            className="button"
            >
            Submit
            </button>
            </div>
        </div>
        </div>        
     
        </form>
    </div>
      );
};

export default UpdateModel;
