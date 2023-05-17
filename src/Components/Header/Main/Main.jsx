/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import Footers from './Footers';


const Main = () => {
    return (
        <div>

            <Header></Header>
            <Outlet></Outlet>
            <Footers></Footers>

        </div>
    );
};

export default Main;