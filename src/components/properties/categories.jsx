



export function Categories() {


    const logCategory = [
        {title: "Small Lot", description: "This category is less than 500sqm lot size", image: "https://res.cloudinary.com/dupguftn4/image/upload/v1686280991/small-cut-1_q7ouij.jpg"},
        {title:"Medium Lot", description:"This category is 500sqm to 1000sqm lot size", image:"https://res.cloudinary.com/dupguftn4/image/upload/v1686280991/medium-cut-1_gycxdv.jpg"},
        {title:"Large Lot", description:"his category is more than 1000sqm like 1hectaire", image:"https://res.cloudinary.com/dupguftn4/image/upload/v1686280991/large-cut-1_dgtl6v.jpg"},
        {title:"House and Lot", description:"This category is with house and lot", image:"https://res.cloudinary.com/dupguftn4/image/upload/v1686280991/house-1_hplejv.jpg"}
    ]

    return (
      
        <div className='py-10 p-10 lg:p-20 '>
            <div><h1 className='text-4xl  font-semibold text-center pb-4 text-zinc-600 '>Our Properties</h1></div>

            <p className='text-center pb-10 italic text-zinc-500 '>We can provide you a property from small lot into large Land Property</p>
            <div className='md:flex gap-2 justify-center flex-wrap text-center max-w-screen-2xl mx-auto'>
                {logCategory.map((item, index) => {
                    return (
                    <div key={index} className='  relative text-white bg-zinc-50 mb-1 md:m-0 cursor-pointe rounded overflow-hidden w-full md:w-[49%] xl:w-[24%] cursor-pointer'>
                            <div className='absolute z-[1] translate-x-[-50%] left-1/2 w-full top-1/2 translate-y-[-50%]'>
                                <h2 className='text-3xl font-semibold p-4'>{item.title}</h2>
                            <p className='px-4 italic '>{item.description}</p>
                            </div>
                            <img className='z-0 hover:scale-105 transition ease-in-out duration-300' src={item.image } />
                    </div>
                    )
                })}
           
            </div>

        </div>
  
  )
}

