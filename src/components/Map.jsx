import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';
import { useState } from 'react';

const MapComponent = () => {
    const [map, setMap] = useState(null);
    const [searchBox, setSearchBox] = useState(null);
    const [markers, setMarkers] = useState([]);
    const [places, setPlaces] = useState([]); // State for storing fetched places
    const [center, setCenter] = useState({ lat: 41.8781, lng: -87.6298 });
    const [zoom, setZoom] = useState(9);

    const onLoad = (map) => setMap(map);

    const onPlacesChanged = () => {
        const places = searchBox.getPlaces();

        if (places.length === 0) return;

        const newMarkers = places.map((place) => ({
            position: place.geometry.location,
        }));

        setMarkers(newMarkers);

        const newCenter = {
            lat: places[0].geometry.location.lat(),
            lng: places[0].geometry.location.lng(),
        };

        setCenter(newCenter);
        setZoom(14);

        // Fetch nearby places
        fetchNearbyPlaces(places[0].geometry.location);
    }

    // Function to fetch nearby places using PlacesService
    const fetchNearbyPlaces = (location) => {
        const service = new window.google.maps.places.PlacesService(map);
        const request = {
            location: location,
            radius: 2000, // Adjust radius as needed
            type: ['store'] // Adjust types as needed
        };

        service.nearbySearch(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                const newMarkers = results.map((place) => ({
                    position: place.geometry.location,
                    title: place.name
                }));

                setMarkers(newMarkers);
                setPlaces(results); // Save places to state
            }
        });
    };

    const mapStyles = {        
        height: "600px",
        width: "100%" // Adjust width to be full width
    };

    const searchBoxStyles = {
        boxSizing: 'border-box',
        border: '1px solid transparent',
        backgroundColor: '#f0f0f0',
        width: '240px',
        height: '32px',
        marginTop: '10px',
        padding: '0 12px',
        borderRadius: '3px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
        fontSize: '12px',
        outline: 'none',
        textOverflow: 'ellipses',
        position: 'absolute',
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: '10',
        WebkitTextFillColor: 'black',
        WebkitTextStrokeWidth: '0',
    };
    
    // Styles for the places list
    const placesListStyles = {
        width: '100%', // Full width to match the map
        maxHeight: '400px', // Set a maximum height for the list container
        overflowY: 'auto', // Enable scrolling if the content overflows
        padding: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
        marginTop: '10px' // Add some spacing between the map and the list
    };

    return (
        <LoadScript
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}
            libraries={['places']}
        >
            <div className='w-75'>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={zoom}
                    center={center}
                    onLoad={onLoad}
                >
                    <StandaloneSearchBox
                        onLoad={(ref) => setSearchBox(ref)}
                        onPlacesChanged={onPlacesChanged}
                    >
                        <input type="text" placeholder="Enter your address, city, or ZIP code" style={searchBoxStyles} />
                    </StandaloneSearchBox>
                    {
                        markers.map((marker, index) => (
                            <Marker 
                                key={index} 
                                position={marker.position}
                                title={marker.title}
                            />
                        ))
                    }
                </GoogleMap>
                <div style={placesListStyles}>
                    <h3>Nearby Places</h3>
                    <ul>
                        {places.map((place, index) => (
                            <li key={index}>{place.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </LoadScript>
    )
}

export default MapComponent;