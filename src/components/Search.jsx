import React,{useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export const Search = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  }

  return (
    <FormStyle onSubmit={handleSubmit}>
      <div>
        <FaSearch/>
        <input 
          type="text" 
          onChange={(e) => setSearch(e.target.value)} 
          value={search}
        />
      </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
  margin: 0rem 7rem;
  div{
    position: relative;
    width: 100%;
  }
  input{
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: .7rem 2.5rem;
    border: none;
    border-radius: .5rem;
    outline: none;
    width: 100%;
  }

  svg{
    position: absolute;
    top: 35%;
    left: 3%;
    transform: translate(100% - 50%);
    color: white;
  }
`;
