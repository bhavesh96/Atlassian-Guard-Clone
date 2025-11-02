import Menu from "./navbarCom/menu"
import PrmBtn from "./navbarCom/prmBtn"

function Navbar(){
    return(
        <div id="navbarContainer" className="flex w-10/12 max-w-[1440px] h-16 items-center justify-between">
            <div id="leftSideNav" className="flex gap-2 items-center h-full">
                <a href="#" className="logo"><img className='h-6' src="./Guard/xlpicwy8pntkj0agw1edgcca4l2db41v.svg" alt="Guard" /></a>
                <ul id="menu" className="hidden lg:flex text-gray-700 font-medium h-full items-center ">
                    <Menu menuName="Capabilities" />
                    <Menu menuName="Pricing" />
                    <Menu menuName="Guide" />
                    <Menu menuName="Demo" />
                </ul>
            </div>
            <div id="rightSideNav" className="hidden lg:flex gap-4 items-center">
                <PrmBtn btnText="Try it free" />
                <img className='h-10 cursor-pointer' id='serchbtn' src="./Guard/default (2).svg" alt="" />
                <div className="h-6 w-px bg-gray-300"></div>
                <div id="signINbtn" className=" px-2 py-2 rounded-sm  font-medium cursor-pointer hover:text-blue-700">Sign in</div>
                
            </div>
        </div>
    )
}

export default Navbar   