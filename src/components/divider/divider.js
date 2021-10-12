import coffeeBeans from './coffee-beans_dark.png';

import './divider.scss';

const Divider = (props) => {
    let image = null;
    if (props.image) {
        image = <img src={coffeeBeans} alt="coffee-beans" />;
    }

    return (
        <div className="divider">
            <div className="divider__line"></div>
            {image}
            <div className="divider__line"></div>
        </div>
    );
}

export default Divider;