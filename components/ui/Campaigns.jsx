import Image from "next/image"
import Title from "../ui/Title";


const CampaignItem = () =>{
return (
 <div className="bg-primary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4">
   <div className=" relative md:w-44 md:h-44 w-36   h-36   after:content-[' ' ] border-hover border-[5px] rounded-full overflow-hidden">
  <Image alt=" " src="/images/3.jpg" layout="fill" objectFit="cover" className="hover:scale-105 transition-all " />

  </div>
  <div className="text-white ">
    <Title addClass="text-2xl" >Web də  </Title>
    <div className="font-mono my-1">
      <span className="text-[40px] ">20% </span>
      <span className="text-sm inline-block ml-1">Endirim</span>

    </div>
    <button className="btn-primary flex items-center gap-x-2">İndi  Əlaqə 
    </button>
  </div>



  </div>



)


}

const Campaigns = () => {
  return (
    <div className="flex justify-between container mx-auto py-20 gap-6 flex-wrap">
        <CampaignItem />
        <CampaignItem />
    </div>
  )
}

export default Campaigns