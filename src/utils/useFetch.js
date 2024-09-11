import { useState, useEffect } from "react";

const useFetch = () => {

const [listOfResturants, setListOfResturants] = useState([]);
const [filteredResturants, setFilteredResturants] = useState([]);

useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.11920&lng=85.39630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonValue = await data.json();
        setListOfResturants(jsonValue.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //optional chaining
        setFilteredResturants(jsonValue.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch(err){
            console.log("error fetching the details:", err);
        }
    };

return [listOfResturants, filteredResturants]; //when we need to return two values then we can use array
//In component use like: const [listOfResturants, filteredResturants] = useFetch();   and use these in curly braces wherever
//required {listOfResturants} , {filteredResturants}
}

export default useFetch;