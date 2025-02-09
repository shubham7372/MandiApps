import React from "react";
import Sidebar from "../components/Sidebar";
import "./pages.css";
import { Link } from 'react-router-dom'
import yourImage from "./farmer.png";
import Animal from "./anime_cow.gif";
const UploadProduct = () => {
  return (
    <div className="dash-main">
      <Sidebar />

      <div className="rowses">
        <h1 style={{ textAlign: "center" }}>UploadProduct</h1>
        <div className="ffff">
          {" "}
          <div className="columnnn">
            <div className="cardses">
              {/* <h3>Card 1</h3> */}
              <div className="circular-image">
                <Link to="/farmer/CropsUpload" className="circular-image-link">
                  <img src={yourImage} alt="Description of your image" />
                </Link>
                Crops
              </div>
            </div>
          </div>
          <div className="columnnn">
            <div className="cardses">
              {/* <h3>Card 2</h3> */}
              <div className="circular-image">
                <Link to="/farmer/AnimalsUpload" className="circular-image-link">
                  <img src={Animal} alt="Description of your image" />
                </Link>
                Animals
              </div>
            </div>
          </div>
          <div className="columnnn">
            <div className="cardses">
              {/* <h3>Card 3</h3> */}
              <div className="circular-image">
                <Link to="/farmer/FertilizerUpload" className="circular-image-link">
                  <img src={yourImage} alt="Description of your image" />
                </Link>
                Fertilizer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadProduct;
