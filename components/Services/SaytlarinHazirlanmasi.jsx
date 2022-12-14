import Link from 'next/link';
import React from 'react'

import Title from "../../components/ui/Title";
const SaytlarinHazirlanmasi = () => {
  return (
  
        <div className="h-full w-full">
          <div className="container mx-auto text-center">
            <Title addClass="p-4 text-[35px] text-primary ">
              Web Saytlarin hazirlanmasi{" "}
            </Title>
    
            <div>
              <ul>
                <li>
                  <p className="text-[15px] ">
                    <span className="underline text-[16px] font-bold text-primary">
                      CansWeb
                    </span>{" "}
                    , peşəkar müəssisələr üçün münasib qiymətlərlə korporativ və
                    dinamik dizayn ilə veb saytların yığılması xidmətini həyata
                    keçirən rəqəmsal bir agentlikdir. CansWeb, rəqəmsal dünyada
                    yerini tutaraq keyfiyyətli veb saytların yığılması xidmətini
                    istifadəçilərinə münasib qiymətə çatdıraraq uzun müddətli iş
                    proseslərini qurmağı hədəfləyən bir veb agentliyidir.  Tək səhifəli veb saytlardan
                    başlayaraq fərqli paket seçimləri ilə CansWeb hər kəs üçün bir
                    veb sayt seçimi təqdim edir.{" "}
                  </p>
                </li>
    
                <li>
                  <Title addClass="text-[20px] text-primary p-4">
                    {" "}
                    Paketlər aşağıdadır.
                  </Title>
                </li>
              </ul>
            </div>
            <div
              className="mt-8 grid md:grid-cols-3
            sm:grid-cols-2 grid-cols-1 gap-4 p-4 "
            >
              <div className="bg-primary rounded-3xl h-max hover:scale-100 cursor-pointer shadow_class transition-all">
                <div className="px-6 py-3 text-white text-start">
                  <h4 className="text-xl font-semibold pb-4 text-center">
                    
                    Kiçik Biznes Paketi
                  </h4>
                  <p className="text-[14px]">
                  Şəxsi bloq , biznesin tanıtımı  üçün nəzərdə tutulub.
                    
                  </p>
                  <div className="flex  flex-col p-4 ">
                    <ul className="list-disc ">
                      <li className="mb-2">SSL sertifikat</li>
                      <li className="mb-2">Korporativ email: 1 ədəd</li>
                      <li className="mb-2"> Dil seçimi: 1 dildə</li>
    
                     
    
                      <li className="mb-2"> Hosting:  6ay  (50 GB SSD Saxlama)</li>
                    </ul>
                    <span className="text-sm my-2 italic text-center font-bold ">
                      Müddət 2-4 gün
                    </span>
                    <span className="text-sm my-2 text-center font-bold ">
                      300 AZN - 600 AZN
                    </span>
                    <button className='btn-primary m-2 '>
                        <Link href="https://wa.link/he31ax" target="_blank" >
                        Sifariş
                        </Link>  </button>
                  </div>
                </div>
              </div>
              <div className="bg-primary rounded-3xl h-max shadow_class cursor-pointer">
                <div className="px-6 py-3 text-white text-start">
                  <h4 className="text-xl font-semibold pb-4 text-center" >
                    
                    Orta Biznes Paketi
                  </h4>
                  <p className="text-[14px]">
                    
                    E-ticarət  üçün nəzərdə tutulub.
                  </p>
                  <div className="flex  flex-col p-4 ">
                    <ul className="list-disc ">
                      <li className="mb-2">SSL sertifikat</li>
                      <li className="mb-2">Korporativ email: 5 ədəd</li>
                      <li className="mb-2">  Dil seçimi: 1-2 dildə</li>
    
                      <li className="mb-2"> Domain: Tərəfimizdən</li>
                      <li className="mb-2"> Hosting:  12ay
                      (100 GB SSD Saxlama) </li>

                      <li className="mb-2"> Admin Panel: Var</li>
                      <li className="mb-2"> Texniki dəstək: 3 ay</li>
    
    
                      
    
                     
    
                    
                    </ul>
                    <span className="text-sm my-2 italic text-center font-bold ">
                      Müddət 5-10 gün
                    </span>
                    <span className="text-sm my-2 text-center font-bold ">
                      1000 AZN - 1800 AZN
                    </span>
                    <button className='btn-primary m-2 '>
                        <Link href="https://wa.link/j9s8kp" target="_blank" >
                        Sifariş
                        </Link>  </button>
                  </div>
                </div>
                
              </div>
              <div className="bg-primary rounded-3xl h-max shadow_class cursor-pointer">
                <div className="px-6 py-3 text-white text-start">
                  <h4 className="text-xl font-semibold pb-4 text-center ">
                  
                    Böyük Biznes Paketi
                  </h4>
                  <p className="text-[14px]">
                    
                    Böyük layihələr üçün nəzərdə tutulub.
                  </p>
                  <div className="flex  flex-col p-4 ">
                    <ul className="list-disc ">
                      <li className="mb-2">SSL sertifikat</li>
                      <li className="mb-2">Korporativ email: 10 ədəd</li>
                      <li className="mb-2"> Dil seçimi: 2-3 dildə</li>
    
                      <li className="mb-2"> Domain: Tərəfimizdən</li>
                      <li className="mb-2"> Hosting: 12 Ay (200 GB SSD Saxlama)</li>
                      <li className="mb-2"> Admin panel: xüsusi / sıfırdan yığılır</li>
                      
                      <li className="mb-2">  Logo hazırlanması</li>
                      
                      <li className="mb-2"> Texniki dəstək: 12 ay</li>
                    </ul>
                    <span className="text-sm my-2 italic text-center font-bold ">
                      Müddət 15-30 gün
                    </span>
                    <span className="text-sm my-2 text-center font-bold ">
                      2500 AZN - (?) AZN
                    </span>
                    <button className='btn-primary m-2 '>
                        <Link href="https://wa.link/1ub7cy" target="_blank" >
                        Sifariş
                        </Link>  </button>
                  </div>
                </div>
                
              </div>
            </div>
            <li className="list-none">
              <p className="text-[13px] text-gray-600 italic p-4">
                Veb saytların ilkin yığılması mərhələsində sayta bütün lazım olan və
                olmayan məlumatları dəqiqləşdirəcəyik. Bunu etmək üçün nümunə olaraq
                istifadə etdiyiniz saytları təhlil edə bilərik. Bir çox suallara
                cavab verməyə hazır olun, çünki bu cavablar sonradan saytın texniki
                tapşırığı olacaqdır. Texniki tapşırıq bir növ saytın ətraflı təsviri
                kimi də istifadə olunur.
              </p>
            </li>
          </div>
        </div>
 

  )}
export default SaytlarinHazirlanmasi