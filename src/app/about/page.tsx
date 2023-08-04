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
                    <p>Wessex Footwear Ltd. is a footwear manufacturer based in the West Country specialising in the construction of 
                        both moccasin and turn slippers and shoes. 
                    <br></br>
                    Established in May 2000 with a workforce who have been involed in the industry over the past 32 years in both
                        manufacturing and sourcing. 
                    Wessex Footwear Ltd. and their team have years of experience dealing with multiple retailers throught the uk 
                        and together with wholesalers, mail order houses and major distributers </p> 
                </span>
            </div>
         </div>        
    )
}