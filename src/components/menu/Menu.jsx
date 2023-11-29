// Components
import Pizza from '../pizza/Pizza';

// Data
import { pizzaData } from '../../data/pizzaData';

export default function Menu() {
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      {pizzaData.length > 0 ? (
        <ul className='pizzas'>
          {pizzaData.map((pizza, i) => (
            <Pizza pizza={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </main>
  );
}
