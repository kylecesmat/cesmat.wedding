import React            from "react/addons";
import { RouteHandler } from "react-router";
import Menu             from "../components/menu/menu";

require('normalize.css');
require('../scss/app.scss');

let Application = React.createClass({
    render() {
        return (
            <div className='app'>
                <Menu />
                <RouteHandler key={name} {...this.props} />
            </div>
        );
    }
});

export default Application;
