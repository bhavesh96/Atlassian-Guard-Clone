function MeetGuardSection(){
    return (
        <div id="meetGuardContainer" className="2xl:justify-evenly bg-black text-white w-full flex max-sm:flex-col justify-center my-14 py-8 max-sm:flex max-sm:justify-center">
            <img className="hidden lg:flex" src="/Guard/CSD-12874_Left_stars_-_premium_banner.svg" alt="" />
            <img className="flex md:hidden" src="/Guard/Mobile top premium gestural stars.svg" alt="" />
            
            <div className="flex max-sm:flex-col justify-center items-center gap-10 lg:gap-32 mx-0 max-lg:max-w-lg">

                <img className="lg:h-60 h-60 md:h-44 max-sm:order-2" src="/Guard/lock-hand.png" alt="" />
                
                <div className="flex flex-col gap-8 max-w-xl max-sm:justify-center text-center md:text-left">
                    <h2 className="font-bold text-4xl max-sm:text-2xl max-sm:font-extrabold">Meet Guard Premium</h2>
                    <p>Defend your priority projects with our most advanced security capabilities and stop threats before they become incidents.</p>
                    <a className="flex max-sm:justify-center gap-1 items-center text-blue-300 group " href="#">
                        <span className=" group-hover:underline">Learn more about Guard Premium</span>
                        <img className=" group-hover:translate-x-1 duration-300 " src="/Guard/default (9).svg" alt="" />
                    </a>        
                </div>

            </div>
            
            <img className="flex md:hidden" src="/Guard/Mobile bottom premium gestural stars.svg" alt="" />
            <img className="hidden lg:flex" src="/Guard/CSD-12874_Right_stars_-_premium_banner.svg" alt="" />
        </div>
    )
}

export default MeetGuardSection