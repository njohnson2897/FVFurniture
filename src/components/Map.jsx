import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';
import { useState } from 'react';

const MapComponent = () => {
    const [map, setMap] = useState(null);
    const [searchBox, setSearchBox] = useState(null);
    const [markers, setMarkers] = useState([]);

    const onLoad = (map) => setMap(map);
    const onPlacesChanged = () => {
        const places = searchBox.getPlaces();
        const newMarkers = places.map((place) => ({
            position: place.geometry.location,
        }));

        setMarkers(newMarkers);
    }

    const mapStyles = {        
        height: "500px",
        width: "50%"
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
        zIndex: '10', // Ensures the search box appears on top of the map
        WebkitTextFillColor: 'black', // Ensures text is black on Webkit browsers
        WebkitTextStrokeWidth: '0',   // Removes any stroke that could be causing the text to appear white
        
    };
    
    const defaultCenter = {
        lat: 41.8781, lng: -87.6298
    }



    return (
        <LoadScript
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}
            libraries={['places']}
        >
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={9}
                center={defaultCenter}
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
        </LoadScript>
    )
}

export default MapComponent;