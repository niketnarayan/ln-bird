import React from "react";
import kiranawala1 from "../Components/Assests/1.png";

function Demo() {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img 
          className="card-img-top" 
          src={kiranawala1} 
          alt="Card image cap" 
        />
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}
export default Demo;
