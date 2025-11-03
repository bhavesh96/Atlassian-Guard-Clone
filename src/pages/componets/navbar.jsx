import { useState } from "react"
import Menu from "./navbarCom/menu"
import PrmBtn from "./navbarCom/prmBtn"
import { AnimatePresence, motion } from "motion/react"

function Navbar(){
    const [navclick, setNavclick] = useState(false)
    
    const toggleNav = ()=>setNavclick(!navclick);

    const HideNav = ()=>(
            <motion.div initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        onClick={toggleNav} 
                        >
                <div className="flex lg:hidden flex-col gap-2 w-6">
                <div className="border-b-2"></div>
                <div className="border-b-2"></div>
                <div className="border-b-2"></div>
                </div>
            </motion.div>
        )

    const ShowNav =()=>(
        <>
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={toggleNav}
            className="cursor-pointer"
            >
            <img className="h-6" src="/Guard/ot_close.svg" alt="close" />
        </motion.div>
        {/* menu cantainer */}
        <div className=" fixed flex flex-col items-center  z-50 w-full h-screen bg-white end-0 top-16  outline-dotted outline-2 outline-gray-400 p-4">
            <PrmBtn width="full" btnText="Try it free" />
            <div id="smallDeviceMenu" className="my-4 w-full">
                <ul className="flex flex-col gap-6 w-full">
                    {["Capabilities","Pricing","Guide","Demo"].map((text,indx)=><li key={indx+text} className="w-full font-semibold ">{text}</li>)}
                </ul>
            </div>
            <a className="flex max-sm:justify-center gap-1 items-center text-blue-300 group " href="#">
                <img className="h-3.5" src="\Guard\Atlassian-horizontal-blue-rgb-540x67-4ecbd8e.png" alt="Atlassian" />
                <img className=" group-hover:translate-x-1 duration-300 " src="/Guard/default (9).svg" alt="" />
            </a>
            <div className="flex justify-between w-full my-2">
                <img className='h-10 cursor-pointer' id='serchbtn' src="./Guard/default (2).svg" alt="" />
                <a className="flex gap-1 items-center group " href="#">
                    <span className="text-blue-700 font-bold -translate-y-0.5">Sign in</span>
                    <img className=" group-hover:translate-x-1 duration-300 " src="/Guard/default (9).svg" alt="" />
                </a>
            </div>       
        </div>
        </>
    );

    return(
        <nav id="navbarContainer" className=" fixed z-50 flex  top-0 bg-white w-full h-16 items-center justify-center">
            <div id="leftSideNav" className=" flex w-10/12 max-w-[1140px] gap-2 just items-center justify-between h-full">
                <a href="#" className="logo"><img className='h-6' src="./Guard/xlpicwy8pntkj0agw1edgcca4l2db41v.svg" alt="Guard" /></a>
                
                {/* nav menu for small device */}
                <div className="lg:hidden">
                <AnimatePresence mode="wait" initial={false}>
                {navclick ? <ShowNav key="show" /> : <HideNav key="hide" />}
                </AnimatePresence>
                </div>
                
                {/* nav menu for large device */}
                <div className=" hidden lg:flex w-full h-full justify-between">
                    <div id="leftsidenav" className="">
                        <ul id="menu" className="hidden lg:flex text-gray-700 font-medium h-full items-center ">
                            <Menu key={1} menuName="Capabilities" />
                            <Menu key={2} menuName="Pricing" />
                            <Menu key={3} menuName="Guide" />
                            <Menu key={4} menuName="Demo" />
                        </ul>
                    </div>
                    <div id="rightSideNav" className="hidden lg:flex gap-4 items-center">
                        <PrmBtn btnText="Try it free" />
                        <img className='h-10 cursor-pointer' id='serchbtn' src="./Guard/default (2).svg" alt="" />
                        <div className="h-6 w-px bg-gray-300"></div>
                        <div id="signINbtn" className=" px-2 py-2 rounded-sm  font-medium cursor-pointer hover:text-blue-700">Sign in</div>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar   