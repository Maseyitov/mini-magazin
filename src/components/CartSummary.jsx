import { useContext } from "react"
import { CartContext } from "./CartContext"

const CartSummary = () => {
    const { cartItems } = useContext(CartContext)
    const total = cartItems.reduce((sum, item) => sum + item.price, 0)

    return (
        <div> 
        </div>
    )
}

export default CartSummary
