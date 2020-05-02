import React, { useState, useEffect } from "react";
import "./App.css";
import Character from "./components/Character.js";
import Axios from "axios";

const App = () => {
    let [characterData, setCharacterData] = useState([]);
    useEffect(() => {
      Axios
        .get(
          `https://swapi.py4e.com/api/people/`
        )
        .then((response) => {
          console.log(response.data);
          setCharacterData(response.data.results);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="card">
        {characterData.map(data => {
          return <Character chars={data} />
        })}
        {/* {console.log(characterData)} */}
      </div>
    </div>
  );
};
export default App;
