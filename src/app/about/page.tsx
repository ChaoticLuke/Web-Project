import Image from 'next/image'

//About page
export default function About() {
    return (
        <div className="md:ml-10">
            <div>
                <h1 className="justify-between text-center md:text-left text-3xl md:text-6xl mt-20 md:mt-28 mb-1 font-bold md:ml-1 md:px-8">About us<span className='ml-3 font-bold text-mossgreen '> -</span></h1>     
            </div>
            <div className='m-10'>
                <img className=' lg:float-right sm:ml-10 sm:mr-20 sm:w-3/5 sm:h-3/5 lg:w-2/5 lg:h-2/5  sm:shadow-lg border-8 border-mossgreen rounded-xl' loading='lazy' src="\Sheo_9_GreySlipOns.jpeg" alt="Tan scuffs"></img>
            </div>
            <div className='m-10 text-center md:text-left text-2xl sm:text-4xl mt-10'>
                <p className=''>
                Wessex Footwear Ltd. is a footwear manufacturer based in the West Country specialising in the construction 
                of both moccasin and turn slippers and shoes.</p> 
                <br/>
                <p className="text-xl sm:text-3xl">
                Established in May 2000 with a workforce who have been involed in the industry over the past 32 years in both
                manufacturing and sourcing. 
                Wessex Footwear Ltd. and their team have years of experience dealing with multiple retailers throught the uk 
                and together with wholesalers, mail order houses and major distributers.</p>
            </div>
         </div>        
    )
}