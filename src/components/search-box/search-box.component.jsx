import './search-box.css';
const SearchBox = ({ onSeachHandler, className, hint }) => (
    <input
        className={`search-box ${className}`}
        type="search"
        placeholder={hint}
        onChange={onSeachHandler}
    />
);

export default SearchBox;
