import NavMenuItem from '../nav-menu-item/nav-menu-item';

import './nav-menu.scss';

const NavMenu = (props) => {
    const itemsContents = ['Coffee House', 'Our Coffee', 'For Your Pleasure'];

    const items = itemsContents.map(content => {
        if (content === "Coffee House") {
            return <NavMenuItem content={content} logo/>;
        }
        return <NavMenuItem content={content}/>;
    })

    let className = "nav-menu";
    if (props.position === "top-left") {
        className += ' nav-menu_position_top-left'
    }
    if (props.position === "center") {
        className += ' nav-menu_position_center'
    }
    
    return (
        <nav>
            <ul className={className}>
                {items}
            </ul>
        </nav>
    );
}

export default NavMenu;