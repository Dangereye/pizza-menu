// Components
import Pizza from '../pizza/Pizza';

// Data
import { pizzaData } from '../../data/pizzaData';

export default function Menu() {
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}
