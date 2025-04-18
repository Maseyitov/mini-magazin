import { useContext } from "react"
import { CartContext } from "./CartContext"
import "./Modal.css"

const Modal = () => {
    const {
        cartItems,
        toggleModal,
        increaseQuantity,
        decreaseQuantity
    } = useContext(CartContext);

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    )

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="close-btn" onClick={toggleModal}>✕</button>
                <h2>🛒 Ваша корзина</h2>
                {cartItems.length === 0 ? (
                    <p>Корзина пуста.</p>
                ) : (
                    <>
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index} className="cart-item">
                                    <img src={item.img} alt={item.name} width="60" />
                                    <span>{item.name}</span>
                                    <div className="qty-controls">
                                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                                    </div>
                                    <strong> ${item.price * item.quantity}</strong>
                                </li>
                            ))}
                        </ul>
                        <div className="final-son">
                        <h3>Итого: ${totalPrice}</h3>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Modal
