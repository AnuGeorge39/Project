import React from 'react'

export default function Cards ({ name, email, message })  {
      return (
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
            <p className="card-text">{message}</p>
          </div>
        </div>
      );
    };
    
