import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class HomePage extends Component {
    head() {
        return (
            <Helmet>
                <title>Denver Dev Shop</title>
                <meta property="og:title" content="Custom Software Development" />
                <meta property="og:description" content="Custom Software Development" />
                <meta property="og:image" content="" />
            </Helmet>
        )
    }
    render() {
        return (
            <div>
                {this.head()}
                <div>Home Component YO!</div>
                <button onClick={() => console.log('Button pressed.')}>Press me!</button>
            </div>
        )
    }
}

export default HomePage
