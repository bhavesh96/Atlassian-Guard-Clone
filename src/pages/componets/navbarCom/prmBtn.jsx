function PrmBtn({btnText,bgColor,width}){
        return <button 
        className={`px-6 py-2 ${width==="full"? "w-full" :"w-fit"} rounded-full font-medium cursor-pointer 
            ${
                bgColor==="orange"?"bg-orange-400 text-black hover:bg-orange-500":"bg-blue-600 text-white hover:bg-blue-700"
            } 
            `}>{btnText}</button>
}

export default PrmBtn