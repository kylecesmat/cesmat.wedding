import React                  from "react";
import { RouteHandler, State} from "react-router";
import Menu                   from "../components/menu/menu";
import Header                 from "../components/header/header";
import Footer                 from "../components/footer/footer";

require('normalize.css');
require('../scss/app.scss');

let Application = React.createClass({

    mixins : [State],

    render() {
        return (
            <div className='app'>
                <Header />
                <Menu />
                <RouteHandler key={name} {...this.props} />
                <Footer />
            </div>
        );
    }
});

export default Application;
