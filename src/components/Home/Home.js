import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import HomeCard from './HomeCard';

const Home = () => {
    const [apiDetails, setApiDetails] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setApiDetails(data)
        })
    }, [])

    return (
        <div>
            <div>
            <h1>Show Api Data</h1>
            {
                apiDetails.map(dt => <HomeCard key={dt.id} data={dt}/>)
            }

        </div>
    
        </div>
    );
};


export default Home;