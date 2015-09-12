import React from "react";

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
                <div className='container'>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export default Page;
