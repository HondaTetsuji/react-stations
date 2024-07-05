// @ts-check
import { useState, useEffect } from 'react';
import { DogImage } from './DogImage'
import { BreedsSelect } from './BreedsSelect';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('akita');
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
      setBreeds(Object.keys(data.message));
    });
  }, []);

  const ChangeBreed = (event) => {
    setSelectedBreed(event.target.value);
  }

  const [dogImages, setDogImages] = useState([]);
  const displayDogImage = () => {
    fetch('https://dog.ceo/api/breed/' + selectedBreed + '/images/random/12')
    .then(res => res.json())
    .then(data => {
      setDogImages(data.message);
    });
  }

  return (
    <div>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        onChangeBreed={ChangeBreed} />
      <button onClick={displayDogImage}>表示</button><br />
      {dogImages.map((image, index) => (
        <DogImage key={index} imageUrl={image} />
      ))}
    </div>
  )
}

export default DogListContainer
