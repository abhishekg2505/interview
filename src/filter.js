import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Create_CREATE_HOTEL_NAME_Action_Helper, Create_CREATE_LOCALITY_NAME_Action_Helper } from "./redux/action/restaurantAction";


const Filter = () => {
  const dispatch = useDispatch();

  let [searchHotels, setsearchHotels] = useState(null)
  let [locality, setlocality] = useState(null)
  let [Cuisines, setCuisines] = useState(null)
  let [Ratings, setRatings] = useState(null)


  dispatch(Create_CREATE_HOTEL_NAME_Action_Helper(searchHotels));
  dispatch(Create_CREATE_LOCALITY_NAME_Action_Helper(locality));

  return (
    <div className="col-md-4 filterArea">
      <h3>Restuarant Name</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="Hotel"
          placeholder="Searh Hotel..."
          onChange={(e) => setsearchHotels(e.target.value)}
        />
      </div>
      <h3>Locality</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="Locality"
          placeholder="Search locality..."
          onChange={(e) => setlocality(e.target.value)}

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
  );
}


export default Filter;
