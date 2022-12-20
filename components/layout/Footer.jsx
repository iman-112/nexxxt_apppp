
import Title from "../ui/Title";

import Logo from "../ui/Logo";
import Link from "next/link";




const Footer = () => {

  return (
    <div className="bg-primary text-md text-[#ccc]">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6 ">
          <div className="md:flex-1">
            <Title addClass="text-[28px]">Bizimlə əlaqə </Title>
            <div className="flex flex-col gap-y-2 mt-4">
            
              <div className="mb-2">
                <i className="fa fa-phone"></i>
                <span className="inline-block ml-2">Tel: +994514334365</span>
              </div>
              <div>
                <i className="fa fa-envelope"></i>
                <span className="inline-block ml-2">iman.xelilov112@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[28px] ">
              <span className="text-hover">Cans</span>
              <span>Web</span>
               </Title>
            <p className="mt-3">
              Rəqəmsal Marketinqi sınayın , əhəmiyyətli nəticələr əldə edin.
            </p>
           
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[28px]">Qısayollar</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <span className="inline-block ml-2"><Link href="/"> Giriş səhifəsi </Link></span>
              </div>
              <div>
                <span className="inline-block ml-2"><Link href="/xidmetler"> Xidmətlər </Link></span>
              </div>
              <div>
                <span className="inline-block ml-2"><Link href="/haqqimizda"> Haqqımızda </Link></span>
              </div>
              <div>
                <span className="inline-block ml-2"><Link href="/elaqe"> Müraciət et</Link></span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-[12px] mt-10">
          © 2022 All Riights Reserved By CansWeb
        </p>
      </div>
    </div>
  );
};

export default Footer;