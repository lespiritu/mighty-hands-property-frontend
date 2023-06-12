


export function Intro(props) {
    // eslint-disable-next-line react/prop-types
    const {title, textDetails} = props
  return (
    <div className=" bg-cream-1 w-full">
       <div className="md:flex py-20 w-full max-w-screen-2xl mx-auto">
          
          <div className="bg-intro-bg md:ml-[15%]  w-full md:w-1/2 mx-auto  bg-no-repeat bg-center bg-cover h-[300px] md:h-auto md:rounded-lg">
              
           
          </div>

          <div className="lg:p-32 p-10 md:w-1/2 w-full ">
              <h1 className='text-4xl font-semibold pb-8 text-zinc-600'>{title}</h1>
              <p className="text-zinc-500" >{textDetails}</p>
          </div>
    </div>
     </div>
  )
}

