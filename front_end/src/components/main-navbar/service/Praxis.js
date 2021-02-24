import React, { Component } from "react";
import './praxis.css'
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
/* import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete"; */

export class Praxis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace:{},
      
      

      mapCenter: {
        lat: 53.551086,
        lng: 9.993682
      },
    };
  }

  handelChange = (address) => {
    this.setState({ address });
  };
  // handleSelect = (address) => {
  //   geocodeByAddress(address)
  //     .then((results) => getLatLng(results[0]))
  //     .then((latLng) => {
  //       console.log("Success", latLng);
  //       this.setState({ address });
  //       this.setState({ mapCenter: latLng });
  //     })
  //     .catch((error) => console.log("Error", error));
  // };

  render() {
    return (
      <div id="googleMap">
        <h1>Google Maps</h1>
        {
          // <PlacesAutocomplete
          //   value={this.state.address}
          //   onChange={this.handelChange}
          //   onSelect={this.handleSelect}
          // >
          //   {({
          //     getInputProps,
          //     suggestions,
          //     getSuggestionItemProps,
          //     loading,
          //   }) => (
          //     <div>
          //       <input
          //         {...getInputProps({
          //           placeholder: "Search Places ...",
          //           className: "location-search-input",
          //         })}
          //       />
          //       <div className="autocomplete-dropdown-container">
          //         {loading && <div>Loading...</div>}
          //         {suggestions.map((suggestion) => {
          //           const className = suggestion.active
          //             ? "suggestion-item--active"
          //             : "suggestion-item";
          //           const style = suggestion.active
          //             ? { backgroundColor: "#fafafa", cursor: "pointer" }
          //             : { backgroundColor: "#ffffff", cursor: "pointer" };
          //           return (
          //             <div
          //               {...getSuggestionItemProps(suggestion, {
          //                 className,
          //                 style,
          //               })}
          //             >
          //               <span>{suggestion.description}</span>
          //             </div>
          //           );
          //         })}
          //       </div>
          //     </div>
          //   )}
          // </PlacesAutocomplete>
        }
        <Map
           google={this.props.google}
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
          center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
        >
          <Marker
            position={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng,
            }}
          />
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "  AIzaSyDHez1HXyHrrB6Yaw6KqgYlqrLzgCkG6_s",
})(Praxis);