import {Component} from 'react';

import Header from '../header/header';
import NavMenu from '../nav-menu/nav-menu';
import MainInfo from '../main-info/main-info';
import MainInfoImage from '../main-info-image/main-info-image';
import Divider from '../divider/divider';
import SearchCoffee from '../search-coffee/search-coffee';
import FilterCoffee from '../filter-coffee/filter-coffee';
import CoffeeList from '../coffee-list/coffee-list';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* Simulation of data from server */
      coffeeItems: [
        {name: "Aromistico Coffee 1kg", origin: "Brazil", price: 5.99},
        {name: "Espresso Coffee 1kg", origin: "Columbia", price: 7.89},
        {name: "Gold Coffee 0.8kg", origin: "Kenya", price: 4.55},
        {name: "Medium Roast 1kg", origin: "Brazil", price: 6.99},
        {name: "Blonde Coffee 1kg", origin: "Columbia", price: 5.99},
        {name: "Gold Coffee 0.4kg", origin: "Kenya", price: 2.99},
      ],
      searchValue: '',
      filter: ''
    }
  }
  
  searchItem = (searchValue, data) => {
    if (searchValue.length === 0) {
      return data;
    }

    return data.filter(coffee => {
      return coffee.name.toLowerCase().includes(searchValue);
    });
  }

  onUpdateSearchValue = (searchValue) => {
    this.setState({searchValue});
  }

  onUpdateFilterType = (filterType) => {
    this.setState({
      filter: filterType
    })
  }

  filterItems = (filter, data) => {
    if (!filter) {
      return data;
    }

    return data.filter(coffee => coffee.origin === filter);
  }

  render() {
    const {coffeeItems, searchValue, filter} = this.state;

    let visibleCoffeeList = this.searchItem(searchValue, coffeeItems);
    visibleCoffeeList = this.filterItems(filter, visibleCoffeeList);

    return (
      <div className="app">
        <Header />
        <NavMenu position="top-left"/>
  
        <div className="app-container">
  
          <main>
  
            <div className="wrapper wrapper_main-info">
              <MainInfoImage />
              <MainInfo />
            </div>
  
            <Divider/>
  
            <div className="wrapper wrapper_search-filter">
              <SearchCoffee onUpdateSearchValue={this.onUpdateSearchValue}/>
              <FilterCoffee onUpdateFilterType={this.onUpdateFilterType}/>
            </div>
  
            <div className="wrapper wrapper_coffee-list">
              <CoffeeList data={visibleCoffeeList}/>
            </div>
  
          </main>
  
        </div>
  
        <footer className="app-footer">
          <NavMenu position="center"/>
          <Divider image />
        </footer>
  
      </div>
    );
  }
}

export default App;
