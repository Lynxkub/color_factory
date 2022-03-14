import React from 'react';
import {useParams} from 'react-router-dom'

const ColorPage = () => {
    const {color} = useParams();
    console.log(color);
    return (
        <body style = {{backgroundColor : color}}>
        <div style = {{backgroundColor : color}}>
            <h1 style = {{backgroundColor : color}}>This is the {color} page</h1>
        </div>
        </body>
    )
}

export default ColorPage;