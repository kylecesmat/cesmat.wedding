import React         from "react";
import Page          from "../components/page/page";
import RegistryItems from "../../json/registryItems.js";
import _             from "lodash";

let RegistryPage = React.createClass({

    displayName : 'RegistryPage',

    renderRegistryItems()
    {
        return _.map(RegistryItems, (item, index) => {

            let Image = require('../../assets/images/' +  item.image);

            return (
                <div className='xsmall-6 small-3 columns' key={index}>
                    <a className='a registry__item' href={item.url} target='_blank'><img src={Image} />
                        <span className='registry__item__label'>{item.name}</span>
                    </a>
                </div>
            );
        });
    },

    render() {
        return (
            <Page name='registry'>
                <h1 className='h2 text-center'>Where we're registered</h1>
                <div className='row center-xsmall'>
                    {this.renderRegistryItems()}
                </div>
            </Page>
        );
    }
});

export default RegistryPage;
