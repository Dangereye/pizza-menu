// Components
import Pizza from '../pizza/Pizza';

// Data
import { pizzaData } from '../../data/pizzaData';

export default function Menu() {
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      {pizzaData.map((pizza, i) => (
        <Pizza
          name={pizza.name}
          photoName={pizza.photoName}
          ingredients={pizza.ingredients}
          price={pizza.price}
        />
      ))}
    </main>
  );
}
