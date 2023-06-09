export function Hero({title}) {
    return (
        <div className='bg-cream-1 pt-20 '>
            
            <div className='  bg-hero-bg bg-no-repeat bg-cover   bg-fixed bg-center h-screen  ml-[15%] '>
                <p className=" font-semibold text-white bg-[#020a17ab]   translate-y-[30%] md:translate-y-60 md:bg-[#020a17ab]  leading-normal md:leading-tight translate-x-[-40px] lg:translate-x-[-150px] md:translate-x-[-70px] text-4xl  md:text-6xl p-10 w-[100%] md:w-[70%] lg:w-[50%] rounded">{title}</p>
            </div>
        </div>
    )
}