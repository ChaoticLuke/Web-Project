import Image from 'next/image'
 
export default function Home() {
  return (
    <div>
      <div>
        <Image src="Wave.svg" alt="wave" width={1920} height={1080}/>
      </div>
      <div className='m-10 border-4 overflow-visible'>
       <Image className='float-right m-4' src="placeholder_about.svg" alt="dash2" width={700} height={400}/>
       <h1 className="text-left text-6xl mt-28 mb-1 ml-1 font-light px-8">Look at my</h1>
       <h1 className="text-left text-8xl mb-1 ml-1 font-bold px-8">Slippers</h1>
       <p className="text-left text-xl mt-28 mb-1 ml-1 font-light px-8">The slippers from the compant that exists in the real world 
       <p className='mt-10'>This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                     ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                     sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></p>
      </div>
     </div> 
  )
}
