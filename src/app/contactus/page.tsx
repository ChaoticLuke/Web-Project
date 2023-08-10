import Image from 'next/image'

//Contact us page, using a google maps API.
export default function Contactus() {
    return (
        <div>
          <h1 className="justify-between text-center md:text-left text-3xl md:text-6xl mt-20 md:mt-28 mb-1 font-bold md:ml-10 md:px-8">Contact us<span className='ml-3 font-bold text-mossgreen '> -</span></h1>     
          <div className='google-map'>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d625.6760995511692!2d-2.8742742050425307!3d51.150801998800844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1689070444942!5m2!1sen!2suk" 
              className="md:mr-8 mx-auto 2xl:mr-20 border-8 shadow-lg rounded-xl border-peach mt-10 w-10/12 md:mt-0 h-96 md:fixed md:right-0 md:w-5/12 md:h-2/4 2xl:w-2/5 2xl:h-3/4"  
              loading="lazy" >
            </iframe>            
          </div>    

          <span className="inline-flex items-center mt-10 ml-5 sm:ml-10">
            <Image className='snap-center snap-right float-left sm:float-right rounded-full ml-3 sm:ml-10 w-7 sm:w-10 h-7 sm:h-10' src="Contact_Email_Icon.svg" alt="dash2" width={0} height={0}/>
            <p className="justify-between text-xl lg:text-3xl font-normal ml-2 sm:ml-5">wessexfootwear@btinternet.com</p>
          </span>
          <div>
            <span className="inline-flex items-center mt-8 absolute ml-5 sm:ml-10">
              <Image className='flex snap-center snap-right float-right rounded-full ml-2 sm:ml-10 ml-3  w-7 sm:w-10 h-7 sm:h-10' src="Contact_Phone_Icon.svg" alt="dash2" width={0} height={0}/>
              <span className="flex justify-between items-center text-xl lg:text-3xl font-normal ml-2 sm:ml-5">+44 1278 723495</span>
            </span>
          </div>
           <Image className='absolute bottom-0 w-10/12 h-10/12 xl:w-3/5 xl:h-3/5' src="Wave_contact.svg" alt="dash2" width={0} height={0}/>
         </div>             
    )
}