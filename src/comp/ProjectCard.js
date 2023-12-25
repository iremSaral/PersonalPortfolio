import React from 'react';

import './ProjectCard.css';

export const Card = ({ img, title, text, link, tech }) => {
    return (
        <div style={{ justifyContent: 'center', alignItems: 'center',marginLeft:'40px' }}>
            <div className="card" onClick={() => console.log("vklrm")}>
                <img src={img} className="card-img-top" alt="Sanotimer" />
                <div className='card-body'>
                    <h2 className="card-title">{title}</h2>
                    <p className="card-info">{text}</p>
                    <p className="card-tech">{tech}</p>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                     Details
                    </a>
                </div>
            </div>
        </div>
    )
}
