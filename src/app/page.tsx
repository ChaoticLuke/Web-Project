import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div>
        <div className='bg-[url("/Wave-main.svg")] pt-20 bg-local bg-center bg-cover bg-no-repeat max-w-full'>
          <div className=' sm:pl-10 text-center object-center'>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl mb-1 pt-20 ml-1 font-bold px-8 text-center sm:text-left">Heldwopdnwaijdwanlo!</h1>
            <h1 className="text-5xl sm:text-6xl mb-1 ml-1 pt-3 sm:pt-0 font-light px-8 text-center sm:text-left">Welcome to Wessex Footwear</h1>
            <p className='text-4xl sm:text-5xl ml-1 pt-6 sm:pt-20 font-light px-8 text-center sm:text-left'>We make high quality, handmade slippers</p>
            <div className='sm:justify-between flex content-center justify-center items-center font-medium px-10 pb-2 bottom-0 w-full'>
              <a href="/showcase" className="top btn3 mt-5 mb-96 text-2xl bg-peach border-4 border-mossgreen">View all</a>
            </div>
            <br/>
            </div>
        </div>
      
        <div className='lg:m-5 mt-5 bg-gray-200 border-8 rounded-lg border-mossgreen flex'>
          <div>
          <Image className='float-right flex my-5 lg:m-4 p-5' src="placeholder_about.svg" alt="dash2" width={600} height={400}/>
            <h1 className="text-5xl sm:text-6xl mb-1 ml-1 mt-10 font-light px-8 pt-10 text-center sm:text-left">Look at my<br/>
            <span className="text-7xl lg:text-8xl mb-1 font-bold text-center sm:text-left">Slippers</span></h1>
            <p className="text-center sm:text-left text-3xl sm:mt-14 ml-1 font-light px-8 mt-5">The slippers from the compant that exists in the real world</p>
            <p className='text-center sm:text-left m-10 text-2xl'>This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. <br/>
            Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irurvcbvbvcgfdgdge dolor in reprehenderit in. Bingle</p>  
          </div>
          </div>

          <div className='lg:m-5 mt-5 bg-gray-200 border-8 rounded-lg border-peach flex'>
          <div>
          <Image className='float-right flex my-5 lg:m-4 p-5' src="placeholder_about.svg" alt="dash2" width={600} height={400}/>
            <h1 className="text-5xl sm:text-6xl mb-1 ml-1 mt-10 font-light px-8 pt-10 text-center sm:text-left">Look at my<br/>
            <span className="text-7xl lg:text-8xl mb-1 font-bold text-center sm:text-left">Slippers</span></h1>
            <p className="text-center sm:text-left text-3xl sm:mt-14 ml-1 font-light px-8 mt-5">The slippers from the compant that exists in the real world</p>
            <p className='text-center sm:text-left m-10 text-2xl'>This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. <br/>
            Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irurvcbvbvcgfdgdge dolor in reprehenderit in. Bingle</p>  
          </div>
          </div>

        <div className='mt-14'>
          <div className='text-center mb-20'>
            <h1 className='text-3xl sm:text-4xl font-bold mb-5 '>See our products</h1>
            <a href="/showcase" className='btn p-3 pr-16 pl-16 sm:pr-20 sm:pl-20 text-2xl bg-mossgreen border-4 border-gray-700'>click here</a>
          </div>
          <div className='sm:justify-between justify-center flex items-center bg-gray-300 text-2xl font-medium px-10 pb-2 border bottom-0 w-full'>
          <a href="#" className="top btn2 mt-2 text-xl bg-mossgreen border-2 border-gray-700">Go back to the top <span className='ml-2 font-bold text-green-900 '>^</span></a>
          </div>
        </div>

     </div> 
    </div> 
  )
}