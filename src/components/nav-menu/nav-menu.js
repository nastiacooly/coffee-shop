import NavMenuItem from '../nav-menu-item/nav-menu-item';

import './nav-menu.scss';

const NavMenu = () => {
    const itemsContents = ['Coffee House', 'Our Coffee', 'For Your Pleasure'];

    const items = itemsContents.map(content => {
        if (content === "Coffee House") {
            return <NavMenuItem content={content} logo/>;
        }
        return <NavMenuItem content={content}/>;
    })
    
    return (
        <nav>
            <ul className="nav-menu">
                {items}
            </ul>
        </nav>
    );
}

export default NavMenu;