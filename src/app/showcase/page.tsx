import Image from 'next/image'

// Static dictionary of products that can be added to. More can easily be added, since the images are still inside the project.
const staticProducts = [
    {
        id: 1,
        href: '#',
        imageSrc: '/Sheo_11_ManAtSheos.jpeg',
        imageAlt: 'Slipper with 3 diffrent colours, dark blue, grey and scarlett'
    },
    {
        id: 2,
        href: '#',
        imageSrc: '/Sheo_2_Velcro.jpeg',
        imageAlt: 'A pair of small slipper, brown with velcro',
    },
    {
        id: 3,
        href: '#',
        imageSrc: '/Sheo_10_SortaSlipOns.jpeg',
        imageAlt: 'A pair of brown slipper, with fluff cuff'
    },
    {
        id: 4,
        href: '#',
        imageSrc: '/Sheo_4_PlasticStringed.jpeg',
        imageAlt: 'A beige pair of slippers, with a sheo lace'
    },
    {
        id: 5,
        href: '#',
        imageSrc: '/Sheo_5_BlackSlipOns.jpeg',
        imageAlt: 'A pair of black slippers'
    },
    {
        id: 6,
        href: '#',
        imageSrc: '/Sheo_6_SmallStringed.jpeg',
        imageAlt: 'A pair of baby slippers, with a sheo lace'
    },
    {
        id: 7,
        href: '#',
        imageSrc: '/Sheo_7_FluffContained.jpeg',
        imageAlt: 'A pair of high-top slippers, with a black cuff'
    },
    {
        id: 8,
        href: '#',
        imageSrc: '/Sheo_8_BrownSlipOns.jpeg',
        imageAlt: 'A pair of brown slippers'
    },

]
//Showcase page
export default function Showcase() {
    return (
        <div className="mt-20">
            <h1 className="justify-between text-center md:text-left text-3xl md:text-6xl mt-10 md:mt-28 mb-1 font-bold ml-0 md:ml-10 md:px-8">Showcase<span className='ml-3 font-bold text-mossgreen '>-</span></h1>     
            <h1 className="justify-between mx-auto text-center md:text-left text-1xl sm:text-2xl ml-0 md:ml-10 mt-2 px-5 sm:px-8 pb-2 flex md:mr-5">Look through a selection of what we offer. Please contact for more products and infomation.</h1>
            <div className="mx-auto py-10 max-w-screen-2xl">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-4 lg:gap-x-8 mx-3 md:mx-10">
                {/* Every entry to the library gets looped with staticProducts.map. */}
                  {staticProducts.map((Products) => (
                    <a key={Products.id} className="group shadow-lg border-4 md:border-8 border-mossgreen rounded-xl">
                        <div className="bg-gray-200">
                            <div className="aspect-w-1 overflow-hidden bg-mossgreen">
                                <Image loading='lazy' className="w-full aspect-w-1 rounded-md"
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
            <div className='sm:justify-between justify-center flex items-center bottomnav border-gray-200 text-2xl font-medium px-10 pb-2 border-t-2 border-r-0 border-l-0 border-b-0 bottom-0 w-full'>
                <a href="#" className="top rounded-full font-bold py-1 px-4 cursor-pointer shadow-2xl mt-2 text-xl bg-mossgreen hover:bg-lmossgreen hover:text-light border-2 border-gray-700 shadow-sl">Go back to the top <span className='ml-2 font-bold text-green-900 '>^</span></a>
            </div>
        </div>             
    )
}