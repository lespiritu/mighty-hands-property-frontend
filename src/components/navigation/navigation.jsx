

export function Navigation() {
    return (
        <div className='flex justify-between items-center h-screen md:h-auto fixed md:w-screen z-10 bg-cream-1 p-4 md:p-10 top-0 text-zinc-500 '>
            <div className="hidden md:flex items-center gap-4">
                <img className='h-20' src="https://res.cloudinary.com/dbed2fwkj/image/upload/v1685549843/logo_btebvc.png" />
                <div className="flex flex-col">
                    <p className='text-2xl font-semibold  self-start px-4 pt-2 bg-zinc-700 text-cream-1'>Mighty Hands</p>
                    <b className='text-2xl font-semibold  self-start px-4 pb-2 bg-zinc-700 text-cream-1'>Property</b>

                    
                    {/* <p className="font-normal text-xs">contact: +639157230777</p> */}
                </div>
            </div>

            <div className="flex items-center justify-center md:w-auto w-screen">
              
                <ul className="flex flex-col md:flex-row ">
                    
                    <li className="cursor-pointer text-2xl md:text-base  p-4">Home</li>
                    <li className="cursor-pointer text-2xl md:text-base  p-4">Property</li>
                    <li className="cursor-pointer text-2xl md:text-base  p-4">About Us</li>
                    <li className="cursor-pointer text-2xl md:text-base  p-4">Contact</li>
                </ul>
            </div>
        </div>
    )
}