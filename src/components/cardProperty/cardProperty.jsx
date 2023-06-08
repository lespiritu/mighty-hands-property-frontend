export function CardProperty(props) {

    const { propertyName,address, price, sizeNumber, images } = props;
    return (
        <div className=" bg-zinc-800  mb-4 md:mb-0 rounded-lg overflow-hidden cursor-pointer">
            <img className='w-full hover:scale-105 transition-all ease-linear' src={ images ? images[0] : "https://res.cloudinary.com/dbed2fwkj/image/upload/v1684565952/yqkmkxhpq1kcovklgkps.png"  } />
            
            <div className="p-4 text-zinc-400 text-xs ">
                <h4>Name: {propertyName}</h4>
                <p>Address: {address}</p>
                <p>Lot size: {sizeNumber}</p>
                <p>Price: {price} per sqm.</p>

            </div>
        </div>
    )
}