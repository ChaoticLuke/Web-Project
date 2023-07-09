import Image from 'next/image'
 
export default function Home() {
  return (
    <div>
      <div>
        <div className=''>
          <Image className='' src="Wave-main.svg" alt="wave" width={1920} height={1080}/>
        </div>
        
      
         <div className=' m-0 lg:m-10 mt-10 bg-gray-200 border-8 border-green-700 '>
        <Image className='float-none lg:float-right mt-3 lg:m-4 ' src="placeholder_about.svg" alt="dash2" width={700} height={400}/>
          <h1 className="text-6xl mt-10 sm:mt-24 mb-1 ml-1 font-light px-8 text-center sm:text-left">Look at my</h1>
          <h1 className="text-7xl lg:text-8xl mb-1 ml-1 font-bold px-8 text-center sm:text-left">Slippers</h1>
          <p className="text-left text-3xl mt-14 mb-16 ml-1  font-light px-8">The slippers from the compant that exists in the real world 
          <p className='mt-10 text-2xl'>This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing 
          <p>elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>Nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irurvcbvbvcgfdgdge dolor in reprehenderit in. Bingle</p></p>          
         </div>

        <div className=' m-0 lg:m-10 mt-10 bg-gray-200 border-8 border-yellow-600  '>
        <Image className='float-none lg:float-right mt-3 lg:m-4 ' src="placeholder_about.svg" alt="dash2" width={700} height={400}/>
          <h1 className="text-6xl mt-10 sm:mt-24 mb-1 ml-1 font-light px-8 text-center sm:text-left">Look at my</h1>
          <h1 className="text-7xl lg:text-8xl mb-1 ml-1 font-bold px-8 text-center sm:text-left">Slippers</h1>
          <p className="text-left text-3xl mt-14 mb-16 ml-1  font-light px-8">The slippers from the compant that exists in the real world 
          <p className='mt-10 text-2xl'>This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing 
          <p>elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>Nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in. Bingle</p></p>          
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
