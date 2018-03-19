import React  from "react";
import "./star.css";

const StarRating = ({starsSelected = 0,totalStars = 5,onRate=f=>f}) => {
    return (
        <div className="star-rating">
            {[...Array(totalStars)].map((n,i)=>
                <Star key={i}
                      selected = {i<starsSelected}
                      onClick = {()=>onRate(i+1)}
                >      
                </Star>
            )
            }
        </div>
    );
};

const Star = ({selected = false,onClick=f=>f})=>
    <div className={(selected)?"star selected":"star"}
        onClick = {onClick}>

    </div>;



export default StarRating;