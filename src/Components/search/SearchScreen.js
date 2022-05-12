import { useLocation, useNavigate } from 'react-router-dom';
import { getHeroByName } from '../../selectors/getHeroByName';
import { HeroCard } from '../hero/HeroCard';
import { useForm } from '../hooks/useForm';
import queryString from 'query-string'
import {  useMemo } from 'react';

// const initialState = [{}]

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {q = ''} = queryString.parse(location.search);
  const query = useMemo(() => getHeroByName(q), [q]);
  const [formValues, handleInputChange] = useForm({
    searchText: q
  }) 
  const {searchText} = formValues;
  
  
  
  // navigate(route)
  
  const handleSearch = (e) => {
    e.preventDefault();

    

    navigate(`?q=${searchText}`)
    

  }
  
  // console.log(lastPath)

  

  return (
    <>
        <h1>Búsquedas</h1>
        <hr/>
        <div className='row'>
          <div className='col-5'>
            <h4> Search Form</h4>
            <hr/>

            <form onSubmit={handleSearch}>
              <input
                 type="text" placeholder="Buscar un héroe" className='form-control' name='searchText' autoComplete='off'  onChange={handleInputChange}>

                </input>
                <button type='submit' className='btn btn-outline-primary mt-1 ' > Buscar...</button>
            </form>
          </div>

          <div className='col-7'>

            {(q === '')
              ? <div className='animate__animated animate__fadeIn alert alert-info'>Buscar un héroe</div> : (query.length === 0) && <div className='animate__animated animate__fadeIn alert alert-info'> no hay resultados: {q}</div>
            }
            {
              query.map(heroe => {
                return <HeroCard key={heroe.id} {...heroe}/>
              })
            }
            {/* {
              (personaje.length === 0) && <div className='alert alert-info'>No hay un héroe con ese nombre</div>
            } */}
            
          </div>

        </div>
    </>
  )
}
