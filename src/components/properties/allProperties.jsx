import { useEffect, useState } from "react";
import { CardProperty } from "../cardProperty";
import axios from "axios";
import { BiChevronDown as IconDown, BiChevronUp as IconUp } from 'react-icons/bi'

import {RotatingLines } from 'react-loader-spinner'

export function AllProperties() {

    const [propertyData, setPropertyData] = useState([])

    const [category, setCategory] = useState('viewAll')
    const [isloading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getProperty() {
           const result = await axios.get(`https://sore-cyan-turtle-wrap.cyclic.app/api/property/viewAllProperty`)
            try {
                return setPropertyData(result.data.data);
            } catch (error) {
                console.log(result.data.status);
            }
            
        }

        getProperty();
        setIsLoading(false)

    },[])


    function displayData(category) {
        
        if (category === "viewAll") {
            return propertyData.map((item, index) => <CardProperty key={index} {...item} />)
        }
        else {
            const smallProperties = propertyData.filter(item => item.category === category);
             return smallProperties.map((item, index) => <CardProperty key={index} {...item} />) 
        }

       

    }

    const [openCategory, setOpenCategory] = useState(false)
    
    function categoryHandler(category) {
        setCategory(category);
        setOpenCategory(false)
    }
    return (
        <div className=' py-10 bg-[#edeae2] min-h-screen pt-32 md:pt-56'>
            <h1 className='text-center text-4xl font-semibold text-zinc-700 pb-10'>List of our Property</h1>
            <div className=" relative px-10 text-sm mx-auto  max-w-screen-2xl z-10  w-full ">
                  
                <button onClick={() => setOpenCategory(prev => !prev)} className=" z-10 p-3 bg-zinc-900 text-zinc-200 cursor-pointer select-none md:w-1/4 rounded flex justify-between gap-2 w-full">View by Category {openCategory ? <IconUp className='text-xl'/> : <IconDown className='text-xl'/>} </button>
                <div className={`relative w-full md:w-1/4 bg-red-100 ${openCategory ? `h-auto` : `h-0`}  overflow-hidden transition-all ease-linear`}>
                     {<ul className={`flex flex-col justify-center  align-middle  w-full -z-20 md:w-auto `}>
                        <li onClick={() => categoryHandler("viewAll")} className="bg-zinc-100  text-sm p-2 hover:bg-zinc-200 cursor-pointer text-zinc-700 select-none">View all</li>
                        <li onClick={() => categoryHandler("small")} className="bg-zinc-100  text-sm p-2 hover:bg-zinc-200 cursor-pointer text-zinc-700 select-none">small size</li>
                        <li onClick={() => categoryHandler("medium")} className="bg-zinc-100  text-sm p-2 hover:bg-zinc-200 cursor-pointer text-zinc-700 select-none">medium size</li>
                        <li onClick={() => categoryHandler("large")} className="bg-zinc-100  text-sm p-2 hover:bg-zinc-200 cursor-pointer text-zinc-700 select-none">Large size</li>
                    </ul>}
                </div>
                
            </div>

            
            {isloading ? <div className='flex justify-center py-28 opacity-30'>
                <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
            /> 
            </div>
                    :
            <div className='w-full pt-5 px-10 mx-auto max-w-screen-2xl  sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 '>
            {displayData(category)}
            </div>
                
            } 


        </div>
    )
}