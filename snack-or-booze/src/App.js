import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import Snack from "./MenuItem";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getItems() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getItems();
  }, []);

  const addItem = async (newItem) => {
    const { type, ...data } = newItem;
    const addedItem = await SnackOrBoozeApi.addItem(type, data);
  
    if (type === "snacks") {
      setSnacks(s => [...s, addedItem]);
    } else {
      setDrinks(d => [...d, addedItem]);
    }
  };
  


  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} />
            </Route>
            <Route exact path="/snacks">
              <Menu snacks={snacks} title="Snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu drinks={drinks} title="Drinks"/>
            </Route>
            <Route path="/snacks/:id">
              element= {<MenuItem items={snacks} cantFind="/snacks" />}
            </Route>
            <Route path="/drinks/:id">
              element= {<MenuItem items={drinks} cantFind="/drinks" />}
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
