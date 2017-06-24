import React from 'react'
import ReactDOM from 'react-dom'

import Home from './home.js'
import '../index.scss'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

export default class Index extends React.Component {
    render() {
        return (
            <Home />
        )
    }
}


ReactDOM.render(<Index />, document.getElementById('container'))