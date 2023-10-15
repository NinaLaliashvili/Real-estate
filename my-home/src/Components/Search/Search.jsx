import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

import "./Search.css";

const Search = () => {
  const [areaValue, setAreaValue] = React.useState([20, 150]);
  const [priceValue, setPriceValue] = React.useState([1000, 5000]);

  return (
    <div className="search-section">
      <h2 className="search-title">Discover Your Next Property</h2>
      <div className="location-search-container">
        <input
          className="location-search-input"
          type="text"
          placeholder="Enter location"
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "5px",
            borderRadius: "25px",
          }}
        />
      </div>

      <div className="search-container">
        <div className="search-group">
          <select className="search-select">
            <option value="" disabled selected>
              Type
            </option>
            <option>Rent</option>
            <option>Rent Daily</option>
            <option>Buy</option>
          </select>
          <select className="search-select">
            <option value="" disabled selected>
              Type of real estate
            </option>
            <option>House</option>
            <option>Apartment</option>
            <option>Room</option>
            <option>Hotel</option>
            <option>Commercial Space</option>
          </select>
          <select className="search-select">
            <option value="" disabled selected>
              Location
            </option>
            <option>Jerusalem</option>
            <option>Tel Aviv</option>
            <option>Haifa</option>
            <option>Bat yam</option>
            <option>Herzliya</option>
            <option>Rishon LeZion</option>
            <option>Be'er Sheva</option>
            <option>Petah Tikva</option>
            <option>Netanya</option>
            <option>Ashdod</option>
          </select>
          <select className="search-select">
            <option value="" disabled selected>
              Rooms
            </option>
            <option>Studio</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5+</option>
          </select>
          <input
            className="search-input"
            type="text"
            placeholder="Keyword, ID, etc."
          />
          <button className="search-btn">Search</button>
        </div>
      </div>
      <div className="range-wrapper">
        <div className="range-individual-container">
          <label>
            Square Footage: {areaValue[0]} - {areaValue[1]}
          </label>
          <Range
            step={10}
            min={0}
            max={300}
            values={areaValue}
            onChange={(values) => setAreaValue(values)}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: "36px",
                  display: "flex",
                  width: "100%",
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: "5px",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                      values: areaValue,
                      colors: ["#ccc", "#548BF4", "#ccc"],
                      min: 0,
                      max: 300,
                    }),
                    alignSelf: "center",
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "20px",
                  width: "20px",
                  borderRadius: "4px",
                  backgroundColor: "#FFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 2px 6px #AAA",
                }}
              ></div>
            )}
          />
        </div>
        <div className="range-individual-container">
          <label>
            Price: ${priceValue[0]} - ${priceValue[1]}
          </label>
          <Range
            step={50}
            min={500}
            max={10000}
            values={priceValue}
            onChange={(values) => setPriceValue(values)}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: "36px",
                  display: "flex",
                  width: "100%",
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: "5px",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                      values: priceValue,
                      colors: ["#ccc", "#548BF4", "#ccc"],
                      min: 500,
                      max: 10000,
                    }),
                    alignSelf: "center",
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "20px",
                  width: "20px",
                  borderRadius: "4px",
                  backgroundColor: "#FFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 2px 6px #AAA",
                }}
              ></div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
