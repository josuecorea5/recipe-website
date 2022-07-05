import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export const Recipe = () => {
  const params = useParams();
  const [detailRecipe , setDetailRecipe] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');
  const BASIC_URL = 'https://api.spoonacular.com/recipes';
  const getRecipie = async() => {
    const recipie = await fetch(`${BASIC_URL}/${params.name}/information?apiKey=${import.meta.env.VITE_API_KEY}`);
    const data = await recipie.json();
    setDetailRecipe(data)
  }

  useEffect(() => {
    getRecipie();
  },[params.name])
  return (
    <DetailWrapper>
      <div>
        <h2>{detailRecipe.title}</h2>
        <img src={detailRecipe.image} alt={detailRecipe.title} />
      </div>
      <Info>
        <Button 
          className={activeTab === 'instructions' ? 'active' : ''}
          onClick={() => setActiveTab('instructions')}
        >
          Instructions
        </Button>
        <Button 
          className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </Button>
        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{__html: detailRecipe.summary}}></h3>
            <h3 dangerouslySetInnerHTML={{__html: detailRecipe.instructions}}></h3>
          </div>
        )}
        {activeTab === 'ingredients' && <ul>
          {detailRecipe.extendedIngredients.map(ingredient => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>}
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 500px));
  justify-content: center;
  .active {
    background: linear-gradient(35deg, #494949,#313131);
    color: white;
  }
  h2{
    margin-bottom: 2rem;
  }
  ul{
    margin-top: 2rem;
  }
  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  img{
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

const Info = styled.div`
  margin-left: 2rem;
  margin-top: 2rem;
`;