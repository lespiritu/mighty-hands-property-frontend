import axios from "axios";
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {BsFillCheckCircleFill as IconCheck} from 'react-icons/bs'

export  function ViewProperty() {

      const navigate = useNavigate();
    const { _id } = useParams();
    const [propertyData, setPropertyData] = useState([])

    useEffect(() => {
       async function getProperty() {
             const result = await axios.get(`https://sore-cyan-turtle-wrap.cyclic.app/api/property/viewSingleProperty/${_id.slice(0,24)}`)
            
           try {
               if (result.data.status==='success') {
                   console.log('success');
                   console.log(result.data);
                   setPropertyData(result.data.viewSingleProperty)
               }
               else {
                    navigate('/*');
               }
             
           } catch (error) {
             console.log(error.message);
                     navigate('/*');
           }
        }
        
        getProperty()

    },[_id, navigate])



    // reference
    console.log(propertyData);

    const defaltImage = "https://res.cloudinary.com/dupguftn4/image/upload/v1686801265/default_image_ocqf1t.jpg"
    return (
        <div className='pt-32 md:pt-56'>
            <div className='p-10 max-w-7xl mx-auto'>
                <h1 className='text-4xl font-semibold text-zinc-700 text-center '>{ propertyData.propertyName}</h1>
                <p className="text-justify md:max-w-2xl mx-auto italic text-zinc-500 py-10 ">{propertyData.descriptions} </p>
                
                <div className='md:flex'>
                    <img className='md:w-1/2 object-cover rounded-md border border-orange-300 ' src={propertyData.images ? propertyData.images[0] : defaltImage  } />
                    <div className="lg:p-20  md:p-10 py-10  md:w-1/2 w-full ">
                        <h1 className='text-2xl font-semibold pb-4 text-zinc-600'>Property Details</h1>
                        <ul className='text-zinc-500'>
                          {  propertyData.address && <li className='py-2'><span className='font-semibold'>Address:</span> {propertyData.address}</li> }                          
                         {  propertyData.developer && <li className='py-2'><span className='font-semibold'>Developer:</span> {propertyData.developer}</li>}
                          {  propertyData.price && <li className='py-2'><span className='font-semibold'>Price:</span> {propertyData.price} per sqm</li>}
                         { propertyData.sizeNumber &&  <li className='py-2'><span className='font-semibold'>Lot size:</span> {propertyData.sizeNumber}</li>}
                         {  propertyData.category && <li className='py-2'><span className='font-semibold'>Category:</span> {propertyData.category} Lot</li>}
                        </ul>
                    </div>
                </div>

                  <div className='md:flex flex-row-reverse'>
                        <img className='md:w-1/2 object-cover rounded-md border border-orange-300 ' src={propertyData.images && propertyData.images.length > 1 ? propertyData.images[1] : defaltImage  }/>
                    <div className="lg:p-20  md:p-10 py-10  md:w-1/2 w-full ">
                        <h1 className='text-2xl font-semibold pb-4 text-zinc-600'>More details</h1>
                        <ul className="text-zinc-500 ">
                            {propertyData.details && propertyData.details.map((item, index) => <li className="py-2" key={index}><IconCheck className='inline mr-2 text-teal-600'/> {item}</li>)}
                            
                        </ul>
                    </div>
                </div>

                <div className='text-center md:p-10 border-t mt-4 md:mt-10'>
                    <h1 className='text-2xl font-semibold pb-4 text-zinc-600'>Images</h1>
                    <div className='flex gap-2 flex-col md:flex-row'>
                        <img className='md:w-1/2 object-cover rounded-md border border-orange-300 ' src={propertyData.images && propertyData.images.length > 2  ? propertyData.images[2] : defaltImage  }/>
                        <img className='md:w-1/2 object-cover rounded-md border border-orange-300 ' src={propertyData.images && propertyData.images.length > 3  ? propertyData.images[3] : defaltImage  }/>
                    </div>
                
                </div>
             </div>
        </div>
    )
}