import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div id='navbarContainer' className=' flex w-11/12 justify-center items-center'>
        <div id='navbar' className='relative w-full flex justify-between items-center px-8 py-2'>
            <a href="#" className="logo"><img className='h-6' src="/Atlassian/default (12).svg" alt="ATLASSIAN" /></a>
            <div className='flex gap-4 items-center'>
                <div className="dropdownMenus flex gap-4 text-gray-600 font-medium">
                    <div className='group '>
                        <a href="#" className='flex items-center gap-1'>
                            <span className='group-hover:text-blue-600 duration-200'>Product</span>
                            <img className='group-hover:rotate-180 duration-200 translate-0.5 h-fit' src="/Atlassian/default (51).svg" alt="" />            
                        </a>
                        <div id='productDropDownMenu' className="flex flex-col absolute w-8/12 top-9/12 left-[50%] translate-x-[-50%] invisible opacity-0 duration-300  bg-gray-50 group-hover:visible group-hover:opacity-100 group-hover:top-full">
                            <div className='hover:text-blue-700'>Product DropDown Menu </div>
                            <div>Product DropDown Menu1 </div>
                            <div>Product DropDown Menu2 </div>
                            <div>Product DropDown Menu3 </div>
                            <div>Product DropDown Menu4 </div>
                            <div>Product DropDown Menu5 </div>
                            <div>Product DropDown Menu6 </div>
                            <div>Product DropDown Menu7 </div>
                            <div>Product DropDown Menu8 </div>
                            <div>Product DropDown Menu9 </div>
                        </div>
                    </div>

                    <div className='group '>
                        <a href="#" className='flex items-center gap-1'>
                            <span className='group-hover:text-blue-600 duration-200'>Solutions</span>
                            <img className='group-hover:rotate-180 duration-200 translate-0.5 h-fit' src="/Atlassian/default (51).svg" alt="" />            
                        </a>
                        <div id='productDropDownMenu' className="flex flex-col absolute w-8/12 top-9/12 left-[50%] translate-x-[-50%] invisible opacity-0 duration-300  bg-gray-50 group-hover:visible group-hover:opacity-100 group-hover:top-full">
                            <div>Solutions Drop Down Menu </div>
                            <div>Solutions Drop Down Menu1 </div>
                            <div>Solutions Drop Down Menu2 </div>
                            <div>Solutions Drop Down Menu3 </div>
                            <div>Solutions Drop Down Menu4 </div>
                            <div>Solutions Drop Down Menu5 </div>
                            <div>Solutions Drop Down Menu6 </div>
                            <div>Solutions Drop Down Menu7 </div>
                            <div>Solutions Drop Down Menu8 </div>
                            <div>Solutions Drop Down Menu9 </div>
                        </div>
                    </div>
                    
                    <div className='group '>
                        <a href="#" className='flex items-center gap-1'>
                            <span className='group-hover:text-blue-600 duration-200'>Why Atlassian</span>
                            <img className='group-hover:rotate-180 duration-200 translate-0.5 h-fit' src="/Atlassian/default (51).svg" alt="" />            
                        </a>
                        <div id='productDropDownMenu' className="flex flex-col absolute w-8/12 top-9/12 left-[50%] translate-x-[-50%] invisible opacity-0 duration-300  bg-gray-50 group-hover:visible group-hover:opacity-100 group-hover:top-full">
                            <div>Why Atlassian DropDown Menu </div>
                            <div>Why Atlassian DropDown Menu1 </div>
                            <div>Why Atlassian DropDown Menu2 </div>
                            <div>Why Atlassian DropDown Menu3 </div>
                            <div>Why Atlassian DropDown Menu4 </div>
                            <div>Why Atlassian DropDown Menu5 </div>
                            <div>Why Atlassian DropDown Menu6 </div>
                            <div>Why Atlassian DropDown Menu7 </div>
                            <div>Why Atlassian DropDown Menu8 </div>
                            <div>Why Atlassian DropDown Menu9 </div>
                        </div>
                    </div>

                    <div className='group'>
                        <a href="#" className='flex items-center gap-1'>
                            <span className='group-hover:text-blue-600 duration-300'>Resources</span>
                            <img className='group-hover:rotate-180 duration-300 translate-0.5 h-fit' src="/Atlassian/default (51).svg" alt="" />            
                        </a>
                        <div id='productDropDownMenu' className="flex flex-col absolute w-8/12 top-9/12 left-[50%] translate-x-[-50%] invisible opacity-0 duration-300  bg-gray-50 group-hover:visible group-hover:opacity-100 group-hover:top-full">
                            <div>Resources DropDown Menu </div>
                            <div>Resources DropDown Menu1 </div>
                            <div>Resources DropDown Menu2 </div>
                            <div>Resources DropDown Menu3 </div>
                            <div>Resources DropDown Menu4 </div>
                            <div>Resources DropDown Menu5 </div>
                            <div>Resources DropDown Menu6 </div>
                            <div>Resources DropDown Menu7 </div>
                            <div>Resources DropDown Menu8 </div>
                            <div>Resources DropDown Menu9 </div>
                        </div>
                    </div>

                    

                </div>
                <div className="menu text-gray-600 font-medium">
                    <a className='hover:text-blue-600 duration-200' href="#">Enterprice</a>
                </div>
            </div>
            <div className='flex gap-5 justify-center items-center' >
                <img className='h-10 cursor-pointer' id='serchbtn' src="/Atlassian/default (2).svg" alt="" />
                <div className="h-6 w-px bg-gray-300"></div>
                <div className="signINbtn px-4 py-2 rounded-sm bg-blue-600 font-medium text-white cursor-pointer hover:bg-blue-700">Sign in</div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar