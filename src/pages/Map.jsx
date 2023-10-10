import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import { CgGym } from "react-icons/cg";
import { HiLocationMarker } from "react-icons/hi";
const Maps = () => {
  return (
    <div className="bg-gradient-to-t z-0 from-[#fcefdf] h-full pb-10">
      <Map
        style={{
          margin: "auto",
          height: "400px",
          paddingBottom: "10px",
          cursor: "pointer",
          width: "80%",
          zIndex: "0",

          borderRadius: "5px",
        }}
        initialViewState={{
          latitude: 47.1890817,
          longitude: -122.5426303,
          zoom: 12,
        }}
        mapboxAccessToken={
          "pk.eyJ1IjoiYW5uZXRvdG9oIiwiYSI6ImNsYjB2cDl1dzFrOTQzcHFtOWdxcHBjbGgifQ.LADz9TYffPhRsjZ_O_hUHw"
        } // This is the token we got from Mapbox
        mapStyle="mapbox://styles/mapbox/streets-v11" // This is the style of the map
      >
        <Marker
          latitude={47.1890817}
          longitude={-122.5426303}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <p className="bg-[#293241] font-bold px-2 py-1 text-white rounded-xl">
            Amazing Angels LLC
          </p>
          <HiLocationMarker className="text-5xl text-[#293241]" />
        </Marker>
      </Map>
    </div>
  );
};

export default Maps;
