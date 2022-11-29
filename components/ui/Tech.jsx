import Title from "./Title";
import { DiReact, DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";
import {TbBrandNextjs ,TbBrandTailwind} from "react-icons/tb"
import Slider from "react-slick";
import { SiFirebase } from "react-icons/si";

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
  };
  return (
    <div className="  mb-12 mt-12 container mx-auto p-4 scrollbar gap   bg-primary text-white rounded">
      <Title addClass="text-[30px]  text-center">
        {" "}
        Istifade etdiyimiz Texnologiyalar
      </Title>
      <div className=" ">
        <Slider {...settings}>
          <div className="bg-primary w-1/4  rounded-md py-5 gap-3 px-[15px ] flex text-center">
            <div className=" flex p-4 mx-8 ">
              {" "}
              <span className="text-white text-md font-bold relative ">
                <DiReact size={70} />
                <p className="absolute bottom_-_10 left-2">React</p>
              </span>
            </div>
          </div>

          <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
            <div className=" flex p-4 mx-8 ">
              <span className="text-white text-md font-bold relative ">
                <DiJavascript1 size={70} />
                <p className="absolute bottom_-_10 left-2">Javascript</p>
              </span>
            </div>
          </div>
          <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className="text-white text-md font-bold relative ">
          <DiHtml5  size={70} />
          <p className="absolute bottom_-_10 left-2">HTML</p>

        </span>

      </div>
    </div>
    <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className="text-white text-md font-bold relative ">
          <DiCss3  size={70} />
          <p className="absolute bottom_-_10 left-2 ">CSS</p>

        </span>

      </div>
    </div>
    <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className="text-white text-md font-bold relative ">
          <SiFirebase  size={70} />
          <p className="absolute bottom_-_10 left-2">Firebase</p>

        </span>

      </div>
    </div>
    <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className="text-white text-md font-bold relative ">
          <TbBrandNextjs  size={70} />
          <p className="absolute bottom_-_10 left-2">NextJs</p>

        </span>

      </div>
    </div>
    <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className="text-white text-md font-bold relative ">
          <TbBrandTailwind  size={70} />
          <p className="absolute bottom_-_10 left-2">TailwindCss</p>

        </span>

      </div>
    </div>
    <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className="text-white text-md font-bold relative ">
          <SiFirebase  size={70} />
          <p className="absolute bottom_-_10 left-2">Firebase</p>

        </span>

      </div>
    </div>
    <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className="text-white text-md font-bold relative ">
          <SiFirebase  size={70} />
          <p className="absolute bottom_-_10 left-2">Firebase</p>

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
