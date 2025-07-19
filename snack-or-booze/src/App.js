import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import AddItemForm from "./AddItemForm";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getItems() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      console.log("Snacks:", snacks);
      console.log("Drinks:", drinks);
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getItems();
  }, []);

  const addItem = async (newItem) => {
    const { type, ...data } = newItem;
    const addedItem = await SnackOrBoozeApi.addItem({type, ...data}); // adds different types of items, important!
  
    if (type === "snacks") {
      setSnacks(s => [...s, addedItem]);
    } else {
      setDrinks(d => [...d, addedItem]);
    }
  };
  


  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }
  console.log("App render — snacks:", snacks);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home snacks={snacks} drinks={drinks} />} />
            <Route path="/snacks" element={<Menu items={snacks} type="snacks" />} />
            <Route path="/drinks" element={<Menu items={drinks} type="drinks" />} />
            <Route path="/snacks/:id" element={<MenuItem items={snacks} cantFind="/snacks" />} />
            <Route path="/drinks/:id" element={<MenuItem items={drinks} cantFind="/drinks" />} />
            <Route path="/add" element={<AddItemForm addItem={addItem} />} />
            <Route path="*" element={<p>Sorry, page not found.</p>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;