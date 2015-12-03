import React from "react";
import Menu from '../menu/menu';

let Page = React.createClass({
    propTypes : {
        name : React.PropTypes.string
    },

    render() {
        let classes = [
            'page',
            'page--' + this.props.name
        ].join(' ').split();

        return (
            <div className={classes}>
                <Menu/>
                <div className='container'>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export default Page;
