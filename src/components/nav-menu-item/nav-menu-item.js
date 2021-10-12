import './nav-menu-item.scss';

const NavMenuItem = (props) => {
    let className = "nav-menu__item";
    if (props.logo) {
        className += ' nav-menu__item_logo'
    }
    
    return (
        <li className={className}>
            {/* eslint-disable-next-line*/}
            <a href="#" className="nav-menu__link">{props.content}</a>
        </li>
    )
}

export default NavMenuItem;