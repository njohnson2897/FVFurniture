import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
    const mapStyles = {        
        height: "500px",
        width: "40%"
    };
    
    const defaultCenter = {
        lat: 41.8781, lng: -87.6298
    }

    const locations = [
        { lat: 41.8062, lng: -87.6998, title: "Chicago Furniture Bank"},
        { lat: 41.7621, lng: -88.3649, title: "Community Foundation of the Fox River Valley"},
        { lat: 42.0359, lng: -88.2836, title: "Habitat for Humanity of Northern Fox Valley"},
        // Add more locations here
    ];

    return (
        <LoadScript
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={9}
                center={defaultCenter}
            >
                {
                    locations.map((location, index) => (
                        <Marker 
                            key={index} 
                            position={{ lat: location.lat, lng: location.lng }}
                            title={location.title}
                        />
                    ))
                }
            </GoogleMap>
        </LoadScript>
    )
}

export default MapComponent;