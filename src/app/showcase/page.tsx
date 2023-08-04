import Image from 'next/image'

const staticProducts = [
    {
        id: 1,
        //name: 'Slippery Slipper',
        href: '#',
        //price: '£15',
        //desc: '3 sizes available',
        imageSrc: '/WhatsApp_Image_2023-07-18_at_12.42.40_2.jpeg',
        imageAlt: 'The slippery slipper'
    },
    {
        id: 2,
        //name: 'Non-slip slipper',
        href: '#',
        //price: '£20',
        //desc: '4 sizes available',
        imageSrc: '/WhatsApp_Image_2023-07-18_at_12.42.39_1.jpeg',
        imageAlt: 'The non slip slipper',
    },
    {
        id: 9,
        //name: 'Shrew',
        href: '#',
        //price: '£10',
        //desc: '1 sizes available',
        imageSrc: '/WhatsApp_Image_2023-07-18_at_12.42.39.jpeg',
        imageAlt: 'Found in dirt'
    },
    {
        id: 4,
        //name: 'Slipper-ies Slipper',
        href: '#',
        //price: '£150',
        //desc: '3 sizes available',
        imageSrc: '/WhatsApp_Image_2023-07-18_at_12.42.40_1.jpeg',
        imageAlt: 'The slippery slipper'
    },
    {
        id: 5,
        //name: 'Sheo?',
        href: '#',
        //price: '£20',
        //desc: '3 sizes available',
        imageSrc: '/WhatsApp_Image_2023-07-18_at_12.42.40_2.jpeg',
        imageAlt: 'The non slip slipper'
    },
    {
        id: 6,
        //name: 'Sheo',
        href: '#',
        //price: '£1',
        //desc: '1 sizes available',
        imageSrc: '/WhatsApp_Image_2023-07-18_at_12.42.40_3.jpeg',
        imageAlt: 'Found in dumpster'
    },
]


export default function Showcase() {
    return (
        <div className="mt-20 ">
            <h1 className="justify-between items-center text-5xl lg:text-6xl sm:mt-24 mb-1 ml-1 font-bold px-2 sm:px-8 pb-2">Showcase<span className='ml-3 font-bold text-mossgreen '>-</span></h1>
            <h1 className="justify-between items-center text-1xl sm:text-2xl ml-1 px-2 sm:px-8 pb-2">Look through a selection of what we offer. Please contact for more info on each.</h1>
            <div className="max-w-2xl mx-auto py-10 lg:max-w-7xl">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
                  {staticProducts.map((Products) => (
                    <a key={Products.id} href={Products.href} className="group shadow border-8 border-peach rounded-xl">
                        <div className="bg-gray-200 ">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                                <Image className="w-full aspect-w-1 "
                                    src={Products.imageSrc}
                                    alt={Products.imageAlt}
                                    width={500}
                                    height={500}
                                />
                            </div>   
                        </div>
                    </a>
                ))}
                </div>
            </div>
            <div className='sm:justify-between justify-center flex items-center bg-gray-300 text-2xl font-medium px-10 pb-2 border bottom-0 w-full'>
                <a href="#" className="top btn2 mt-2 text-xl bg-mossgreen border-2 border-gray-700">Go back to the top <span className='ml-2 font-bold text-green-900 '>^</span></a>
            </div>
        </div>             
    )
}