import React, { useEffect, useContext } from "react";
import ModelFinder from "../apis/ModelFinder";
import { ModelsContext } from "../context/ModelsContext";
import { useHistory } from "react-router-dom";
import StarRating from "./StarRating";

const ModelList = (props) => {
  const { models, setModels } = useContext(ModelsContext);
  let history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ModelFinder.get("/");
        console.log(response.data.data);
        setModels(response.data.data.models);
      } catch (err) {}
    };

    fetchData();
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await ModelFinder.delete(`/${id}`);
      setModels(
        models.filter((model) => {
          return model.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history.push(`/models/${id}/update`);
  };

  const handleModelSelect = (id) => {
    history.push(`/models/${id}`);
  };

  const renderRating = (model) => {
    if (!model.count) {
      return <span className="text-warning">0 reviews</span>;
    }
    return (
      <>
        <StarRating rating={model.id} />
        <span className="text-warning ml-1">({model.count})</span>
      </>
    );
  };

  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Model</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {models &&
            models.map((model) => {
              return (
                <tr
                  onClick={() => handleModelSelect(model.id)}
                  key={model.id}
                >
                  <td>{model.name}</td>
                  <td>{model.location}</td>
                  <td>{"$".repeat(model.price_range)}</td>
                  <td>{renderRating(model)}</td>
                  <td>
                    <button
                      onClick={(e) => handleUpdate(e, model.id)}
                      className="btn btn-warning"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(e, model.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          {/* <tr>
            <td>mcdonalds</td>
            <td>New YOrk</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>

          <tr>
            <td>mcdonalds</td>
            <td>New YOrk</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default ModelList;
