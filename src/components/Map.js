import React from "react"
import styled from 'styled-components'
import { below } from "../style/functions";


import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"

export class GoogleMap extends React.Component {
  constructor() {
    super()
  }
  fitBounds(mapProps, map) {
    const south = Math.max(
      ...this.props.markers.map(m => parseFloat(m.node.lat))
    )

    const east = Math.max(
      ...this.props.markers.map(m => parseFloat(m.node.lng))
    )

    const north = Math.min(
      ...this.props.markers.map(m => parseFloat(m.node.lat))
    )

    const west = Math.min(
      ...this.props.markers.map(m => parseFloat(m.node.lng))
    )
    var googleMap = window["google"]

    let googleBounds = new googleMap.maps.LatLngBounds(
      { lat: south, lng: west },
      { lat: north, lng: east }
    )

    map.fitBounds(googleBounds)

    let listener = googleMap.maps.event.addListener(map, "idle", function() { 
		  if (map.getZoom() > 14) map.setZoom(14); 
		  googleMap.maps.event.removeListener(listener); 
		});
  }

  render() {
    if (!this.props.loaded) {
      return <div>Loading</div>
    } else {
      return (
				<MapWrap>
					<Map
						google={this.props.google}
						zoom={7}
						style={{ width: "100%", height: "100%", position: "relative" }}
						scrollwheel= {false}
						onReady={this.fitBounds.bind(this)}
						styles={[
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#6195a0"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": "0"
            },
            {
                "saturation": "0"
            },
            {
                "color": "#f5f5f2"
            },
            {
                "gamma": "1"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "-3"
            },
            {
                "gamma": "1.00"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#bae5ce"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fac9a9"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#4e4e4e"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#787878"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "labels.icon",
        "stylers": [
            {
                "hue": "#0a00ff"
            },
            {
                "saturation": "-77"
            },
            {
                "gamma": "0.57"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#43321e"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels.icon",
        "stylers": [
            {
                "hue": "#ff6c00"
            },
            {
                "lightness": "4"
            },
            {
                "gamma": "0.75"
            },
            {
                "saturation": "-68"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#eaf6f8"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c7eced"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "lightness": "-49"
            },
            {
                "saturation": "-53"
            },
            {
                "gamma": "0.79"
            }
        ]
    }
]}
					>
						{this.props.markers.map((marker, index) => (
							<Marker
								key={index}
								position={{
									lat: parseFloat(marker.node.lat),
									lng: parseFloat(marker.node.lng)
								}}
								name={marker.node.name}
								icon={{
									url: "/images/melrose-park-sydney-property-000-MARKER.png",
									size: new google.maps.Size(75, 95),
									anchor: new google.maps.Point(13, 36),
									scaledSize: new google.maps.Size(75, 95)
								}}
							/>
						))}
					</Map>
				</MapWrap>
      )
    }
  }
}

const MapWrap = styled.div`
	height:70vh;
	min-height: 600px;
	position:relative;

	${below.tablet`
	`};

`
let MapExport;
if (typeof window !== `undefined`) {	
	MapExport = GoogleApiWrapper({
		apiKey: "AIzaSyC9Dn49n6cgyTLPI0wZ5u0QanW3OLItgLs"
	})(GoogleMap)
} else {
	MapExport = ''
}

export default MapExport
