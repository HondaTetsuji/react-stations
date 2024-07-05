// @ts-check
import { useState } from 'react';
import { DogImage } from './DogImage'

export const Description = (props) => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg');
  const changeDogImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(json => {
      setDogUrl(json.message);
    })
  }

  return (
    <div>
      <h1>{props.text}</h1>
      <DogImage imageUrl={dogUrl} />
      <button onClick={changeDogImage}>更新</button>
    </div>
  )
}

export default Description
