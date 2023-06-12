import axios from "axios";
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

export function ViewProperty() {

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

    const defaltImage = "https://res.cloudinary.com/dupguftn4/image/upload/v1686283140/intro-1000x800_znouy8.jpg"
    return (
        <div className='pt-32 md:pt-56'>
            <div className='p-10 max-w-7xl mx-auto'>
                <h1 className='text-4xl font-semibold text-zinc-700 pb-20 text-center '>{ propertyData.propertyName}</h1>

                <div className='md:flex'>
                    <img className='md:w-1/2 object-cover rounded-md' src={propertyData.images ? propertyData.images[0] : defaltImage  } />
                    <div className="lg:p-20  md:p-10 py-10  md:w-1/2 w-full ">
                        <h1 className='text-2xl font-semibold pb-4 text-zinc-600'>Details</h1>
                        <p className="text-zinc-500" >{propertyData.descriptions }</p>
                    </div>
                </div>

                  <div className='md:flex flex-row-reverse'>
                        <img className='md:w-1/2 object-cover rounded-md' src="https://res.cloudinary.com/dupguftn4/image/upload/v1686283140/intro-1000x800_znouy8.jpg"/>
                    <div className="lg:p-20  md:p-10 py-10  md:w-1/2 w-full ">
                        <h1 className='text-2xl font-semibold pb-4 text-zinc-600'>Details</h1>
                        <p className="text-zinc-500" >Aute non minim aute fugiat consectetur excepteur laboris consectetur eiusmod irure nulla. Magna fugiat et sit ut sit anim nisi quis incididunt minim. Occaecat nostrud nulla sit sunt Lorem culpa nulla consectetur Lorem exercitation quis incididunt. Sunt sunt deserunt irure fugiat anim. Occaecat elit nisi veniam aliqua deserunt quis incididunt aliqua adipisicing qui duis.</p>
                    </div>
                </div>

                <div className='text-center md:p-10 border-t mt-4 md:mt-10'>
                    <div className='flex gap-2 pt-10 flex-col md:flex-row'>
                        <img className='md:w-1/2 object-cover rounded-md' src="https://res.cloudinary.com/dupguftn4/image/upload/v1686283140/intro-1000x800_znouy8.jpg" />
                        <img className='md:w-1/2 object-cover rounded-md' src="https://res.cloudinary.com/dupguftn4/image/upload/v1686283140/intro-1000x800_znouy8.jpg"/>
                    </div>
                    <h1 className='text-2xl py-4 text-zinc-600 font-semibold'>- Some details -</h1>
                    <p className="text-justify md:max-w-4xl mx-auto italic text-zinc-500">Non mollit excepteur mollit sunt exercitation mollit voluptate mollit adipisicing ea eiusmod aute amet eiusmod. Qui aliqua ea consequat Lorem ea ea aliqua esse. Tempor velit elit eiusmod deserunt amet commodo. Ut tempor fugiat veniam incididunt ad proident ex in aliquip elit nulla ea. Excepteur amet tempor eu reprehenderit duis pariatur ea eu ut cillum aute magna sint.</p>
                </div>
             </div>
        </div>
    )
}