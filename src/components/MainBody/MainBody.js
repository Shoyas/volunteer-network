import React, { useEffect, useState } from 'react';
//import fakeData from '../fakeData/fakeData';
import Body from '../Body/Body';

const MainBody = () => {
    
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch('https://gentle-river-59668.herokuapp.com/volunteerItems')
        .then(res => res.json())
        .then(data => setItem(data))
    }, [])
    
    return (
        <div className="cart row d-flex">
            <div className="row">
                {
                    item.map((item) => <Body key={item.id} itm={item}></Body>)
                }
            </div>
        </div>
    );
};

export default MainBody;