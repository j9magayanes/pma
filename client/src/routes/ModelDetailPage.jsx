import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ModelsContext } from "../context/ModelsContext";
import ModelFinder from "../apis/ModelFinder";
import StarRating from "../components/StarRating";
import Reviews from "../components/Reviews";
import AddReview from "../components/AddReview";

const ModelDetailPage = () => {
  const { id } = useParams();
  const { selectedModel, setSelectedModel } = useContext(
    ModelsContext
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ModelFinder.get(`/${id}`);
        console.log(response);

        setSelectedModel(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {selectedModel && (
        <>
          <h1 className="text-center display-1">
            {selectedModel.model.name}
          </h1>
          <div className="text-center">
            <StarRating rating={selectedModel.model.average_rating} />
            <span className="text-warning ml-1">
              {selectedModel.model.count
                ? `(${selectedModel.model.count})`
                : "(0)"}
            </span>
          </div>
          <div className="mt-3">
       
          </div>
          <AddReview />
        </>
      )}
    </div>
  );
};

export default ModelDetailPage;
