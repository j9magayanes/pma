import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import ModelDetailPage from "./routes/ModelDetailPage";
import { ModelsContextProvider } from "./context/ModelsContext";
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
          </Switch>
        </Router>
      </div>
    </ModelsContextProvider>
  );
};

export default App;
