import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import placholder from './placeholder.png'
import Cards from "./cards";


const Content = () => {

  let [data, setdata] = useState(null)

  const store = useSelector((store) => store);

  let _filter = {
    q:''
  }

  const [filter , setfilter] = useState(_filter)

  const [q , setq] = useState('')



 useEffect(() => {
    getrestraunts()
 },[filter])

 let __filterdata = (data , key) => {
console.log("data" , data , key);
  let _filterdata = {...filter , ...{[key]:data}}
  console.log("filt" , _filterdata);
  setq(data)
  setfilter(_filterdata)

 }


  let getrestraunts = async() => {

    try {

      
      // await axios({
      //   method: "get",
      //   url:
      //     "https://developers.zomato.com/api/v2.1/search",
      //   headers: {
      //     "User-key": "d591bee5e4afc2a8e5c34f9f581caa25",
      //   },
      //  filter
      // });

      axios.defaults.headers['User-key'] = "d591bee5e4afc2a8e5c34f9f581caa25"

      // https://developers.zomato.com/api/v2.1/search?q=wild


      let restaurantData =  await axios.get('https://developers.zomato.com/api/v2.1/search', 
      {
        params:
        {
          q
        }
      }
      // {
      //  headers: {
      //   "User-key": "d591bee5e4afc2a8e5c34f9f581caa25",
      //  }
     )
     

      setdata(restaurantData.data.restaurants)

      console.log("restaurantData------- ===>>> ", restaurantData.data.restaurants);

    } catch (error) {
      console.log(error.message)
      // alert(error.message, " Try Again!")
    }

  }



  return (
    <>
    <div className="col-md-4 filterArea">
      <h3>Restuarant Name</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="Hotel"
          placeholder="Searh Hotel..."
          onChange={(e) => __filterdata(e.target.value , 'q')}
        />
      </div>
      <h3>Locality</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="Locality"
          placeholder="Search locality..."
          // onChange={(e) => setlocality(e.target.value)}

        />
      </div>
      <h3>Cuisines</h3>
      <div className="form-group">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="ModernIndian" />
          <label className="form-check-label" htmlFor="ModernIndian">
            Modern Indian
            </label>
        </div>
      </div>
      <div className="form-group">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="FastFood" />
          <label className="form-check-label" htmlFor="FastFood">
            Fast Food
            </label>
        </div>
      </div>
      <div className="form-group">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="Continental" />
          <label className="form-check-label" htmlFor="Continental">
            Continental
            </label>
        </div>
      </div>
      <div className="form-group">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="NorthIndian" />
          <label className="form-check-label" htmlFor="NorthIndian">
            North Indian
            </label>
        </div>
      </div>
      <div className="form-group">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="Chinese" />
          <label className="form-check-label" htmlFor="Chinese">
            Chinese
            </label>
        </div>
      </div>
      <h3>Ratings</h3>
      <div className="form-group">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="rating1" />
          <label className="form-check-label" htmlFor="rating1">
            1
            </label>
        </div>
      </div>
      <div className="form-group">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="rating2" />
          <label className="form-check-label" htmlFor="rating2">
            2
            </label>
        </div>
      </div>
      <div className="form-group">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="rating3" />
          <label className="form-check-label" htmlFor="rating3">
            3
            </label>
        </div>
      </div>
      <div className="form-group">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="rating4" />
          <label className="form-check-label" htmlFor="rating4">
            4
            </label>
        </div>
      </div>
      <div className="form-group">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="rating5" />
          <label className="form-check-label" htmlFor="rating5">
            5
            </label>
        </div>
      </div>
    </div>
      <div className="col-md-8 contentArea">
        <div className="card-columns">
          {
            data && data.map((restaurant, key) => {
              console.log("==> ", restaurant)
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
