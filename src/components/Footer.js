import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
    const {loggedinUser, setUserName} = useContext(UserContext);
    //writing this just to show how can we chnage the value of the context data
    //first need to pass it from somewhere...here passing state variable from app.js
    const instaHandler = () => {
        setUserName('the_dailydeveloper186');
    }
    return (
        <div className="footer-sec" onClick={instaHandler}>
            Developed By @{loggedinUser} 
        </div>
    )
}

export default Footer;