import React   from 'react';
import {State} from "react-router";
import Pages   from '../../../json/menuItems';

let Header = React.createClass({
    displayName : 'Header',

    mixins : [State],

    getCurrentPage()
    {
        return this.context.router.getCurrentRoutes()[1].name;
    },

    render() {
        let currentPage = this.getCurrentPage();
        let Image;
        let Heading;

        Pages.map((page) => {
            if(page.route === currentPage) {
                Image   = page.image;
                Heading = page.heading;
            }
        });

        return (
            <div className='header'>
                <h1 className='h1 header__message'>{Heading}</h1>
                <div className='header__image'>
                    <img src={Image} />
                </div>
            </div>
        );
    }
});

export default Header;
