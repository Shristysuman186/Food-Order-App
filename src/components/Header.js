import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/Bitebox.svg";

const Header = () => {
    // const[loginbtn, setloginbtn] = useState("Login");
    // function buttonChangeHandler(){
    //     loginbtn === "Login" ? setloginbtn("Logout") : setloginbtn("Login");
    // }
    const cartItem = useSelector((store) => store.cart.items);
    console.log(cartItem);
    return(
        <div className="main_header">
            <div className="logo">
            <Link to="/"><img src={logo} className='header-logo'/></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/cart">Cart({cartItem.length})</Link></li>
                    {/* <li>
                        <button onClick={buttonChangeHandler}>{loginbtn}</button>
                    </li> */}
                </ul>
            </div>
        </div>
    );
}

export default Header;