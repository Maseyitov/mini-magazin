import { useContext, useState } from "react"
import { CartContext } from "./CartContext"
import Modal from "./Modal"
import "./Header.css"

let Header = () => {
    const { cartItems, addToCart, toggleModal, isModalOpen } = useContext(CartContext)

    const [favorites, setFavorites] = useState([])

    const toggleFavorite = (id) => {
        setFavorites(prev =>
            prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
        )
    }

    const items = [
        {
            id: 1,
            name: "Nike",
            price: 1200,
            img: "https://akn-barcin.a-cdn.akinoncloud.com/products/2023/02/24/1096626/02b54378-ff9d-4ce9-ac35-f523ea706722_size1800x1800_cropCenter.jpg",
        },
        {
            id: 2,
            name: "Jordan",
            price: 2000,
            img: "https://www.asphaltgold.com/cdn/shop/files/uNHxvmawZkM7aUGm1vQB_FQ7818-101-Nike-Wmns-Air-Jordan-1-Mid-SE-Sail-Black-Actice-Pink-Bordeaux-os-2_1511910b-3dbd-4b88-ae5e-bcfbaa2a5922_1200x1200.jpg?v=1726153961",
        },
        {
            id: 3,
            name: "Lacoste",
            price: 1500,
            img: "https://sportbrend.com/image/cache/webp/catalog/products/392/392f80e8041d08931c366b5ffd7db62d-500x500.webp",
        },
    ]

    return (
        <header>
            <div className="globalDivContayner-1">
                <h1>Shopping Bag</h1>
                <button onClick={toggleModal}> 🛒 {cartItems.reduce((total, item) => total + item.quantity, 0)}</button>
            </div>

            {items.map(item => (
                <div key={item.id} className="globalDivContayner-2">
                    <div className="divContayner-1">
                        <button>✕</button>
                    <button
                        className={favorites.includes(item.id) ? "heart-btn red" : "heart-btn"}
                        onClick={() => toggleFavorite(item.id)}>❤</button>
                    </div>
                    <div className="divContayner-2">
                        <img src={item.img} alt={item.name} />
                    </div>
                    <div className="divContayner-3">
                        <h3>{item.name}</h3>
                    </div>
                    <div className="divContayner-4">
                        <button onClick={() => addToCart(item)}>Add</button>
                    </div>
                    <div className="divContayner-5">
                        <h2>${item.price}</h2>
                    </div>
                </div>
            ))}

            {isModalOpen && <Modal />}
        </header>
    )
}

export default Header
