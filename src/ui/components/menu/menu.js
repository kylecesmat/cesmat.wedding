import React     from "react";
import MenuItems from "../../../util/menuItems";
import MenuItem  from "./menu-item";
import _         from 'lodash';

let Menu = React.createClass({
    displayName : 'Menu',

    renderMenu()
    {
        let MenuLinks = [];

        _.map(MenuItems, (item, index) => {
            MenuLinks.push(
                <MenuItem
                    key   = {'menu-item-' + index}
                    label = {item.label}
                    route = {item.route}
                />
            );
        });

        return MenuLinks;
    },

    render() {
        return (
            <div className='menu'>
                <div className='menu-item__wrapper'>
                    {this.renderMenu()}
                </div>
            </div>
        );
    }
});

export default Menu;
