import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline';
import Jumbotron from './Jumbotron';
const env = process.env.NODE_ENV || 'development';

class HomePage extends Component {
    constructor(props) {
        super(props);
    }
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
        const { classes } = this.props;
        return (
            <div>
                {this.head()}
                <CssBaseline />
                <div id='home'>
                    <Jumbotron />
                    <h2>Contact Us</h2>
                    <p>(720) 588-3355</p>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfZImwNRPJ7v_PcKh6p37GqrxxvoJ5FczlEoSFAjpgDfYXT5g/viewform?usp=sf_link"
                        target="_blank"
                    >
                        Contact Request
                    </a>
                </div>
                <div id='about'>
                    <Jumbotron />
                    <h2>Contact Us</h2>
                    <p>(720) 588-3355</p>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfZImwNRPJ7v_PcKh6p37GqrxxvoJ5FczlEoSFAjpgDfYXT5g/viewform?usp=sf_link"
                        target="_blank"
                    >
                        Contact Request
                    </a>
                </div>
                <div id='contact'>
                    <Jumbotron />
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
