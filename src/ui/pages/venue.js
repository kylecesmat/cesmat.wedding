import React from "react";
import Page  from "../components/page/page";

let VenuePage = React.createClass({

    render() {
        return (
            <Page name='venue'>
                <h1 className='h2 text-center'>Where we're getting hitched</h1>
                <p className='p text-center'>Private Residence - <a className='a' href='https://www.google.com/maps/place/1265+S+Gilbert+Rd,+Gilbert,+AZ+85296/@33.3268853,-111.7924159,13z/data=!4m7!1m4!3m3!1s0x872ba96028d5c8ff:0xc417530e4096a03d!2s1265+S+Gilbert+Rd,+Gilbert,+AZ+85296!3b1!3m1!1s0x872ba96028d5c8ff:0xc417530e4096a03d' target='_blank'>1265 S Gilbert Rd Gilbert, AZ 85296</a></p>
                <div className='venue__map text-center'>

                </div>
            </Page>
        );
    }
});

export default VenuePage;
