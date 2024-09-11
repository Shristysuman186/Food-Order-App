import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import Menu from "./Menu";


const RestaurantInfo = () => {
    const [resInfo, setResInfo] = useState(null);
    const [menuInfo, setMenuInfo] = useState(null);
    const [showIndex, setShowIndex] = useState(0);

    const { resId } = useParams();   //this is a hook provided by react router to fetch the dynamic url data
    
    useEffect(() => {
        fetchInfo();
    }, []);

const fetchInfo = async () => {
    const data = await fetch('https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=' + resId);
    const jsonValue = await data.json();
    setResInfo(jsonValue?.data?.cards[2]?.card?.card?.info);
    setMenuInfo(jsonValue?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards); 
}

if(menuInfo === null) return <Shimmer/>

const categories = menuInfo.filter((cat) => cat?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <div className="restaurant-info rest-conatiner">
            <div className="rest-details">
            <h1>{resInfo?.name}</h1>
            <p>{resInfo?.cuisines.join(", ")}</p>
            <p>{resInfo?.avgRating} star</p>
            </div>
            {
                categories.map((catList, index) => (
                    <Menu items={catList?.card?.card} key = {catList?.card?.card.title} showItem={index===showIndex ? true : false} accordianHandle={() => index===showIndex? setShowIndex(null): setShowIndex(index)}/>
                ))
            }
            
        </div>
    )
}

export default RestaurantInfo;