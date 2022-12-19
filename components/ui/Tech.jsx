import Title from "./Title";
import { DiReact, DiHtml5, DiCss3, DiJavascript1,DiVisualstudio ,DiGitBranch} from "react-icons/di";
import {TbBrandNextjs ,TbBrandTailwind} from "react-icons/tb"
import Slider from "react-slick";
import { SiFirebase ,SiCanva, SiAdobe} from "react-icons/si";
import {FaLaravel} from "react-icons/fa"


const Tech = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2
        }
      }
    ]
  };
  return (
    <div className="  mb-12 mt-12 container mx-auto p-4 scrollbar gap   bg-primary text-white rounded">
      <Title addClass="text-[30px]  text-center">
        {" "}
       İstifadə edilən texnologiyalar
      </Title>
      <div className=" ">
        <Slider {...settings}>
          <div className="bg-primary w-1/4  rounded-md py-5 gap-3 px-[15px ] flex text-center">
            <div className=" flex p-4 mx-8 ">
              {" "}
              <span className="text-white text-md font-bold relative ">
                <DiReact size={70} className="text-hover" />
                <p className="absolute bottom_-_5 left-2">React</p>
              </span>
            </div>
          </div>

          <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
            <div className=" flex p-4 mx-8 ">
              <span className="text-white text-md font-bold relative ">
                <DiJavascript1 size={70} className="text-yellow-500"/>
                <p className="absolute bottom_-_10 left-2">Javascript</p>
              </span>
            </div>
          </div>
          <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className="text-white text-md font-bold relative ">
          <DiHtml5  size={70} className="text-red-500"/>
          <p className="absolute bottom_-_10 left-2">HTML</p>

        </span>

      </div>
    </div>
    <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className="text-white text-md font-bold relative ">
          <DiCss3  size={70} className="text-blue-500"/>
          <p className="absolute bottom_-_10 left-5 ">CSS</p>

        </span>

      </div>
    </div>
    <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className="text-white text-md font-bold relative ">
          <FaLaravel  size={70} className="text-red-800" />
          <p className="absolute bottom_-_10 left-2">Laravel</p>

        </span>

      </div>
    </div>
    <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className="text-white text-md font-bold relative ">
          <TbBrandNextjs  size={70} className="text-black"/>
          <p className="absolute bottom_-_10 left-2">NextJs</p>

        </span>

      </div>
    </div>
    <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className="text-white text-md font-bold relative ">
          <TbBrandTailwind  size={70} className="text-blue-800" />
          <p className="absolute bottom_-_10 left-0">TailwindCss</p>

        </span>

      </div>
    </div>
    <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className="text-white text-md font-bold relative ">
          <SiCanva  size={70} className="text-indigo-500" />
          <p className="absolute bottom_-_10 left-2">Canva</p>

        </span>

      </div>
    </div>
    <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className="text-white text-md font-bold relative ">
          <SiFirebase  size={70} className="text-yellow-300"/>
          <p className="absolute bottom_-_10 left-2">Firebase</p>

        </span>

      </div>
    </div>
    <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className="text-white text-md font-bold relative ">
          <SiAdobe  size={70} className="text-red-600"/>
          <p className="absolute bottom_-_10 left-2">Adobe</p>

        </span>

      </div>
    </div>
    <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className="text-white text-md font-bold relative ">
          <DiVisualstudio  size={70} className="text-sky-300"/>
          <p className="absolute bottom_-_10 left-2">V.S.Code</p>

        </span>

      </div>
    </div>
    <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className="text-white text-md font-bold relative ">
          <DiGitBranch  size={70} className="text-orange-800"/>
          <p className="absolute bottom_-_10 left-5">Git</p>

        </span>

      </div>
    </div>
        </Slider>
      </div>
    </div>
  );
};

// const HtmlItem = () => {
//   return (

//   );
// };
// const CssItem = () => {
//   return (

//   );
// };
// const FireItem = () => {
//   return (
  
//   );
// };

export default Tech;
