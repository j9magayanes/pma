import React, { useEffect, useContext } from "react";
import ModelFinder from "../apis/ModelFinder";
import { ModelsContext } from "../context/ModelsContext";
import { useHistory } from "react-router-dom";
import StarRating from "./StarRating";
import '../index.css';

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
  }, [models]);

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
    history.push(`/models/${id}/update`);
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
      <table className="table table-hover">
        <thead>
          <tr className="table-header">
            <th scope="col">Preismodell</th>
            <th scope="col">Honorar</th>
            <th scope="col">Preiskategorie</th>
            <th scope="col">Online</th>
            <th scope="col">Druck</th>
            <th scope="col">Foto Autrag</th>
            <th scope="col">TV Preis</th>
            <th scope="col">Standzeit in Tager</th>
            <th scope="col">Preis</th>
            <th scope="col">Mobile/TV</th>
            <th scope="col">Autor sichtbar</th>
            <th scope="col">Währung</th>
            <th scope="col">TV- Standzeit</th>
            <th scope="col">Objektname</th>
            <th scope="col">Uberschrift</th>
            <th scope="col">Bildrechte</th>
            <th scope="col">Quelle</th>
            <th scope="col">Name des Autors</th>
            <th scope="col">Autor</th>
            <th scope="col">Copyright Vermerk</th>
            <th scope="col">Online Anfang</th>
            <th scope="col">Rechtlich Vermerke</th>
            <th scope="col">Ort</th>
            <th scope="col">Land(Code)</th>
            <th scope="col">Erstellungsdatum</th>
            <th scope="col">Sperrvermerk</th>
            <th scope="col">Besondere Hinweise</th>
            <th scope="col">Besondere Vereinbarungen</th>
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
                  <td><h4 className="table-data">{model.name}</h4></td>
                  <td><h4 className="table-data">{model.location}</h4></td>
                  <td><h4 className="table-data">{model.name}</h4></td>
                  <td><h4 className="table-data">{model.location}</h4></td> 
                  <td><h4 className="table-data">{model.name}</h4></td>
                  <td><h4 className="table-data">{model.location}</h4></td>
                  <td><h4 className="table-data">{model.name}</h4></td>
                  <td><h4 className="table-data">{model.location}</h4></td>
                  <td><h4 className="table-data">{model.name}</h4></td>
                  <td><h4 className="table-data">{model.location}</h4></td>
                  <td><h4 className="table-data">{model.name}</h4></td>
                  <td><h4 className="table-data">{model.location}</h4></td> 
                  <td><h4 className="table-data">{model.name}</h4></td>
                  <td><h4 className="table-data">{model.location}</h4></td>
                  <td><h4 className="table-data">{model.name}</h4></td>
                  <td><h4 className="table-data">{model.location}</h4></td> 
                  <td><h4 className="table-data">{model.name}</h4></td>
                  <td><h4 className="table-data">{model.location}</h4></td>
                  <td><h4 className="table-data">{model.name}</h4></td>
                  <td><h4 className="table-data">{model.location}</h4></td> 
                  <td><h4 className="table-data">{model.name}</h4></td>
                  <td><h4 className="table-data">{model.location}</h4></td>
                  <td><h4 className="table-data">{model.name}</h4></td>
                  <td><h4 className="table-data">{model.location}</h4></td> 
                  <td><h4 className="table-data">{model.name}</h4></td>
                  <td><h4 className="table-data">{model.location}</h4></td>
                  <td><h4 className="table-data">{model.name}</h4></td>
                  <td><h4 className="table-data">{model.location}</h4></td>   
                 {/*  <td>{"$".repeat(model.price_range)}</td>
                  <td>{renderRating(model)}</td> */}
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
