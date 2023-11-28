export default function Pizza({ name, photoName, ingredients, price }) {
  return (
    <div className='pizza'>
      <img src={`images/${photoName}`} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}
