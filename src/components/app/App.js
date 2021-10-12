import Header from '../header/header';
import NavMenu from '../nav-menu/nav-menu';
import MainInfo from '../main-info/main-info';
import MainInfoImage from '../main-info-image/main-info-image';
import Divider from '../divider/divider';
import SearchCoffee from '../search-coffee/search-coffee';
import FilterCoffee from '../filter-coffee/filter-coffee';
import CoffeeList from '../coffee-list/coffee-list';

import './App.scss';

function App() {
  /* Simulation of data from server */
  const coffeeItems = [
    {name: "Aromistico Coffee 1kg", origin: "Brazil", price: 5.99},
    {name: "Espresso Coffee 1kg", origin: "Columbia", price: 7.89},
    {name: "Gold Coffee 0.8kg", origin: "Kenya", price: 4.55},
    {name: "Medium Roast 1kg", origin: "Brazil", price: 6.99},
    {name: "Blonde Coffee 1kg", origin: "Columbia", price: 5.99},
    {name: "Gold Coffee 0.4kg", origin: "Kenya", price: 2.99},
  ];

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
            <SearchCoffee/>
            <FilterCoffee/>
          </div>

          <div className="wrapper wrapper_coffee-list">
            <CoffeeList data={coffeeItems}/>
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

export default App;
