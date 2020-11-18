import React from 'react';
import './Header.css';
import NavigationBar from '../Navigation/NavigationBar';
import Showcase from '../Showcase/Showcase';

const Header = () => {
    return (
        <div>
            <NavigationBar />
            <Showcase />
        </div>
    );
};

export default Header;