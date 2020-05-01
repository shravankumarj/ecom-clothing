import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Route } from 'react-router';
import './homepage.style.scss'
import Directory from '../components/directory/directory.component'


function homepage() {
    return (
        <div>
            <div className='homepage'>
                <Directory />
            </div>
        </div>

    );
}

export default homepage;
