import { Link } from "react-router-dom";
import foxImage from '../assets/fox.PNG';

function Navbar() {
  return (
    <div className='navigationbar pb-1'>
      <header className="d-flex justify-between items-center mb-2">
        <img src={foxImage} alt="Image of a fox" height='60'></img>
        <Link className='text-black' to='/'>
        <h1 className="font-bold text-foreground">
          Fox Valley Furniture
        </h1>
        </Link>
        <nav className="nav nav-tabs flex space-x-4 mx-5">
        <li className='nav-item mx-2'>
          <Link className="text-dark nav-link" to='/'>
            Home
          </Link>
          </li>
          <li className='nav-item mx-2'>
          <Link className="text-dark nav-link" to='/furnituremap'>
            Find Furniture
          </Link>
          </li>
          <li className='nav-item mx-2'>
          <Link className="text-dark nav-link" to='/takeaction'>
            Take Action
          </Link>
          </li>
          <li className='nav-item mx-2'>
          <Link className="text-dark nav-link" to='/aboutus'>
            About Us
          </Link>
          </li>
          <li className='nav-item mx-2'>
          <Link className="text-dark nav-link" to='/donate'>
            Donate
          </Link>
          </li>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
