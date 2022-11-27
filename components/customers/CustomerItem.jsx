import Image from "next/image";
import React from "react";

const CustomerItem = () => {
 
  return (
    <div className="mt-5 mx-4 xs:text-center ">
      <div className="p-6 bg-primary text-white rounded-[5px]">
      <span className="text-lg font-semibold">Iman</span>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
          suscipit minus cupiditate consequuntur neque libero doloribus alias
          impedit repudiandae, tempora qui placeat ipsum exercitationem vero
          labore! In voluptatem praesentium quibusdam.
        </p>
     
      <div>
       
       
      </div>
      </div>
      <div className="relative w-28 before:rounded-md h-28  mt-8 before:content-[' '] before:absolute before:top-0  before:bg-primary before:w-5 before:h-5 flex justify-center before:-translate-y-3 before:rotate-45 ">
        <Image alt="" src="/images/user.png" layout="fill" objectFit="contain" className="rounded-full  border-2 border-primary "/>
      </div>
    </div>
  );
};

export default CustomerItem;
