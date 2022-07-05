import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Cuisine = () => {
  const params = useParams();
  const [cuisine, setCuisine] = useState([]);
  const BASIC_API= 'https://api.spoonacular.com/recipes';

  const getCuisines = async(name) => {
    const data = await fetch(`${BASIC_API}/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&cuisine=${name}`);
    const response = await data.json();
    setCuisine(response.results);
  }

  useEffect(() => {
    getCuisines(params.type);
  },[params.type])

  return (
    <Grid
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      {cuisine.map(item => (
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

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
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
