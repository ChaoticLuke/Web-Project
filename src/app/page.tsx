import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import './globals.css'

export default function Home() {
  return (
    <div>
      <div>
        <div className='bg-[url("/Wave-main.svg")] pt-20 bg-local bg-center bg-cover bg-no-repeat max-w-full'>
          <div className='pl-10'>
            <h1 className="text-7xl lg:text-8xl mb-1 pt-20 ml-1 font-bold px-8 text-center sm:text-left">Hello!</h1>
            <h1 className="text-6xl mb-1 ml-1 font-light px-8 text-center sm:text-left">Welcome to Wessex Footwear</h1>
            <p className='text-5xl ml-1 pt-20 font-light px-8 text-center sm:text-left'>We make high quality, handmade slippers</p>
            <div className='justify-between flex items-center font-medium px-10 pb-2 bottom-0 w-full'>
              <a href="/allproducts" className="top btn3 mt-5 mb-96 text-2xl bg-yellow-500 border-4 border-green-600">View all</a>
            </div>
            <br/>
            </div>
        </div>
      
        <div className='lg:m-5 mt-5 bg-gray-200 border-8 rounded-lg border-green-700 flex'>
          <div>
            <h1 className="text-6xl mb-1 ml-1 font-light px-8 pt-10 text-center sm:text-left">Look at my<br/>
            <span className="text-7xl lg:text-8xl mb-1 font-bold text-center sm:text-left">Slippers</span></h1>
            <p className="text-left text-3xl mt-14 ml-1 font-light px-8">The slippers from the compant that exists in the real world</p>
            <p className='m-10 text-2xl'>This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. <br/>
            Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irurvcbvbvcgfdgdge dolor in reprehenderit in. Bingle</p>          
          </div>
            <Image className='float-none lg:float-right my-5 lg:m-4 p-5' src="placeholder_about.svg" alt="dash2" width={700} height={400}/>
          </div>

         <div className='lg:m-5 mt-5 bg-gray-200 border-8 rounded-lg border-yellow-600 flex'>
          <div>
            <h1 className="text-6xl mb-1 ml-1 font-light px-8 pt-10 text-center sm:text-left">Look at my<br/>
            <span className="text-7xl lg:text-8xl mb-1 font-bold text-center sm:text-left">Slippers</span></h1>
            <p className="text-left text-3xl mt-14 ml-1 font-light px-8">The slippers from the compant that exists in the real world</p>
            <p className='m-10 text-2xl'>This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. <br/>
            Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irurvcbvbvcgfdgdge dolor in reprehenderit in. Bingle</p>          
          </div>
            <Image className='float-none lg:float-right my-5 lg:m-4 p-5' src="placeholder_about.svg" alt="dash2" width={700} height={400}/>
         </div>

        <div className=''>
          <div className='text-center mb-16'>
            <h1 className='text-4xl font-bold mb-5 '>See all products</h1>
            <a href="/allproducts" className='btn p-3 pr-16 pl-16 sm:pr-20 sm:pl-20 border text-2xl bg-green-600 border-4 border-gray-700'>click here</a>
          </div>
          <div className=' sans justify-between flex items-center bg-gray-300 text-2xl font-medium px-10 pb-2 border bottom-0 w-full'>
            <a href="#" className="top btn2 mt-2 text-xl bg-green-600 border-2 border-gray-700">Go back to the top <span className='ml-2 font-bold text-green-900 '>^</span></a>
          </div>
        </div>

     </div> 
    </div> 
  )
}