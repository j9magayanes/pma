import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import UpdatePage from "./routes/UpdatePage";
import ModelDetailPage from "./routes/ModelDetailPage";
import { ModelsContextProvider } from "./context/ModelsContext";
import './index.css'
import AddModel from "./components/AddModel";

const App = () => {
  return (
    <ModelsContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/models/:id/update"
              component={UpdatePage}
            />
            <Route
              exact
              path="/models/:id"
              component={ModelDetailPage}
            />
            <Route
              exact
              path="/add"
              component={AddModel}
            />
            <Route
              exact
              path="/login"
              component={Login}
            />
                <Route
              exact
              path="/register"
              component={Register}
            />
          </Switch>
        </Router>
      </div>
    </ModelsContextProvider>
  );
};

export default App;
