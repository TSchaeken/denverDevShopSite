import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Nav from './pages/HomePage/components/NavBar';

export default () => {
    return (
        <div>
            <Nav/>
            <Route exact path="/" component={HomePage} />
        </div>
    )
}
