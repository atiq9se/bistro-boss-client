import React from 'react';
import Navbar from '../Shared/Footer/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
             <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;