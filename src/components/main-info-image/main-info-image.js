import girl_image from './girl.png';

import './main-info-image.scss';

const MainInfoImage = () => {
    return (
        <div className="main-info-image">
            <img src={girl_image} alt="girl-with-coffee" />
        </div>
    );
}

export default MainInfoImage;