import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import MenuItems from "./MenuItems";

const Cart = () => {
    const menuItem = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const HandleclearCart = () => {
        dispatch(clearCart());
    };
    return (
        <div className="cart">
            <h1 className="cart-head">Cart</h1>
            {menuItem.length === 0 && <h1>Your Cart is empty!</h1>}
            <MenuItems menuitems={menuItem} />
            {menuItem.length != 0 && <div className="clearbtn-div"><button className="clearcart-btn" onClick={HandleclearCart}>Clear Cart</button></div> }          
        </div>
    )
}

export default Cart;