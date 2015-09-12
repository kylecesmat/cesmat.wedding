import React from "react";

let Page = React.createClass({
    propTypes : {
        name : React.PropTypes.string
    },

    render() {
        let classes = 'page--' + this.props.name;

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
