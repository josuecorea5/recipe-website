import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { Cuisine } from './Cuisine';
import { Home } from './Home'
import { Recipe } from './Recipe';
import { ShowSearched } from './ShowSearched';
import { AnimatePresence } from 'framer-motion';


export const Pages = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />}/>
        <Route path='/cuisine/:type' element={<Cuisine />}/>
        <Route path='/search/:query' element={<ShowSearched />}/>
        <Route path='/recipe/:name' element={<Recipe />}/>
      </Routes>
    </AnimatePresence>
  )
}
