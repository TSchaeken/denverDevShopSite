import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
const env = process.env.NODE_ENV || 'development';

class HomePage extends Component {
    head() {
        return (
            <Helmet>
                <meta charSet="utf-8" />
                <title>Denver Dev Shop</title>
                <meta property="og:title" content="Custom Software Development" />
                <meta property="og:description" content="Custom Software Development" />
                <meta property="og:image" content="" />
                <meta property="og:type" content="article" />
                <link rel="canonical" href="http://www.denverdevshop.com" />
            </Helmet>
        )
    }
    render() {
        return (
            <div>
                {this.head()}
                <div>
                    <h1>Denver Dev Shop</h1>
                    <h2>Contact Us</h2>
                    <p>(720) 588-3355</p>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfZImwNRPJ7v_PcKh6p37GqrxxvoJ5FczlEoSFAjpgDfYXT5g/viewform?usp=sf_link"
                        target="_blank"
                    >
                        Contact Request
                    </a>
                </div>
            </div>
        )
    }
}

export default HomePage
