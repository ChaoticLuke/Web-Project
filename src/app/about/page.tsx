import Image from 'next/image'

export default function About() {
    return (
        <div className="ml-10">
            <div>
              <h1 className="justify-between items-center text-6xl mt-28 mb-1 ml-1 font-bold px-8">About Us <span className='ml-3 font-bold text-mossgreen '>-</span></h1>
            </div>
                <Image className='flex snap-center snap-right float-right ml-10 mr-20' src="placeholder_about.svg" alt="dash2" width={500} height={40}/>
            <div>
                <span className="flex ml-10 items-center text-3xl mt-10 ">
                    <p> <span className='font-medium mr-3'>Hello! We are the slipper slipe</span>This is wessex footwares about page. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur!
                    <p className='mt-6'>This is a paragraph. Lorem ipsum dolor sit amet.<p className='mt-6'>This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.<p className='mt-10'>This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p></p></p></p>
                </span>
            </div>
         </div>        
    )
}