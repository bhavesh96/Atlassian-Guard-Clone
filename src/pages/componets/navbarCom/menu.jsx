function Menu(props){
    console.log(props)
    return(
        <li className="flex items-center cursor-pointer h-full px-5 hover:text-white hover:bg-blue-600">{props.menuName}</li>
    )
}

export default Menu