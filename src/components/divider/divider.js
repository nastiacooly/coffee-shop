import coffeeBeans from './coffee-beans_dark.png';

import './divider.scss';

const Divider = (props) => {
    let image = null;
    
    if (props.image) {
        image = <img src={coffeeBeans} alt="coffee-beans" />;
        return (
            <div className="divider divider_justify_space-between">
                <div className="divider__line"></div>
                {image}
                <div className="divider__line"></div>
            </div>
        );
    }

    return (
        <div className="divider divider_justify_center divider_margined">
            <div className="divider__line divider__line_wide"></div>
        </div>
    );
}

export default Divider;