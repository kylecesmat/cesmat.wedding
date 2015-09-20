import React                  from "react";
import { RouteHandler, State} from "react-router";
import Menu                   from "../components/menu/menu";
import Header                 from "../components/header/header";
import Footer                 from "../components/footer/footer";

require('normalize.css');
require('../scss/app.scss');

let Application = React.createClass({

    mixins : [State],

    getInitialState() {
        return {
            routeName : null
        };
    },

    render() {
        return (
            <div className='app'>
                <Header />
                <Menu handleRouteUpdate={this.updateRoute} />
                <RouteHandler {...this.props} />
                <Footer />
            </div>
        );
    }
});

export default Application;
