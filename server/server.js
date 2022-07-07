require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());

// Get all Models
app.get("/api/v1/models", async (req, res) => {
  try {
    //const results = await db.query("select * from models");
    const modelRatingsData = await db.query(
      "select * from models;"
    );

    res.status(200).json({
      status: "success",
      results: modelRatingsData.rows.length,
      data: {
        models: modelRatingsData.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//Get a Model
app.get("/api/v1/models/:id", async (req, res) => {
  console.log(req.params.id);

  try {
    const model= await db.query(
      "select * from models left join (select model_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by model_id) reviews on models.id = reviews.model_id where id = $1",
      [req.params.id]
    );

 
    // select * from models wehre id = req.params.id

    const reviews = await db.query(
      "select * from reviews where model_id = $1",
      [req.params.id]
    );
    console.log(reviews);

    res.status(200).json({
      status: "succes",
      data: {
        model: model.rows[0],
        reviews: reviews.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Create a model

app.post("/api/v1/models", async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query(
      "INSERT INTO models (name, location, price_range) values ($1, $2, $3) returning *",
      [req.body.name, req.body.location, req.body.price_range]
    );
    console.log(results);
    res.status(201).json({
      status: "succes",
      data: {
        model: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Update Models

app.put("/api/v1/models/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE models SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );

    res.status(200).json({
      status: "success",
      data: {
        model: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
  console.log(req.params.id);
  console.log(req.body);
});

// Delete Model

app.delete("/api/v1/models/:id", async (req, res) => {
  try {
    const results = db.query("DELETE FROM models where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/v1/models/:id/addReview", async (req, res) => {
  try {
    const newReview = await db.query(
      "INSERT INTO reviews (model_id, name, review, rating) values ($1, $2, $3, $4) returning *;",
      [req.params.id, req.body.name, req.body.review, req.body.rating]
    );
    console.log(newReview);
    res.status(201).json({
      status: "success",
      data: {
        review: newReview.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});


// Sign up


// Sign in 


// Log out