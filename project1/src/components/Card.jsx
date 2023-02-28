import React from 'react';

const Card = (props) => {
    return (
        <div className="Card">
            <img className="card-img" src={props.image} alt={props.name} />
            <h3 className="card-name">{props.name}</h3>
            <h4 className="card-desc">{props.description}</h4>
            <a target={'_blank'} href={props.link}>
                <button className="card-link">View Menu</button>
            </a>
        </div>
    )
}

export default Card;
