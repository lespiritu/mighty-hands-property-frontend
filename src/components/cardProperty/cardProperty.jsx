export function CardProperty(props) {

    const { propertyName,address, price, sizeNumber, images } = props;
    return (
        <div className=" relative  bg-[#0e1f29] mb-4 md:mb-0  overflow-hidden cursor-pointer rounded-xl">
            <img className='w-full hover:scale-105 transition-all ease-linear' src={ images ? images[0] : "https://res.cloudinary.com/dbed2fwkj/image/upload/v1684565952/yqkmkxhpq1kcovklgkps.png"  } />
            
            <div className="p-4 text-zinc-200 text-sm  border-solid border-red-400 absolute top-0 w-full bg-[#020a17ab] text-center">
                <h4>{propertyName}</h4>
                
                

            </div>
              <div className="p-4 text-zinc-200 text-xs border-solid border-red-400 w-full text-center">
                <p className="pb-2">Address: {address}</p>
                <p className="pb-2">Lot size: {sizeNumber}</p>
                <p className="pb-2">Price: {price} per sqm.</p>
            </div>
        </div>
    )
}