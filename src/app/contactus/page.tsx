import Image from 'next/image'

export default function Contactus() {
    return (
        <div>
            <div className='google-map mapname'>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d625.6760995511692!2d-2.8742742050425307!3d51.150801998800844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1689070444942!5m2!1sen!2suk" 
              width="600" 
              height="450" 
              className="flex mt-30 ml-8 mr-32 float-right font-bold border-8 rounded-xl border-peach"  
              loading="lazy" >
              </iframe>            
            </div>
            <div className='ml-10'>
              <h1 className="justify-between items-center text-5xl sm:text-4xl mt-28 mb-1 ml-1 font-bold px-8 pb-32">Contact<span className='ml-3 font-bold text-mossgreen '>-</span></h1>
              <p className="justify-between items-center text-4xl sm:text-2xl mb-1 font-normal px-10 pb-2">Interested?<span className='ml-3 font-medium '>Lets talk.</span></p>
              <div>
                <span className="inline-flex items-center mt-10">
                    <Image className='snap-center snap-right float-right rounded-full ml-3 sm:ml-10 w-7 sm:w-10 h-7 sm:h-10' src="email_icon.svg" alt="dash2" width={0} height={0}/>
                    <span className="justify-between text-xl sm:text-3xl font-normal ml-5">wessexfootwear@btinternet.com</span>
                </span>
              </div>
              <div>
                <span className="inline-flex items-center mt-8">
                    <Image className='flex snap-center snap-right float-right rounded-full ml-10 ' src="phone_icon.svg" alt="dash2" width={40} height={40}/>
                    <span className="flex justify-between items-center text-3xl font-normal ml-5">+44 1278 723495</span>
                </span>
               </div>
             </div>
           <Image className='bottom-full sm:w-60 sm:h-60' src="about_wave.svg" alt="dash2" width={0} height={0}/>
         </div>             
    )
}