// Menu.jsx
import './NavBar.css';
import CardWidget from './CartWidget';

const NavBar = () => {
    return (
      <header className="header">
      <div className="header-left">
        <img className="logo" src="./public/logo havanna.png" alt="Logo" />
      </div>
      <div className="header-centro">
        <nav>
          <ul className="NavBar">
            <li><a href="#">Productos</a></li>
            <li><a href="#">Havanna en el mundo</a></li>
            <li><a href="#">Novedades</a></li>
            <li><a href="#">Ventas corporativas</a></li>
          </ul>
        </nav>
      </div>
      <div className="header-derecho">
      <CardWidget />
        </div>
    </header>
  );
  }
  
  export default NavBar;

