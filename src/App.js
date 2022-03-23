import "./App.css";
import { connect } from "redux";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSeachChange = (event) => {
    const searchedFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchedFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onSeachHandler={onSeachChange}
        hint="search monsters"
        className="monsters-search-box"
      />
      <br />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
