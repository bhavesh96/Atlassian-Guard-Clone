import React from 'react'
import PdrBtn from './pdrBtn'
import { useState } from 'react'

const sectionData = [
        {
            btntext:'Protect',
            h2Text:'Double down on data protection',
            pText:'Enforce security policies to proactively defend against data loss across Atlassian cloud.',
            bImg:'/Guard/CSD-12874_Guard_main_product_tour_protect_frame_desktop.svg',
            tImg:'/Guard/CSD-12874 Guard WAC PT Protect Product Screen_fn4pc5cqgtmc6xtzvzngh5.mp4'
        },
        {
            btntext:'Detect',
            h2Text:'Stay alert, not alarmed',
            pText:'Easily assess your risk landscape and inform your security team with contextual alerts.',
            bImg:'/Guard/CSD-12874_Guard_main_product_tour_detect_frame_desktop.svg',
            tImg:'/Guard/CSD-12874 Guard WAC PT Detect Product Screen_3gkw3znm5zc37r6c43vt9.mp4'
        },
        {
            btntext:'Respond',
            h2Text:'Neutralize threats quickly',
            pText:'Review activity, investigate suspicious events, and quickly remediate issues.',
            bImg:'/Guard/CSD-12874_Guard_main_product_tour_respond_frame_desktop.svg',
            tImg:'/Guard/CSD-12874 Guard WAC Respond Product Screens_t7cm3fbc6975tkk5hzfkm8z.mp4'
        }

    ]

const PdrSection = ()=>{
    const [selectedbtn, setSelectedbtn] = useState(0)

    const btntext = ['Protect','Detect','Respond']

    const handleBtnSelect= (btnNo)=>{
        console.log("btn clicked :",btnNo)
        setSelectedbtn(btnNo)
    }

  return (
    <>
    {/* Top section */}
    <div className='max-sm:mx-10 text-center '>
        <div className='text-xl md:text-3xl font-extrabold'>Don’t get caught off guard</div>
        <p>Enlist Atlassian Guard to protect your most valuable assets</p>
    </div>
    
    {/* Bottom section */}
    <div className='w-full items-center flex flex-col max-w-[1800px] my-6 p-4'>
        <div id="btnNavContainer" className=' hidden md:flex m-2 gap-5'>
        {btntext.map((t,indx)=>{
                    if(indx===selectedbtn){return <PdrBtn key={indx} indx={indx} handleBtnSelect={handleBtnSelect} selectedbtn={true}  text={t} />
                    }else{
                        return <PdrBtn key={indx} indx={indx} handleBtnSelect={handleBtnSelect} selectedbtn={false}  text={t} />
                    }
                }
                )
            }
        </div>

        {
            sectionData.map((Data,indx)=>{
                if(indx===selectedbtn){
                    return <div id="pdrbottomContainer" className='flex flex-col md:flex-row lg:p-16 w-fit my-2'>
                            <div id="leftSide" className='flex-1/3 flex flex-col justify-center gap-5'>
                                <h2 className="font-bold text-4xl max-sm:text-2xl max-sm:font-extrabold">{Data.h2Text}</h2>
                                <p>{Data.pText}</p>
                                <a className="flex gap-1 items-center text-blue-500 group " href="#">
                                    <span className=" group-hover:underline">See capabilities</span>
                                    <img className=" group-hover:translate-x-1 duration-300 " src="/Guard/default (9).svg" alt="" />
                                </a>
                            </div>

                            <div id="rightSide" className='flex-2/3 relative '>
                                <img className='w-full h-[105%] xl:h-[115%] absolute -z-10 top-[55%] left-1/2 -translate-1/2' src={Data.bImg} alt="" />
                                <div id="videoFrame" className='m-8'>
                                    <video className='w-full max-h-[480px]' autoPlay loop muted src={Data.tImg}></video>
                                </div>
                            </div>
                        </div>
                }
            })
        }

        {/* <div id="pdrbottomContainer" className='flex flex-col md:flex-row lg:p-16 w-fit my-2'>

            <div id="leftSide" className='flex-1/3 flex flex-col justify-center gap-5'>
                <h2 className="font-bold text-4xl max-sm:text-2xl max-sm:font-extrabold">Double down on data protection</h2>
                <p>Enforce security policies to proactively defend against data loss across Atlassian cloud.</p>
                <a className="flex gap-1 items-center text-blue-500 group " href="#">
                    <span className=" group-hover:underline">See capabilities</span>
                    <img className=" group-hover:translate-x-1 duration-300 " src="/Guard/default (9).svg" alt="" />
                </a>
            </div>

            <div id="rightSide" className='flex-2/3 relative '>
                
                <img className='w-full h-[105%] xl:h-[115%] absolute -z-10 top-[55%] left-1/2 -translate-1/2' src="/Guard/CSD-12874_Guard_main_product_tour_protect_frame_desktop.svg" alt="" />    
                
                <div id="videoFrame" className='m-8'>
                    <video className='w-full max-h-[480px]' autoPlay loop muted src="/Guard/CSD-12874 Guard WAC PT Detect Product Screen_3gkw3znm5zc37r6c43vt9.mp4"></video>
                </div>
            </div>

        </div> */}

    </div>

    </>
  )
}

export default PdrSection