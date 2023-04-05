const NavIcon = (props) => {
    return(
        <>
             <div style={{alignItems:'center'}} className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="rounded-full bg-white-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                    {
                        props.children
                    }
                        <span style={{fontSize:'10px'}}>{props.name}</span>
              </button>
              
            </div>
        </>
    )
}

export default NavIcon;