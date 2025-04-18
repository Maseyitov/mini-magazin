import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    const addToCart = (item) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(i => i.id === item.id)
            if (existingItem) {
                return prevItems.map(i =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                )
            } else {
                return [...prevItems, { ...item, quantity: 1 }]
            }
        })
    }

    const increaseQuantity = (id) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        )
    }

    const decreaseQuantity = (id) => {
        setCartItems(prev =>
            prev
                .map(item =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter(item => item.quantity > 0)
        )
    }

    const clearCart = () => {
        setCartItems([])
    }

    const toggleModal = () => {
        setIsModalOpen(prev => !prev)
    }

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            increaseQuantity,
            decreaseQuantity,
            clearCart,
            toggleModal,
            isModalOpen
        }}>
        {children}
        </CartContext.Provider>
    )
}