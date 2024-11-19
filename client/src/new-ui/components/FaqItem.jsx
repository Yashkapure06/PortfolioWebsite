import clsx from "clsx";
import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import Button from "./Button";

const FaqItem = ({ item, index }) => {
  return (
    <div className="relative z-2 mb-24">
      <div className="group relative flex cursor-pointer items-center justify-between gap-10 px-7">
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
            {index < 10 ? "0" : ""}
            {index}
          </div>
          <div
            className={clsx(
              "h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center max-lg:text-p1"
            )}
          >
            {item.title}
          </div>
          {/* image */}
          <img
            src={item.image}
            alt="arrow"
            className={clsx(
              " transform transition-transform duration-500 rounded-xl object-contain "
            )}
          />
        </div>
      </div>

      {/* <SlideDown> */}
      <div className="body-3 px-7 py-3.5">{item.description}</div>
      {/* </SlideDown> */}
      <div className="flex items-center justify-between px-7 py-3.5 ">
        <LinkScroll to="contact" offset={-100} spy smooth>
          <Button
            onClick={() => window.open(item.visit, "_blank")}
            icon="/new-ui/images/zap.svg"
          >
            Visit&nbsp;&nbsp;Now
          </Button>
        </LinkScroll>
      </div>
      <div className="flex mt-4  flex-wrap gap-2">
        {item.tags.map((tag, idx) => (
          <span
            key={idx}
            className={clsx(
              "ml-5 px-4 py-1 text-sm font-medium rounded-full text-white border-s3 bg-s2 transition-borderColor duration-500 "
              // Cycles through the tagColors array
            )}
          >
            {tag}
          </span>
        ))}
      </div>
      <div
        className={clsx(
          "g5 -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl opacity-0 transition-opacity duration-500 absolute opacity-100"
        )}
      >
        <div className="g4 absolute inset-0.5 -z-1 rounded-3xl" />
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-p1" />
      </div>
    </div>
  );
};
export default FaqItem;
