import React from 'react'
import { Link } from 'react-router-dom'
const heroImages = require.context('../../assets', true)


export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearence,
    characters,
}) => {

// const imagePath = `/assets/${id}.jpg`

  return (

    <div className='col'>
        <div className='animate__animated animate__fadeIn card'>
            
            <div className='row no-gutters'>
                <div className='col-4'>
                <img src={heroImages(`./${id}.jpg`)} className="card-img" alt={superhero}/>
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>{superhero}</h5>
                        <p className='card-text'>{alter_ego}</p>
                        {
                            (alter_ego !== characters) &&
                                <p className='text-muted'>{characters}</p>
                        }

                        <p className='card-text'>
                            <small className='text-muted'>{first_appearence}</small>
                        </p>

                        <Link to={`/hero/${id}`}>
                            Máss.....
                        </Link>

                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}
