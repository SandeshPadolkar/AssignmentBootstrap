import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./Page2"
import "./style.scss"

export class Page1 extends Component {
    render() {
        return (
            <div className='page1'>
                <h1>You are in Page1</h1>
                <center>
                <Link to='./page2' className='btn btn-primary'>Open Page2</Link>
                </center>
            </div>
        )
    }
}

export default Page1
