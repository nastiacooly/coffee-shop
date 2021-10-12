import './search-coffee.scss';

const SearchCoffee = () => {
    return (
        <div className="search">
            <label for="coffee" className="search__label">Looking for</label>
            <input type="text" id="coffee" placeholder="start typing here..." className="search__input" />
        </div>
    );
}

export default SearchCoffee;