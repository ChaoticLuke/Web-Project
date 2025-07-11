import Image from 'next/image'

//Main page for website
export default function Home() {
  return (
    <div>
        <div className='bg-[url("/Wave_main.svg")] h-full w-full pt-20 bg-center bg-cover bg-no-repeat sm:pl-10'>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl mb-1 pt-20 ml-1 font-bold px-8 text-center sm:text-left">Hello!</h1>
            <h2 className="text-5xl sm:text-6xl mb-1 ml-1 pt-3 sm:pt-0 font-light px-8 text-center sm:text-left">Welcome to Wessex Footwear</h2>
            <p className='text-4xl sm:text-5xl ml-1 pt-6 sm:pt-7 font-light px-8 text-center sm:text-left'>We make high quality, handmade slippers for the past 32 years</p>
            <button className='sm:justify-between flex content-center justify-center items-center font-medium sm:mx-10 mb-96 mx-auto '>
              <a href="/showcase" className="top rounded-full font-bold py-2 px-12 cursor-pointer tracking-wide uppercase mt-5 text-2xl duration-75 delay-50 hover:text-light hover:bg-lpeach bg-peach border-4 border-mossgreen focus:border-ltmossgreen shadow-xl">View all</a>
            </button>
            <br/>
        </div>
      
        <div className='lg:m-5 mt-5 backmain border-4 md:border-8 rounded-lg border-mossgreen clearfix'>
            <div className='p-4 md:p-0'>
              <Image className='mx-auto md:float-right clearfix md:2/5 xl:h-1/3 md:w-4/12 xl:w-3/12 border-4 md:border-8 border-lmossgreen rounded-xl m-4 shadow-lg md:mr-16' src="/Sheo_12_GreyFluff.jpeg" alt="Grey boot" width={500} height={500}/>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-center md:text-left md:ml-10 mt-12 lg:mt-20 underlinemain">Specialising in</h1>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-normal text-center md:text-left mt-4 mb-10 md:ml-10">Moccasins, Turn slippers and shoes</p>
            <p className="text-center md:text-left text-2xl sm:text-3xl sm:mt-5 ml-1 font-light px-8 mt-5 mb-10">Check out our showcase <a href="/showcase" className=' text-mossgreen hover:text-ltmossgreen'>here</a></p>
        </div>

        <div className='lg:m-5 mt-5 backmain border-4 md:border-8 rounded-lg border-peach clearfix'>
            <div className='p-4 md:p-0'>
              <Image className='mx-auto md:float-right clearfix md:2/5 xl:h-1/3 md:w-4/12 xl:w-3/12 border-4 md:border-8 border-lpeach rounded-xl m-4 shadow-lg md:mr-16' src="/Sheo_14_SlipperBoot.jpeg" alt="Slipper with 3 diffrent colours, dark blue, grey and scarlett" width={500} height={500}/>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-center md:text-left md:ml-10 mt-12 lg:mt-20 underlinemain2">A workforce</h1>
            <p className="text-3xl sm:text-4xl font-normal text-center md:text-left mt-4 mb-10 md:ml-10">who have been involved in the industry over the past 32 years.</p>
            <p className="text-center md:text-left text-2xl sm:text-3xl sm:mt-5 ml-1 font-light px-8 mt-5 mb-10">Learn more about us <a href="/about" className=' text-mossgreen hover:text-ltmossgreen'>here</a></p>
        </div>



        <div className='mt-14 '>
          <div className='text-center mb-20'>
            <h1 className='text-3xl sm:text-4xl font-bold mb-5 '>See our products</h1>
            <a href="/showcase" className='rounded-full font-bold uppercase cursor-pointer tracking-wider shadow-2xl p-2 pr-6 pl-6 sm:pr-20 sm:pl-20 text-lg sm:text-2xl bg-mossgreen hover:bg-lmossgreen border-4 hover:text-light border-gray-700 focus:border-gray-500'>click here</a>
          </div>
          <div className='sm:justify-between justify-center flex items-center bottomnav border-gray-200 text-2xl font-medium px-10 pb-2 border-t-2 border-r-0 border-l-0 border-b-0 bottom-0 w-full'>
            <a href="#" className="top rounded-full font-bold py-1 px-4 cursor-pointer shadow-2xl mt-2 text-xl bg-mossgreen hover:bg-lmossgreen hover:text-light border-2 border-gray-700 shadow-sl">Go back to the top <span className='ml-2 font-bold text-darkgreen  '>^</span></a>
          </div>
        </div>

    </div> 
  )
}