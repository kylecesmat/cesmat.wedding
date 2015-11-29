import React from "react";
import Page  from "../components/page/page";

let HomePage = React.createClass({

    render() {
        return (
            <Page name='home'>
                <h1 className='h2 text-center'>We are getting married!</h1>
                <p className='p text-center'>The time has finally come for us to tie the knot and we are so excited to share the day with our friends & family!</p>
                <p className='p text-center'>Join us March 19th at 5:45pm for our ceremony, followed by a reception.</p>
            </Page>
        );
    }
});

export default HomePage;
