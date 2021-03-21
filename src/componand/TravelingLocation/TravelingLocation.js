import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './travelling.css'

const TravelingLocation = (props) => {
    const { name, photo } = props.location;
    return (
        <Card style={{ width: '18rem' }} className="img-container">
            <Link to={`/destination/${name}`}>
                <div className='travel'>
                    <div className="photo">
                        <img src={photo} alt="photo" />
                    </div>

                    <div className="centered">
                        <h3>{name}</h3>
                    </div>
                </div>
            </Link>
        </Card>

    );
};

export default TravelingLocation;