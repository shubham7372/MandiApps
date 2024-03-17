// App.jsx

import React, { useState } from "react";
import "../css/Animalss.css";
import murrah from "../img/shivam.png";

function Animalss() {
  const [showLeft, setShowLeft] = useState(false);

  function toggleFilters() {
    setShowLeft(!showLeft);
  }

  function filterProducts() {
    const checkboxes = document.querySelectorAll(".filter-checkbox");
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach((card) => {
      let showCard = true;
      checkboxes.forEach((checkbox) => {
        if (
          checkbox.checked &&
          card.dataset[checkbox.name] !== checkbox.value
        ) {
          showCard = false;
        }
      });
      if (showCard) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  function clearFilters() {
    const checkboxes = document.querySelectorAll(".filter-checkbox");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    filterProducts();
  }

  return (
    <div className="producttt">
      <button className="menu-button" onClick={toggleFilters}>
        Filter
      </button>
      <div className={`container ${showLeft ? "show-left" : ""}`}>
        <div className="left" id="filterOptions">
          <h2 style={{ color: "#333" }}>Filters</h2>
          <h3 style={{ color: "#555" }}>Cows</h3>
          <label>
            <input
              type="checkbox"
              name="category"
              value="electronics"
              className="filter-checkbox"
            />
            Jersey
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="category"
              value="clothing"
              className="filter-checkbox"
            />
            Shorthorn
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="category"
              value="books"
              className="filter-checkbox"
            />
            Red Sindhi
          </label>
          <br />

          <h3 style={{ color: "#555" }}>Buffalo</h3>
          <label>
            <input
              type="checkbox"
              name="clothing"
              value="Murrah"
              className="filter-checkbox"
            />
            Murrah
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="brand"
              value="samsung"
              className="filter-checkbox"
            />
            Surti
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="brand"
              value="nike"
              className="filter-checkbox"
            />
            Jaffrabadi
          </label>
          <br />

          <h3 style={{ color: "#555" }}>Goat</h3>
          <label>
            <input
              type="checkbox"
              name="brand"
              value="apple"
              className="filter-checkbox"
            />
            Barbari
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="brand"
              value="samsung"
              className="filter-checkbox"
            />
            Tellicherry
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="brand"
              value="nike"
              className="filter-checkbox"
            />
            Sirohi
          </label>
          <br />

          <button
            style={{ backgroundColor: "#007bff" }}
            onClick={filterProducts}
          >
            Apply Filters
          </button>
          <button style={{ backgroundColor: "#ff5722" }} onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
        <div className="right">
          {" "}
          <div
            className="product-card"
            data-category="clothing"
            data-brand="Murrah"
          >
            <img src={murrah} alt="Product 1" />
            <h3>Cows</h3>
            <p>Breeds is Murrah</p>
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Add to Cart
            </button>
          </div>
          <div
            className="product-card"
            data-category="electronics"
            data-brand="apple"
          >
            <img src={murrah} alt="Product 1" />
            <h3>Product 1</h3>
            <p>Description of Product 1</p>
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Add to Cart
            </button>
          </div>
          <div
            className="product-card"
            data-category="electronics"
            data-brand="apple"
          >
            <img src={murrah} alt="Product 1" />
            <h3>Product 1</h3>
            <p>Description of Product 1</p>
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Add to Cart
            </button>
          </div>
          <div
            className="product-card"
            data-category="electronics"
            data-brand="apple"
          >
            <img src={murrah} alt="Product 1" />
            <h3>Buffalo</h3>
            <p>Price:120</p>
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Add to Cart
            </button>
          </div>
          <div
            className="product-card"
            data-category="electronics"
            data-brand="apple"
          >
            <img src={murrah} alt="Product 1" />
            <h3>Product 1</h3>
            <p>Description of Product 1</p>
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Add to Cart
            </button>
          </div>
          <div
            className="product-card"
            data-category="electronics"
            data-brand="apple"
          >
            <img src={murrah} alt="Product 1" />
            <h3>Product 1</h3>
            <p>Description of Product 1</p>
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Add to Cart
            </button>
          </div>
          <div
            className="product-card"
            data-category="electronics"
            data-brand="apple"
          >
            <img src={murrah} alt="Product 1" />
            <h3>Product 1</h3>
            <p>Description of Product 1</p>
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Add to Cart
            </button>
          </div>
          <div
            className="product-card"
            data-category="electronics"
            data-brand="apple"
          >
            <img src={murrah} alt="Product 1" />
            <h3>Product 1</h3>
            <p>Description of Product 1</p>
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Add to Cart
            </button>
          </div>
          <div
            className="product-card"
            data-category="electronics"
            data-brand="apple"
          >
            <img src={murrah} alt="Product 1" />
            <h3>Product 1</h3>
            <p>Description of Product 1</p>
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Add to Cart
            </button>
          </div>
          <div
            className="product-card"
            data-category="electronics"
            data-brand="apple"
          >
            <img src={murrah} alt="Product 1" />
            <h3>Product 1</h3>
            <p>Description of Product 1</p>
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Add to Cart
            </button>
          </div>
          <div
            className="product-card"
            data-category="electronics"
            data-brand="apple"
          >
            <img src={murrah} alt="Product 1" />
            <h3>Product 1</h3>
            <p>Description of Product 1</p>
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Add to Cart
            </button>
          </div>
          <div
            className="product-card"
            data-category="electronics"
            data-brand="apple"
          >
            <img src={murrah} alt="Product 1" />
            <h3>Product 1</h3>
            <p>Description of Product 1</p>
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Add to Cart
            </button>
          </div>
          <div
            className="product-card"
            data-category="electronics"
            data-brand="apple"
          >
            <img src={murrah} alt="Product 1" />
            <h3>Product 1</h3>
            <p>Description of Product 1</p>
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <span>Page 2 of 286</span>
        <button>PREVIOUS</button>
        {Array.from({ length: 10 }, (_, i) => (
          <button key={i + 1}>{i + 1}</button>
        ))}
        <button>NEXT</button>
      </div>
    </div>
  );
}

export default Animalss;
