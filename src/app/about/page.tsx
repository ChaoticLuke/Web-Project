import Image from 'next/image'

export default function Contactus() {
    return (
        <div className="sans">
            <div className='ml-10'>
              <h1 className="flex justify-between items-center text-6xl mt-28 mb-1 ml-1 font-bold px-8">About Us -</h1>
            </div>
            <Image className='flex snap-center snap-right float-right ml-10 mr-20' src="placeholder_about.svg" alt="dash2" width={700} height={40}/>
            <div>
                <span className="flex ml-20 items-center text-3xl mt-5 sans">
                    <p className=""> Hello! This is wessex footwares about page. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <p className='mt-10'>This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                     ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                     sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </p>
                </span>
            </div>
         </div>        
    )
}