import React from 'react';
import { Link } from 'react-router-dom';
import './Body.css';

const Body = (props) => {
    const item = props.itm;
    const {id, name, image} = item;

    
    return (
        <div className="col-md-3">
            <div className="cart-item">
                <Link to={`/registration/${name}`} id="pace-link">
                    <img src={image} alt=""/>
                    <div className="space">
                        <h5>{name}</h5>
                    </div>   
                </Link>
            </div>     
        </div>
    );
};

export default Body;


