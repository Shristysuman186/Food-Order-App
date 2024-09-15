import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/logo";

const MenuItems = ({menuitems}) => {
    // console.log(menuitems);
    const dispatch = useDispatch();
    const handleItem = (it) => {
        dispatch(addItem(it));
    }
    return (
        <div className="menu-list">
            {
                menuitems.map((it) => (
                    <div data-testid="foodItem" key={it.card.info.id} className="menu-cards">
                        <div className="item">
                        <div className="menu-title">{it?.card?.info?.name}</div>
            <div className="menu-price">₹{it?.card?.info?.price ? it?.card?.info?.price / 100 : it?.card?.info?.defaultPrice/100}</div>
            <div className="menu-desc">{it?.card?.info?.description}</div>
            <button className="add-to-cart" onClick={() => handleItem(it)}>Add to Cart</button>
            </div>
            <div>
            <img src={CDN_URL + it?.card?.info?.imageId}  className="menu-image"/>
            </div>
                    </div>
                ))
            }
        </div>
    )
}

export default MenuItems;