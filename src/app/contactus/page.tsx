import Image from 'next/image'

export default function Contactus() {
    return (
        <div>
            <div className='google-map mapname '>
              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d625.6760995511692!2d-2.8742742050425307!3d51.150801998800844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1689070444942!5m2!1sen!2suk" 
              className="flex m-10 mt-30  border-8 rounded-xl border-peach fixed mb-5 bottom-0 md:top-24 md:right-0 h-2/5 w-4/5 md:w-3/5 md:h-3/5"  
              loading="lazy" >
              </iframe>            
            </div>
            <div className='ml-10'>
              <h1 className="justify-between items-center text-5xl sm:text-4xl mt-28 sm:mt-28 mb-1 ml-1 font-bold px-2 sm:px-8 pb-1 sm:pb-2">Contacts<span className='ml-3 font-bold text-mossgreen '>-</span></h1>             
              <div>
                <span className="inline-flex items-center mt-10">
                    <Image className='snap-center snap-right float-left sm:float-right rounded-full ml-3 sm:ml-10 w-7 sm:w-10 h-7 sm:h-10' src="email_icon.svg" alt="dash2" width={0} height={0}/>
                    <span className="justify-between text-xl sm:text-3xl font-normal ml-5">wessexfootwear@btinternet.com</span>
                </span>
              </div>
              <div>
                <span className="inline-flex items-center mt-8 absolute">
                    <Image className='flex snap-center snap-right float-right rounded-full ml-2 sm:ml-10 ml-3  w-7 sm:w-10 h-7 sm:h-10' src="phone_icon.svg" alt="dash2" width={0} height={0}/>
                    <span className="flex justify-between items-center text-xl sm:text-3xl font-normal ml-5">+44 1278 723495</span>
                </span>
               </div>
             </div>
           <Image className='absolute bottom-0 sm:w-60 sm:h-60' src="about_wave.svg" alt="dash2" width={0} height={0}/>
         </div>             
    )
}