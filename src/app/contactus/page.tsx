import Image from 'next/image'

export default function Contactus() {
    return (
        <div className="sans">
            <Image className='flex mt-30 ml-8 mr-32 float-right font-bold' src="PLACEHOLDER.svg" alt="dash2" width={500} height={1000}/>
            <div className='ml-10'>
              <h1 className="justify-between items-center text-6xl mt-28 mb-1 ml-1 font-bold px-8 pb-2">Contact<span className='ml-3 font-bold text-green-700 '>-</span></h1>
              <p className="justify-between items-center text-4xl  mb-1 font-normal px-10 pb-2">Interested?<span className='ml-3 font-medium '>Let&apos;s talk.</span></p>
              <div>
                <span className="inline-flex items-center mt-10">
                    <Image className='snap-center snap-right float-right rounded-full ml-10 ' src="email_icon.svg" alt="dash2" width={40} height={40}/>
                    <span className="justify-between text-3xl font-normal ml-5">wessexfootwear@btinternet.com</span>
                </span>
              </div>
              <div>
                <span className="inline-flex items-center mt-8">
                    <Image className='flex snap-center snap-right float-right rounded-full ml-10 ' src="phone_icon.svg" alt="dash2" width={40} height={40}/>
                    <span className="flex justify-between items-center text-3xl font-normal ml-5"> +44 01278723495</span>
                </span>
               </div>
             </div>
           <Image className='object-contain' src="about_wave.svg" alt="dash2" width={800} height={50}/>
         </div>             
    )
}