import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import placholder from './placeholder.png'
import Cards from "./cards";


const Content = () => {

  let [data, setdata] = useState(null)

  const store = useSelector((store) => store);


  useEffect(() => {


    (async () => {
      console.log("Redux_Store ==>> ", store)
      try {

        let restaurantData = await axios({
          method: "get",
          url:
            "https://developers.zomato.com/api/v2.1/search",
          headers: {
            "User-key": "d591bee5e4afc2a8e5c34f9f581caa25",
          },
        });

        setdata(restaurantData.data.restaurants)

        console.log("restaurantData------- ===>>> ", restaurantData.data.restaurants);

      } catch (error) {
        console.log(error.message)
        alert(error.message, " Try Again!")
      }
    })()



  }, [store])



  return (
    <>
      <div className="col-md-8 contentArea">
        <div className="card-columns">
          {
            data && data.map((restaurant, key) => {
              // console.log("==> ", restaurant)
              return <Cards
                key={key}
                name={restaurant.restaurant.name}
                locality={restaurant.restaurant.locality}
                cuisines={restaurant.restaurant.cuisines}
                rating={restaurant.restaurant.user_rating.aggregate_rating}
                thumb={restaurant.restaurant.featured_image ? restaurant.restaurant.featured_image : placholder}
                
              />

            })
          }
          </div>
      </div>
    </>
  );
};

export default Content;
