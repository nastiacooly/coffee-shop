import Header from '../header/header';
import NavMenu from '../nav-menu/nav-menu';
import MainInfo from '../main-info/main-info';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <NavMenu />

      <div className="app-container">

        <main>

          <div className="wrapper">
            <MainInfo />

          </div>

        </main>

      </div>

    </div>
  );
}

export default App;
