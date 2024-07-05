// @ts-check

export const BreedsSelect = ({breeds, selectedBreed, onChangeBreed}) => {

  return (
    <select value={selectedBreed} onChange={onChangeBreed}>
      {breeds.map((breed, index) => (
        <option key={index} value={breed}>{breed}</option>
      ))}
    </select>
  )
}

export default BreedsSelect
