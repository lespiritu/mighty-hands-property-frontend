import { useEffect, useState } from "react";
import { CardProperty } from "../cardProperty";
import axios from "axios";
import {BiChevronDown as IconDown, BiChevronUp as IconUp} from 'react-icons/bi'

export function AllProperties() {

    const [propertyData, setPropertyData] = useState([])

    const [category, setCategory] = useState('viewAll')

    useEffect(() => {
        async function getProperty() {
           const result = await axios.get(`http://localhost:5000/api/property/viewAllProperty`)
            try {
                return setPropertyData(result.data.data);
            } catch (error) {
                console.log(result.data.status);
            }
            
        }

        getProperty()

    },[])


    function displayData(category) {
        
        if (category === "viewAll") {
            return propertyData.map((item, index) => <CardProperty key={index} {...item} />)
        }

        if (category === "small") {
            const smallProperties = propertyData.filter(item => item.category === "small");

            return smallProperties.map((item, index) => <CardProperty key={index} {...item} />)
        }

        if (category === "medium") {
            const largeProperties = propertyData.filter(item => item.category === "medium");

            return largeProperties.map((item, index) => <CardProperty key={index} {...item} />)
        }

         if (category === "large") {
            const largeProperties = propertyData.filter(item => item.category === "large");

            return largeProperties.map((item, index) => <CardProperty key={index} {...item} />)
        }

        
         if (category === "house") {
            const houses = propertyData.filter(item => item.category === "house");

            return houses.map((item, index) => <CardProperty key={index} {...item} />)
        }


    }

    const [openCategory, setOpenCategory]= useState(false)
    return (
        <div className=' py-10'>
            <h1 className='text-center text-4xl font-semibold text-zinc-600 pb-4'>List of our Property</h1>
            <div className="relative px-10 text-sm  max-w-7xl mx-auto ">
                
                <button onClick={() => setOpenCategory(prev => !prev)} className="p-3 bg-zinc-900 text-zinc-200 cursor-pointer select-none w-auto rounded flex gap-2">View by Category {openCategory ? <IconUp className='text-xl'/> : <IconDown className='text-xl'/>} </button>
                {openCategory && <ul className="flex flex-col justify-center align-middle absolute top-0 translate-y-11 ">
                    <li onClick={() => setCategory("viewAll")} className="bg-zinc-100 w-[100px] text-sm p-2 hover:bg-zinc-200 cursor-pointer text-zinc-700">View all</li>
                    <li onClick={() => setCategory("small")} className="bg-zinc-100 w-[100px] text-sm p-2 hover:bg-zinc-200 cursor-pointer text-zinc-700">small size</li>
                    <li onClick={() => setCategory("medium")} className="bg-zinc-100 w-[100px] text-sm p-2 hover:bg-zinc-200 cursor-pointer text-zinc-700">medium size</li>
                    <li onClick={() => setCategory("large")} className="bg-zinc-100 w-[100px] text-sm p-2 hover:bg-zinc-200 cursor-pointer text-zinc-700">Large size</li>
                </ul>}
                
            </div>
            <div className='w-full pt-5 px-10 mx-auto max-w-7xl sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 '>
            {displayData(category)}
            
            </div>

        

        </div>
    )
}