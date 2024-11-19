import { Element } from "react-scroll";

import { details, features } from "../constants/index.jsx";
import Button from "../components/Button.jsx";
import { useState } from "react";

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(
    features.find((feature) => feature.id === "1")
  );
  return (
    <section>
      <Element name="experience">
        <div className="container">
          {/* add text Experience with h4 heading and class as caption */}
          <h3
            className=" text-4xl
          font-bold
          text-center
          uppercase
          mb-10

          "
          >
            Experience
          </h3>

          <div className="relative  border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            <ul className="relative flex max-md:hidden justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl ">
              <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />

              {details.map(({ id, icon, title }) => (
                <li key={id} className="relative pt-16 px-4 pb-14">
                  <div className="absolute top-8 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />

                  <div className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20">
                    <img
                      src={icon}
                      alt={title}
                      className="size-17/20 object-contain z-20"
                    />
                  </div>

                  <h3 className="relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase">
                    {title}
                  </h3>
                </li>
              ))}
            </ul>

            {features.map(
              ({
                id,
                icon,
                caption,
                title,
                text,
                button,
                companyName,
                duration,
              }) => (
                <div
                  key={id}
                  className="relative z-2 md:px-10 px-5 lg:m-0 sm:m-5 m-5 xs:m-5 md:pb-10 pb-5   max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320 sm:max-md:flex-1 max-md:gap-3"
                >
                  <div className="w-full flex flex-1">
                    <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
                      <div className="dot2" />
                      <div className="w-0.5 h-16 bg-s3" />

                      <img
                        src={icon}
                        className="size-28 object-contain"
                        alt={title}
                      />
                    </div>
                  </div>

                  <p className="caption mb-5 max-md:mb-6">{caption}</p>
                  <h2 className=" mb-7 h3 text-p4 max-md:mb-6 max-md:h3">
                    {companyName}
                  </h2>
                  <p className=" mb-5 max-md:mb-6">{duration}</p>
                  <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">
                    {text}
                  </p>
                  {/* <Button icon={button.icon}>{button.title}</Button> */}
                </div>
              )
            )}
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Features;
