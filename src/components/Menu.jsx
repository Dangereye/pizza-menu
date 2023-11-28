// Components
import Pizza from './Pizza';

// Data
import { pizzaData } from '../data/pizzaData';

export default function Menu() {
  return (
    <div>
      <h2>Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}
