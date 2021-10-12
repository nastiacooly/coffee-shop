import './filter-coffee.scss';

const FilterCoffee = () => {
    return (
        <div className="filter">
            <span className="filter__label">Or filter</span>
            <button type="button" className="filter__button">Brazil</button>
            <button type="button" className="filter__button">Kenya</button>
            <button type="button" className="filter__button">Columbia</button>
        </div>
    );
}

export default FilterCoffee;