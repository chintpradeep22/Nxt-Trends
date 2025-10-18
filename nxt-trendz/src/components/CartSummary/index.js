// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalPrice = cartList.reduce(
        (acc, eachItem) => acc + eachItem.price * eachItem.quantity,
        0,
      )
      return (
        <div className="cart-order-summary">
          <h1>Order Total: Rs {totalPrice}/-</h1>
          <p>{cartList.length} Items in Cart</p>
          <button type="button">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
