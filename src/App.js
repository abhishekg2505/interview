import React from "react";

// import Filter from "./filter";
import Header from "./header";
import Carousel from "./carousel";
import Content from "./content";



const App = (props) => {

  console.log("props in app.js ", props)

  return (
    <>
      <Header />
      <Carousel />
      <div className="container-fluid contentAreaWrap">
        <div className="container">
          <div className="row">
            {/* <Filter /> */}
            <Content />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
