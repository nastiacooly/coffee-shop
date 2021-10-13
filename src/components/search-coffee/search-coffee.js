import {Component} from 'react';

import './search-coffee.scss';

class SearchCoffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
        }
    }

    onUpdateSearchValue = (e) => {
        const searchValue = e.target.value.toLowerCase();
        this.setState({searchValue});

        const {onUpdateSearchValue} = this.props;
        onUpdateSearchValue(searchValue);
    }

    render() {
        const {searchValue} = this.state;
        return (
            <div className="search">
                <label htmlFor="coffee" className="search__label">Looking for</label>
                <input 
                    type="text" 
                    id="coffee" 
                    value={searchValue}
                    placeholder="start typing here..." 
                    className="search__input" 
                    onChange={this.onUpdateSearchValue}
                />
            </div>
        );
    }
}

export default SearchCoffee;