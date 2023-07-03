import Image from 'next/image'
 
export default function Home() {
  return (
    <div>
      <div>
        <Image src="Wave.svg" alt="wave" width={1920} height={1080}/>
      </div>
      <div className='m-10 bg-gray-200 border-8 border-green-700 overflow-visible'>
        <Image className='float-right m-4' src="placeholder_about.svg" alt="dash2" width={700} height={400}/>
          <h1 className="text-left text-6xl mt-24 mb-1 ml-1 font-light px-8">Look at my</h1>
          <h1 className="text-left text-8xl mb-1 ml-1 font-bold px-8">Slippers</h1>
          <p className="text-left text-3xl mt-14 mb-16 ml-1  font-light px-8">The slippers from the compant that exists in the real world 
          <p className='mt-10 text-2xl'>This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing 
          <p>elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>Nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in. Bingle</p></p>
      </div>
      <div className='m-10 bg-gray-200 border-8 border-yellow-600 overflow-visible'>
        <Image className='float-right m-4' src="placeholder_about.svg" alt="dash2" width={700} height={400}/>
          <h1 className="text-left text-6xl mt-24 mb-1 ml-1 font-light px-8">Look at my</h1>
          <h1 className="text-left text-8xl mb-1 ml-1 font-bold px-8">Slippers</h1>
          <p className="text-left text-3xl mt-14 mb-16 ml-1  font-light px-8">The slippers from the compant that exists in the real world 
          <p className='mt-10 text-2xl'>This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing 
          <p>elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>Nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in. Bingle</p></p>
      </div>

     </div> 
  )
}
