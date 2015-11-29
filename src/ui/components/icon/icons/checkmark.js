'use strict';

let React = require('react');

module.exports = React.createClass({
    displayName : 'CheckmarkIcon',

    render()
    {
        return (
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M31.5 8.8c0 .5-.1 1-.5 1.4L13.8 27.4c-.4.4-.8.5-1.4.5s-1-.1-1.4-.5l-10-10C.6 17 .5 16.6.5 16s.1-1 .5-1.4l2.7-2.7c.4-.4.8-.5 1.4-.5s1 .1 1.4.5l5.9 5.9 13-13.2c.4-.4.8-.5 1.4-.5.6 0 1 .1 1.4.5l2.7 2.7c.5.4.6.9.6 1.5z"/></svg>
        );
    }
});
