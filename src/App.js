import './App.css';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);
    const [title, setTitle] = useState('');
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
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
    const onTitleChange = (event) => {
        const title = event.target.value.toLocaleLowerCase();
        setTitle(title);
    };

    return (
        <div className="App">
            <h1 className="app-title">{title}</h1>
            <SearchBox
                onSeachHandler={onSeachChange}
                hint="search monsters"
                className="monsters-search-box"
            />
            <br />
            <SearchBox
                onSeachHandler={onTitleChange}
                hint="set title"
                className="monsters-search-box"
            />
            <CardList monsters={filteredMonsters} />
        </div>
    );
};

export default App;
