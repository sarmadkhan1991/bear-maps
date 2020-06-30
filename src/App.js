import React from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { formatRelative } from 'date-fns';
import { getGeocode, getLatLng } from 'use-places-autocomplete';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
import '@reach/combobox/styles.css';
import mapStyles from './mapStyles';

const libraries = ["places"];
const mapContainerStyle = {
    width: "100vw",
    height: "100vh"
  };
const center = {
    lat: 33.448376,
    lng: -112.074036
  };
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
  };

function App() {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);

  if (loadError) return "Error Loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <h1>Bears{" "} 
        <span role="img" aria-label="tent">
          ⛺
        </span>
      </h1>
      <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={9} 
        center={center}
        options={options}
        onClick={(event) => {
          setMarkers(current => [...current, {

          }])
        }}></GoogleMap>
    </div>
  );
}

export default App;
