import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import pic from '../images/realt2.png'

export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()

    function pathMatchRoute(route){
        if(route === location.pathname){
            return true;
        }
    }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
            <img src={pic} alt="The Logo" className="h-10 w-20 cursor-pointer" onClick={()=>navigate("/")}></img>
        </div>
        <div>
            <ul className="flex space-x-10">
                <li className={`cursor-pointer py- 3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-black border-b-green-500"}`} onClick={()=>navigate("/")}>Home</li>
                <li className={`cursor-pointer py- 3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/offers") && "text-black border-b-green-500"}`} onClick={()=>navigate("/offers")}>Offers</li>
                <li className={`cursor-pointer py- 3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/signIn") && "text-black border-b-green-500"}`}onClick={()=>navigate("/signIn")}>Sign in</li>
            </ul>
        </div>
      </header>
    </div>
  )
}
