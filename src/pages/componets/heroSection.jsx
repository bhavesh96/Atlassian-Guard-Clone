import PrmBtn from './navbarCom/prmBtn'

function HeroSection(){
    return(
        
        <section id='heroContainer' className="flex flex-col items-center w-full">
            
            <div id="background" className="relative flex flex-col items-center  w-full bg-[url('/Guard/Header%20Ambient%20Background.svg')] object-cover top-0 left-0">
                {/* Headline */}
                <div className='flex flex-col items-center text-white lg:w-10/12 max-w-4xl'>
                    <h1 className="mt-8 mb-8 lg:mt-20 lg:mb-16 text-4xl md:text-5xl lg:text-7xl font-extrabold text-center">Safeguard your next breakthrough</h1>
                    <p className="text-center text-[20px] font-medium mb-10">Atlassion Guard, a cloud security add-on for data protection and threat detection</p>
                    <PrmBtn btnText='Try it free' bgColor='orange' />
                </div>
                {/* Video Part */}
                <div className='relative w-full flex justify-center m-10 md:mb-28 max-w-5xl'>
                    <div id="videoContainer" className='absolute w-full flex justify-center'>
                        {/*Video Frame */}
                        <div className='relative rounded-sm w-9/12 flex justify-center items-center overflow-hidden'>
                            <img className=' contrast-75 hover:contrast-100 hover:scale-110 duration-1000' src="./Guard/overview-thumbnail.png" alt="overview-thumbnail" />                            
                            <img className='absolute' src="./Guard/video-play-circle-solid-white-small.svg" alt="Play video button" />
                        </div>
                        {/* Background img (mobile & desktop)*/}
                        <img className='absolute md:hidden -bottom-7 w-10/12 -z-10' src="./Guard/CSD-12874_Mobile_Guard_overview_video_lower_frame.svg" alt="video_lower_frame_desktop" />
                        <img className='absolute max-md:hidden -bottom-14  w-10/12 -z-10' src="./Guard/CSD-12874_Guard_overview_video_lower_frame_desktop.svg" alt="video_lower_frame_desktop" />
                    </div>
                </div>
            </div>

            {/* Watch Video Button */}
            <div id="watchBtn" className='flex items-center gap-2 text-blue-700 mt-44 md:mt-72 lg:mt-96 group hover:cursor-pointer'>
                <img className='h-6 group-hover:invisible' src="/Guard/video-play-circle-solid-blue-small.png" alt="Play" />
                <span className=' group-hover:text-blue-600'>Watch the video</span>
            </div>
            
        </section>
    )
}

export default HeroSection
