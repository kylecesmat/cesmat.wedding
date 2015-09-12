import React from 'react';

let Footer = React.createClass({
    displayName : 'Footer',

    render() {
        return (
            <div className='footer'>
                <div className='footer__content'>
                    Kyle &amp; Taylor - <i>March 18th 2016</i>
                </div>
            </div>
        );
    }
});

export default Footer;
