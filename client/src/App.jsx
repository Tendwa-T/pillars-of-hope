import './App.css'

function App() {
  return (
    <div className=' w-screen h-screen '>
              
        <section className="bg-slate-300">
          <p className="font-sans font-bold text-3xl mb-2">Support us </p>
          <p className='text-xl'>Small actions lead to big changes</p>
        
          <div className='flex items-center justify-center gap-10 mb-6 min-h-screen p-4'>

            <div className='grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-10 p-10'>

              <div className="hover:animate-pulse size-96 bg-white rounded-lg hover:grow-0 sm:w-96 sm:h-full" >
                  <img src="../public/assets/children.jpeg" alt="Coming up.." className="mb-3 "/>
                  <h1 className="font-bold mb-2">Help for School fees</h1>
                  <p className="text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> 
              </div>

              <div className="size-96 bg-white rounded-lg">
                <img src="../public/assets/children.jpeg" alt="Coming up.." className="mb-3"/>
                <h1 className="font-bold mb-2">Help for Bills</h1>
                <p className="text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </div>

              <div className="size-96 bg-white rounded-lg">
                <img src="../public/assets/children.jpeg" alt="Coming up.." className="mb-3"/>
                <h1 className="font-bold mb-2">Help for Food and clothing</h1>
                <p className="text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </div>

              <div className="size-96 bg-white rounded-lg">
                <img src="../src/assets/children.jpeg" alt="Coming up.." className="mb-3"/>
                <h1 className="font-bold mb-2">Help for Land Acquisition</h1>
                <p className="text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </div>

              
            </div>
           
            </div>
            
        </section>
        <section className='items-center justify-center contact bg-white  p-8'>
          
         <h1 className='text-3xl'>How to get to us:</h1>
          <div className=' gap-14 p-14 grid grid-cols-2 border-3 '>
            <div className='flex size-52 w-full rounded-lg '>
              <div className='p-10'><img src="../public/assets/location.png" alt="" className='size-20' /></div>
              <p className='mt-10'>diam volutpat commodo sed <br /> diam volutpat commodo sed <br /> diam volutpat commodo sed <br />diam volutpat commodo sed</p>
            </div>

            <div className='flex size-52 w-full '>
              <div className=" img p-10">
                <img src="../public/assets/phone.png" className="size-20"alt="coming..." /></div>
                <p className='text-bold mt-12'>09-093-234-134 <br /> <br />Reach us through this number</p>
            </div>

            <div className='flex p-6 size-52 w-full'>
              <div className='p-10'><img src="../public/assets/email.png" className="size-20" alt="" /></div>
              <p className='mt-12 '>Lorem ipsum dolor sit</p>
            </div>
          </div>
          
        </section>
      
      
    </div>
  )
}

export default App
