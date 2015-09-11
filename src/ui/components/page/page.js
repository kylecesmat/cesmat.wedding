import React from "react";

let Page = React.createClass({
    propTypes : {
        name : React.PropTypes.string
    },

    render() {
        let classes = 'page--' + this.props.name;

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
});

export default Page;
