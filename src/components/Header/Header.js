import React from 'react';
import './Header.css';

const Header = () => {

    return (
        <div className="heading">
            <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
            <input className="search-item" type="search" name="search" placeholder="Search..." id=""/>
            <button className="search-btn">Search</button>
        </div>
        

    );
};

export default Header;