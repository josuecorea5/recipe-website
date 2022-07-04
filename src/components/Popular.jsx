import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export const Popular = () => {
  const [popularRecipe, setPopularRecipe] = useState([]);
  const API_URL = 'https://api.spoonacular.com/recipes/random';
  useEffect(() => {
    getPopularRecipe();
  },[])

  const getPopularRecipe = async() => {
    const populateLocalStorate = localStorage.getItem('populate');

    if(populateLocalStorate) {
      setPopularRecipe(JSON.parse(populateLocalStorate));
    }else {      
      const response = await fetch(`${API_URL}?apiKey=${import.meta.env.VITE_API_KEY}&number=9`);
      const data = await response.json();
      localStorage.setItem('populate', JSON.stringify(data.recipes));
      setPopularRecipe(data.recipes);
    }
  }
  return (
    <div>
        <Wrapper>
          <h3>Popular Picks</h3>
          <Splide 
            options={{
              perPage: 4,
              arrows: false,
              drag: 'free',
              gap: '3rem'
            }}
          >
            {popularRecipe.map(recipe => (
              <SplideSlide key={recipe.id}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
              </SplideSlide>
            ))}
          </Splide>
        </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

  img{
    border-radius: 1rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.5));
`;
