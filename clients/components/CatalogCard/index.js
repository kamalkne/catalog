import React from 'react'
import './style.css'

const CatalogCard = ({ name, image }) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt="Logo" />
            </div>
            <div className="card-name">{name}</div>
        </div>
    )
}

export default CatalogCard
