import React from 'react';

const HomeCard = ({data}) => {
    console.log(data);
    const countryDetailsStyle = {
        border: '2px solid red',
        margin: '5px',
        padding: '10px',
    }
    return (
                   
        <div style={countryDetailsStyle}>

        <h1>Title: {data.title}</h1>
        <p>Details: {data.body} </p>
        <p>Id: {data.id} </p>
    </div>
    );
};

export default HomeCard;