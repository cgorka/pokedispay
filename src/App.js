import React from "react";
import "./App.css";
import "react-medium-image-zoom/dist/styles.css";
import Header from "./Header";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import Snorlax from "./Pokemons/Snorlax";
import Series from "./Series/Series";
import { Home } from "./Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/Snorlax">
            <Snorlax />
          </Route>
          <Route path="/Series">
            <Series></Series>
          </Route>
          <Route exact path="/Child/:id" component={Child} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}
export default App;
