import React from 'react';

import Nav from '../Nav';
import Info from '../Info';

class Home extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Nav />
                <Info />
            </div>
        )
    }
}

export default Home;