import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

const heroImages = require.context('../../assets', true)



export const Hero = () => {
  const navigate = useNavigate();

  const {id} = useParams();

  const hero = useMemo(() => getHeroById(id), [id])

  const handleReturn = () => {
    navigate(-1,{
      replace: true
    })
  }
  
  if(!hero) {
    return <Navigate to='/'/>
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters 
  } = hero;

  const imagePath = `/assets/${id}.jpg`

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img src={heroImages(`./${id}.jpg`)} alt={superhero} className='img-thumbnail animate__animated animate__fadeInLeft'/>
      </div>

      <div className='col-8'>

        <h3>{superhero}</h3>
        <ul className='list-group '>
          <li className='list-group-item'> <b>Alter ego: {alter_ego}</b></li>
          <li className='list-group-item'> <b>Publisher: {publisher}</b></li>
          <li className='list-group-item'> <b>First Appearence: {first_appearance}</b></li>

          <h5 className='mt-3'>characters</h5>
          <p>{characters}</p>

        </ul>
          <button className='btn btn-outline-info' onClick={handleReturn}>
            Regresar
          </button>
      </div>
        
    </div>
  )
}
