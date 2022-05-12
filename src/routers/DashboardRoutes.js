import { Navbar } from "../Components/ui/Navbar"
import { MarvelScreen } from '../Components/marvel/MarvelScreen'
import { SearchScreen } from '../Components/search/SearchScreen'
import { DcScreen } from '../Components/dc/DcScreen'
import {  Route, Routes } from 'react-router-dom'
import { Hero } from "../Components/hero/Hero"


export const DashboardRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className="container">
          <Routes>
              <Route path='marvel' element={<MarvelScreen/>}/>
              <Route path="hero/:id" element={<Hero/>}/>
              <Route path='dc' element={<DcScreen/>}/>
              <Route path='search' element={<SearchScreen/>}/>
              <Route path='/' element={<MarvelScreen/>}/>

          </Routes>
        </div>
    </>
  )
}
