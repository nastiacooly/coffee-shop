import Header from '../header/header';
import NavMenu from '../nav-menu/nav-menu';
import MainInfo from '../main-info/main-info';
import MainInfoImage from '../main-info-image/main-info-image';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <NavMenu />

      <div className="app-container">

        <main>

          <div className="main-info-wrapper">
            <MainInfoImage />
            <MainInfo />
          </div>

        </main>

      </div>

    </div>
  );
}

export default App;
