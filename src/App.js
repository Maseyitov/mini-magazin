import React from "react"
import Header from "./components/Header"
import { CartProvider } from "./components/CartContext"
import CartSummary from "./components/CartSummary"

function App() {
    return (
        <CartProvider>
            <Header />
            <CartSummary />
        </CartProvider>
    )
}

export default App
