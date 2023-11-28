export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 1200;
  const closeHour = 2300;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className='footer'>
      {hour} -{' '}
      {isOpen ? "We're currently open!" : "Sorry, we're currently closed!"}
    </footer>
  );
}
