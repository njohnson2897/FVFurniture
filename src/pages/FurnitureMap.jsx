import MapComponent from "../components/Map";

function FurnitureMapPage() {
    return (
        <div className="bg-background p-2">
        <div className="flex justify-between items-center mb-4">
        <h1>Fox Valley Furniture Options</h1>
          <div className="App my-3">
            <select className="border border-zinc-300 rounded-lg p-2 mx-2 my-2">
              <option>Days Open</option>
              <option>Weekdays</option>
              <option>Weekends</option>
            </select>
            <select className="border border-zinc-300 rounded-lg p-2 mx-2 my-2">
              <option>Radius</option>
              <option>2 miles</option>
              <option>3 miles</option>
              <option>5 miles</option>
              <option>10 miles</option>
            </select>
            <select className="border border-zinc-300 rounded-lg p-2 mx-2 my-2">
              <option>Open Today</option>
              <option>Closed</option>
            </select>
            <button className="bg-dark text-secondary-foreground p-2 rounded-lg mx-2 my-2">+ More Filters</button>
            <button className="bg-red-500 text-white p-2 rounded-lg my-2">Clear Filters</button>
            <div className="flex space-x-2">
            <div className="flex items-center mb-1">
          
        </div>
          </div>
          <div className='d-flex justify-content-center mb-3'>
            <MapComponent />
          </div>
          </div>
        </div>
      </div>
    );
}

export default FurnitureMapPage;