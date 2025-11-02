function PrmBtn(props){
    
        return <button 
        className={`px-6 py-2 w-fit rounded-full font-medium cursor-pointer 
            ${
                props.bgColor==="orange"?"bg-orange-400 text-black hover:bg-orange-500":"bg-blue-600 text-white hover:bg-blue-700"
            } 
            `}>{props.btnText}</button>
}

export default PrmBtn