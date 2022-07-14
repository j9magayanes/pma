import React from "react";
import Header from "../components/Header";
import AddModel from "../components/AddModel";
import ModelList from "../components/ModelList";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <ModelList />
    </div>
  );
};

export default Home;
