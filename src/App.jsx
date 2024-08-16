import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Outlet } from 'react-router-dom'


function App() {
  return (
    <>
        <div className='border rounded border-dark pt-2 mb-2'>
        <Navbar />
        </div>
        <div className='border rounded border-dark pt-2'>
          <Outlet />
        </div>
        <div className='border rounded border-dark pt-2 mt-2'>
        <Footer />
        </div>
    </>
  );
}

export default App
