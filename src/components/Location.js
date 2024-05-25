// src/components/LocationMap.js
import React from 'react';
import './Location.css'; // Assuming you'll create a separate CSS file for styling

const Location = () => {
    return (
        <div className="map-container">
            <h2 className="map-heading">Visit Us at Our Office</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3606.5448679290307!2d55.40729567538579!3d25.319491177632475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE5JzEwLjIiTiA1NcKwMjQnMzUuNSJF!5e0!3m2!1sen!2sae!4v1715023080582!5m2!1sen!2sae"
                frameBorder="0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, width: '100%', height: '450px', borderRadius: '10px' }}
            ></iframe>
        </div>
    );
};

export default Location;
