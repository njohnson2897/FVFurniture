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
        { lat: 41.8781, lng: -87.6298, title: "Chicago" },
        { lat: 41.8818, lng: -87.6232, title: "Millennium Park" }
        // Add more locations here
    ];

    return (
        <LoadScript
            googleMapsApiKey={import.meta.env.VITE_API_KEY}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10}
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