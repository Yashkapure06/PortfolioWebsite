import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 ">
            <div className="caption small-2 uppercase text-p3">
              Front End Developer | Full Stack Developer | Freelance Developer
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Yash&nbsp;&nbsp;&nbsp;Kapure
            </h1>
            <p className=" mb-14 body-1 max-md:mb-10">
              I am a front-end developer with 3 years of proven experience in
              the field. I am skilled in{" "}
              <span className="text-p3">
                Search Engine Optimization, Next.js, React.js, Tailwind CSS,
              </span>{" "}
              and <span className="text-p3">JavaScript</span>. Along with that,
              I have experience in full-stack development using Node.js,
              Express.js, and MongoDB.
            </p>
            <LinkScroll to="contact" offset={-100} spy smooth>
              <Button icon="/new-ui/images/zap.svg">Hire&nbsp;&nbsp;Now</Button>
            </LinkScroll>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <LinkScroll offset={-100} spy smooth>
              <Button
                icon="/new-ui/images/zap.svg"
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1D2gsimV47zEsubjK2urHGWpY_h-iLyBB/view",
                    "_blank"
                  );
                }}
              >
                Download&nbsp;&nbsp;CV
              </Button>
            </LinkScroll>
          </div>

          <div className="    absolute  top-[300px]  translate-x-[-290px]  -translate-y-1/2  -rotate-90  left-[calc(90%-360px)] hidden lg:block  w-[1230px]  pointer-events-none  hero-img_res">
            <img
              src="/new-ui/images/bg-outlines.svg"
              width={960}
              height={380}
              alt="outline"
              className="relative z-2"
            />
            <img
              src="/new-ui/images/bg-outlines-fill.png"
              width={960}
              height={380}
              alt="outline"
              className="absolute inset-0 mix-blend-soft-light opacity-5"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
