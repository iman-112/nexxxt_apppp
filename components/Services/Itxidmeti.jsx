import Link from 'next/link';
import React from 'react'

import Title from "../../components/ui/Title";
const Itxidmeti = () => {
  return (
  
        <div className="h-full w-full">
          <div className="container mx-auto text-center">
            <Title addClass="p-4 text-[35px] text-primary ">
              HardWare Dəstək{" "}
            </Title>
    
            <div>
              <ul>
                <li>
                  <p className="text-[15px] ">
                  Artıq insanların görə bildikləri bəzi işləri kompyuterlərdə öhdəsindən gələ bilir. Bunlar günü gündən yaxşılaşır və insanların işini asanlaşdırır. Ancaq  kompyuterlərdə sıradan çıxa bilər , proqramı köhnələ bilər , yenilənmək məcburiyyətində qala bilər . Sizlərə kompyuterlərinizdə yaranan problemləri aradan qaldırmaq , onları daha da sürətləndirmək və onları daima işlək vəziyyətdə saxlamaq üçün bu xidməti təklif edirik.
                    , 
                    
                    
                    {" "}
                  </p>
                </li>
    
                <li>
                  <Title addClass="text-[20px] text-primary p-4">
                    {" "}
                    <hr />
                  </Title>
                </li>
              </ul>
            </div>
            <div
              className="p-4 "
            >
              
             
              <div className="bg-primary rounded-3xl h-max w-[500px] m-auto shadow_class cursor-pointer">
                <div className="px-6 py-3 text-white text-start">
                  <h4 className="text-xl font-semibold pb-4 text-center ">
                  
                    Böyük Biznes Paketi
                  </h4>
                  <p className="text-[14px]">
                    
                    Yaranan prablemlərin vaxtını təyin etmək olmur. Hər hansı bir işin ortasında  kompyuterdə yaranan problemi aşkar etmək və aradan qaldırmaq üçün 
                  </p>
                  <div className="flex  flex-col p-4 ">
                    <ul className="list-disc ">
                      <li className="mb-2">SSL sertifikat</li>
                      <li className="mb-2">Korporativ email: 10 ədəd</li>
                      <li className="mb-2"> Dil seçimi: 3-4 dildə</li>
    
                      <li className="mb-2"> Dizayn: unikal sıfırdan çekilmiş dizayn Figma proqramında sizə təqdim olunacaq</li>
    
                      <li className="mb-2"> Admin panel: var (xüsusi / sıfırdan yığılır)</li>
                      <li className="mb-2">  Logo hazırlanmas</li>
                      <li className="mb-2"> Texniki SEO işləri</li>
                      <li className="mb-2"> Texniki dəstək: 12 ay</li>
                    </ul>
                    <span className="text-sm my-2 italic text-center font-bold ">
                      Müddət 5-7 gün
                    </span>
                    <span className="text-sm my-2 text-center font-bold ">
                      350 AZN - 650 AZN
                    </span>
                    <button className='btn-primary m-2 '>
                        <Link href="https://api.whatsapp.com/send?phone=994514334365&text=Salam%20.%20" target="_blank" >
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
export default Itxidmeti