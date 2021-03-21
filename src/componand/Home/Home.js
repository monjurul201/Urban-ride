import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import metroLocation from '../../fakeData/metroLocation';
import Header from '../Header/Header';
import TravelingLocation from '../TravelingLocation/TravelingLocation';
import './home.css'
const Home = () => {
    const [locations, setLocations] = useState(metroLocation);
    return (
        <div className='homePage' style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url('https://i.ibb.co/5MBhkFG/Bg.png')`,
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
           

        }} >
           

            <Grid  container direction="row" justify="center" className="locations-container">
                {
                    locations.map(loc => <TravelingLocation location={loc} key={loc.id}></TravelingLocation>)
                }

            </Grid>


        </div>
    );
};

export default Home;