import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Category = () => {
  return (
    <List>
      <Slink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </Slink>
      <Slink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
      <Slink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </Slink>
    </List>
  )
}

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(10rem,1fr));
  justify-items: center;
  margin: 2rem 0rem;
`;

const Slink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 7rem;
  height: 7rem;
  cursor: pointer;
  transform: scale(0.8);

  h4{
    color: white;
  }
  svg{
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #E94057);

    svg{
      color: white;
    }
    h4{
      color: white;
    }
  }
`;