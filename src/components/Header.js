import React from 'react'
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <div className="bg-blue-500 py-4">
    <div className="container mx-auto">
      <ul className="flex justify-center space-x-6 text-white">
       <Link to="/"> <li className="text-lg font-bold">Contact</li></Link>
      <Link to="/MapsCharts">  <li className="text-lg font-bold">Charts and Maps</li></Link>
      </ul>
    </div>
  </div>
  
  )
}

export default Header