import React from "react";
import Page  from "../components/page/page";

let HomePage = React.createClass({

    render() {
        return (
            <Page name='home'>
                <h1 className='h2 text-center'>We are getting married!</h1>
            </Page>
        );
    }
});

export default HomePage;
