import MapComponent from "../components/Map";

function FurnitureMapPage() {
    return (
        <div className="bg-background p-2">
        <div className="flex justify-between items-center mb-4">
        <h1>Fox Valley Furniture Options</h1>          
        </div>
          <div className='d-flex justify-content-center mb-3'>
            <MapComponent />
          </div>
          </div>
    );
}

export default FurnitureMapPage;