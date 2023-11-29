// Components
import Pizza from '../pizza/Pizza';

// Data
import { pizzaData } from '../../data/pizzaData';

export default function Menu() {
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      <ul className='pizzas'>
        {pizzaData.map((pizza, i) => (
          <Pizza pizza={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
}
