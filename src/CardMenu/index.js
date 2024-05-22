const CardMenu = () => {
return(
    <div className=" bg-amber-100  w-72 h-72 rounded-lg">
        <figure className="relative mb-2 w-full h-4/5 justify-center" >
            <img 
                className="w-full h-full object-cover rounded-lg"
                src="https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Brownie"></img>
            <button className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 bg-white">+</button>
        </figure>
        <p className="flex justify-between mx-2">
            <span className="text-sm font-light">
                Brownie 
            </span>
            <span className="text-lg font-medium">
                $4000
            </span>
        </p>
    </div>
)
}

export default CardMenu