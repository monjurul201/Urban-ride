import React from 'react';
import { useParams } from 'react-router';
import search from '../../fakeData/search'
import './destination.css'
const Destination = () => {

    const { vehicle } = useParams()
    console.log(vehicle);
    const destinationVh = search.find(vh => vh.vehicle === vehicle);
    console.log(destinationVh);

    return (
        <div className='destination'>

            <div className='inputFeild'>
               pick from:
                 <br />
                <input type="text" name='start' required />
                <br />
                 Pick To:
                <br />
                <input type="text" name='End' required />
                <br />
                <input type="submit" value="Search" />
            </div>
            <div className='photo'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703724756!2d90.27923971281079!3d23.78057325785754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1616244946332!5m2!1sen!2sbd" style={{ border: 0, width: '100%', height: '300px', borderRadius: '15px' }} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    );
};

export default Destination;