import { CDN_URL } from "../utils/logo";

const ResturantCard = (props) => {
    const {resData} = props;  /*If we keep like this only then the format will be {resData.info.name} ---> lets destructure this little more  */
    // console.log(resData);
    const {name, avgRating, sla, cuisines, cloudinaryImageId} = resData?.info; /* optional chaining */
    return(
        <div className="rest-conatiner">
            <div className="rest-card-style" data-testid="resCard">
            <div className="rest-card-image">
                <img src={CDN_URL + cloudinaryImageId} />
            </div>
            <div className="rest-card-details">
                 <div className="card-title">{name}</div> 
                <div className="card-trating">★ {avgRating}</div>
                <div className="card-time">{sla?.slaString}</div>
                <div className="card-cuisine">{cuisines.join(', ')}</div>
            </div>
            </div>
        </div>
    );
};

//Higher order component
export const mostPopLabel = (ResturantCard) => {
    return (props) => {
        return (
            <div className="veg-cards">
                <label className="veg-label">Most Popular</label>
                <ResturantCard {...props}/>
            </div>
        );
    };
};

export default ResturantCard;