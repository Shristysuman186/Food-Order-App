import ResturantCard, { mostPopLabel } from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfResturants, setListOfResturants] = useState([]);
    const [filteredResturants, setFilteredResturants] = useState([]);
    const [filterText, setFilterText] = useState('');
    //Custom hook
    const onlineStatus = useOnlineStatus();

    //Higher order component ---> received from resturant card
    const PopularRestLabel = mostPopLabel(ResturantCard);
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try{
        const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const jsonValue = await data.json();
        console.log(jsonValue);
        setListOfResturants(jsonValue.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //optional chaining
        setFilteredResturants(jsonValue.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch(err){
            console.log("error fetching the details:", err);
        }
    };
    // if(listOfResturants.length === 0){        instead of this we can use terbary operator as well
    //     return <Shimmer/>
    // }

    if (onlineStatus === false) return <h1>Looks like you are Offline, Check your internet Connection!!</h1>
    return listOfResturants.length === 0 ? (<Shimmer/>) : (
        <div className="main_body">
            <div className="filter">
                <div className="search">
                    <input data-testid="searchInput" type="text" value={filterText} onChange={(e) => {
                        setFilterText(e.target.value);
                    }}/>
                    <button onClick={() => {
                        const searchContent = listOfResturants.filter(
                            (res) =>{ 
                                return res.info.name.toLowerCase().includes(filterText.toLocaleLowerCase());
                            }
                        );
                        setFilteredResturants(searchContent)
                    }     
                    }>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredData= listOfResturants.filter(
                        (res) => res.info.avgRating > 4.5
                        );
                        setFilteredResturants(filteredData) ; 
                }}>Top Rated Resturants</button>
                </div>
            <div className="rest-cards">
            {
                    filteredResturants.map((resturant) =>(
                        <Link to={"/restaurant/" + resturant.info.id} key= {resturant.info.id}>{
                        (resturant.info.totalRatingsString === '5K+') ? <PopularRestLabel resData = {resturant}/> : <ResturantCard resData = {resturant}/>
                        }</Link>)
                    ) 
                }
            </div>
        </div>
    );
}

export default Body;