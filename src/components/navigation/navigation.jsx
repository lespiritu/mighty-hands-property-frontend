import { useState } from "react"


export function Navigation() {
    const [closeBtn, setCloseBtn] = useState(true)
    
    
    const linkList = [
        {name:"Home", isActive:true},
        {name:"Property", isActive:false},
        {name:"About", isActive:false},

    ]

    const [navLinks, setNavLinks] = useState(linkList)

    function btnActiveHandler(name) {
        setCloseBtn(true);

        setNavLinks((previous) => {
            return previous.map( item => item.name === name? {...item, isActive:true} : {...item, isActive:false} )
        })
    }
    return (
        <div className=' md:flex justify-between items-center  fixed w-full z-10 bg-cream-1 p-4 md:p-10 top-0 text-zinc-500 '>
            <div className="flex items-center gap-2 md:gap-4 ">
                <img className='h-[50px] md:h-20' src="https://res.cloudinary.com/dbed2fwkj/image/upload/v1685549843/logo_btebvc.png" />
                <div className="md:flex flex-col">
                    <p className='text-sm md:text-2xl font-semibold  self-start p-1 md:p-2 bg-zinc-800 text-cream-1'>Mighty Hands</p>
                    <b className='text-sm md:text-2xl font-semibold  self-start p-1 md:p-2 bg-zinc-800 text-cream-1'>Property</b>
                </div>
            </div>

           
            <div className={`flex flex-row items-center justify-center md:relative fixed bg-cream-1 md:z-auto z-[20] right-0 w-full md:w-auto h-screen md:h-auto transition-all duration-300 ease-linear ${closeBtn? "translate-x-[100%]" : "translate-x-[0]"} md:top-auto md:translate-x-0 top-0`}>
              
                <ul className="md:flex flex-col md:flex-row md:py-0 py-4 ">
                    {navLinks.map((item, index) => <li onClick={()=> btnActiveHandler(item.name)} key={index} className={`cursor-pointer text-xl md:text-base  md:px-2 md:py-1 p-4 select-none ${item.isActive? "bg-zinc-800 ":"bg-transparent"}`} >{ item.name}</li>)}
                </ul>
            </div>


             <div onClick={()=> setCloseBtn(previous=> !previous)} className="absolute top-6 right-6 z-20 md:hidden flex flex-col gap-[5px] cursor-pointer ">
                <button className={`origin-top-left bg-zinc-700 h-[3px] rounded-full ${closeBtn? "rotate-0": "rotate-[45deg]"}  w-[24px]  transition-all duration-300 ease-linear`}></button>
                <button className={`bg-zinc-700 h-[3px] rounded-full  ${closeBtn? "w-[24px]": "w-0"} transition-all duration-300  ease-linear`}></button>
                <button className={`origin-bottom-left tranlate-x-[100%] bg-zinc-700 h-[3px] rounded-full w-[24px] ${closeBtn? "rotate-0": "rotate-[-45deg]"}   transition-all duration-300 ease-linear`}></button>
            </div>
        </div>
    )
}