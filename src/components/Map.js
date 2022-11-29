import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const AnyReactComponent = ({ text }) => (
  <div>
    <Icon icon={locationIcon} className="pin-icon" />
    <div>
      <p>{text}</p>
    </div>
  </div>
);

function Map() {
  const defaultProps = {
    center: { lat: 18.910453082066432, lng: -99.2245325399992 },
    zoom: 17,
  };
  return (
    <>
      <h2 className="map-h2">¡¡¡ VISITANOS !!!</h2>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBaLiOKFIMGbViQn30yn1S77unxUUIOKdo" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={18.910453082066432}
            lng={-99.2245325399992}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </>
  );
}

export default Map;
