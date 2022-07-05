import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

export const ShowSearched = () => {
  const BASIC_API= 'https://api.spoonacular.com/recipes';
  const [searchRecipies, setSearchRecipies] = useState([]);
  const params = useParams();
  const getRecipies = async(name) => {
    const data = await fetch(`${BASIC_API}/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${name}`);
    const response = await data.json();
    setSearchRecipies(response.results);
  }

  useEffect(() => {
    getRecipies(params.query);
  },[params.query])

  return (
    <Grid>
      {searchRecipies.map(item => (
        <Card key={item.id}>
          <Link to={`/recipe/${item.id}`}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Link>
        </Card>
      ))}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;
  }
`;
