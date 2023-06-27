import Image from "next/image" 

export default function Contact() {
    return (
        <div>
            <Image className='flex block mt-24 ml-10 mr-32 float-right' src="PLACEHOLDER.svg" alt="dash2" width={500} height={1000}/>
            <h1 className="flex justify-between items-center text-6xl mt-28 mb-1 ml-8 font-medium px-8 pb-2"> Contact Us - </h1>
            <div>
                <p className="flex justify-between items-center text-4xl  mb-1 ml-8 font-normal px-10 pb-2"> Intrested? Let's talk. </p>
            </div>
            <div>
                <p className="flex justify-between items-center text-3xl mt-20 mb-1 ml-8 font-normal px-10 pb-2"> Buisness Email - Slipper@gmail.com</p>
                <p className="flex justify-between items-center text-3xl mt-10 mb-1 ml-8 font-normal px-10 pb-2"> Phone Number - 328138921382710839712</p>
            </div>
            <Image className='flex fixed bottom-0' src="about_wave.svg" alt="dash2" width={800} height={50}/>
        </div>

    )
}