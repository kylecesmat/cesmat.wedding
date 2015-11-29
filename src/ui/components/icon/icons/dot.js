'use strict';

let React = require('react');

module.exports = React.createClass({
    displayName : 'DotIcon',

    render()
    {
        return (
            <svg viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12.5" cy="12.5" r="3.5" />
            </svg>
        );
    }
});
