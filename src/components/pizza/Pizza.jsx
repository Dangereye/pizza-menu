export default function Pizza({ pizza }) {
  if (pizza.soldOut) return null;

  return (
    <li className='pizza'>
      <img src={`images/${pizza.photoName}`} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.price}</span>
      </div>
    </li>
  );
}
