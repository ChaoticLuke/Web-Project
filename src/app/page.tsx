import Image from 'next/image'
 
export default function Home() {
  return (
    <div>
      <div>
        <Image src="Wave.svg" alt="wave" width={1920} height={1080}/>
      </div>
      <div className="boxedback border-8 right-1 border-green-700 m-5">
        <Image className="flex justify-end right-1 " src="swoopy_1.svg" alt="wave" width={500} height={1080}/>
      </div>
     </div> 
  )
}
