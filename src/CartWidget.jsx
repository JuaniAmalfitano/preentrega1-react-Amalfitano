import './NavBar.css';

const CardWidget = () => {
    return (
        <div className="cart">
            <img className="cart-icon" src="/public/carrito-de-compras.png" alt="Carrito" />
            <span className="cart-count">0</span>
        </div>
    );
}

export default CardWidget;