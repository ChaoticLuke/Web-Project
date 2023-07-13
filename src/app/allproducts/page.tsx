

const staticProducts = [
    {
        id: 1,
        name: 'Slippery Slipper',
        href: '#',
        price: '£15',
        desc: '3 sizes available',
        imageSrc: '/slipper_one.jpeg',
        imageAlt: 'The slippery slipper'
    },
    {
        id: 2,
        name: 'Non stick slipper',
        href: '#',
        price: '£20',
        desc: '4 sizes available',
        imageSrc: '/slipper_one.jpeg',
        imageAlt: 'The non slip slipper'
    },
    {
        id: 3,
        name: 'Sheo',
        href: '#',
        price: '£1',
        desc: '1 sizes available',
        imageSrc: '/slipper_one.jpeg',
        imageAlt: 'Found in dumpster'
    },
    {
        id: 4,
        name: 'The forth one',
        href: '#',
        price: '£4',
        desc: '4 sizes available',
        imageSrc: '/slipper_one.jpeg',
        imageAlt: 'The slippery slipper'
    },
    {
        id: 5,
        name: 'Crazy? I was cry once',
        href: '#',
        price: 'They locked me in a',
        desc: 'room, a rubber room',
        imageSrc: '/slipper_one.jpeg',
        imageAlt: 'The non slip slipper'
    },
    {
        id: 6,
        name: 'Shrew',
        href: '#',
        price: '£10',
        desc: '1 sizes available',
        imageSrc: '/the.jpeg',
        imageAlt: 'Found in dirt'
    },
]


export default function Allproducts() {
    return (
        <div className="mt-20 ">
            <h1 className="justify-between items-center text-6xl mt-24 mb-1 ml-1 font-bold px-8 pb-2">All products <span className='ml-3 font-bold text-green-700 '>-</span></h1>
            <div className="max-w-2xl mx-auto py-16 px-16 lg:max-w-7xl">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-6 border">
                  {staticProducts.map((Products) => (
                    <a key={Products.id} href={Products.href} className="group">
                        <div className="bg-gray-300 ">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                                <img className="w-full aspect-w-1 "
                                    src={Products.imageSrc}
                                    alt={Products.imageAlt}
                                />
                            </div>   
                            <div className="pl-5 px-3">
                                <h1>{Products.name} <span>{Products.price}</span></h1>
                                <p className="opacity-80 flex">{Products.desc}</p>
                            </div>
                        </div>
                    </a>
                ))}
                </div>
            </div>
        </div>             
    )
}