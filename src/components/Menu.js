import MenuItems from "./MenuItems";

const Menu = ({items, showItem, accordianHandle}) => {
    
    return (
        <div className="menu-items">
            <div className="category" onClick={accordianHandle}>{items.title} ({items.itemCards.length})</div>
            {
                showItem && <MenuItems menuitems={items.itemCards}/>
            }
        </div>
    )
}

export default Menu;