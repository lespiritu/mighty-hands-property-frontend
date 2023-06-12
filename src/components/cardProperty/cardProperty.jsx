export function CardProperty(props) {

    const { propertyName,address, price, sizeNumber, images,_id } = props;
    return (
        <div onClick={()=> console.log(_id )} className=" relative bg-[#ffffff96] mb-4 md:mb-0  overflow-hidden cursor-pointer rounded-md border  border-solid border-orange-200">
            <img className='w-full hover:scale-105 transition-all ease-linear' src={ images ? images[0] : "https://res.cloudinary.com/dbed2fwkj/image/upload/v1684565952/yqkmkxhpq1kcovklgkps.png"  } />
            
            <div className="p-1 text-zinc-200 text-sm  absolute top-0 w-full bg-[#30272099] text-center">
                <h4>{propertyName}</h4>
                
                

            </div>
              <div className="p-4  text-xs w-full text-zinc-800">
                <p className="pb-2">at {address}</p>
                <p className="pb-2"><b>Lot size:</b> {sizeNumber}</p>
                <p className="pb-2"><b>Price:</b> {price} per sqm.</p>
            </div>
        </div>
    )
}