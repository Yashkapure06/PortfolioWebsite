import { Element } from "react-scroll";
import { links, logos } from "../constants/index.jsx";
import { Marker } from "../components/Marker.jsx";
import Button from "../components/Button.jsx";
import { Link } from "react-scroll";

const Download = () => {
  return (
    <section>
      <Element
        name="major project"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex256 max-md:flex-100">
              <div className="mb-10">
                <h1 className="prata-regular inline-block rounded-lg mr-16 py-1 text-5xl font-extrabold text-blue ">
                  OIAS
                </h1>
              </div>

              <p className="body-1 mb-10 max-w-md">
                Online Interview Assessment System for Students and
                Professionals.
              </p>
              <span className=" mb-4 pb-3">
                Do you want to learn more about this <strong>PRODUCT?</strong>
              </span>

              <ul className="mt-5 flex flex-wrap items-center gap-6">
                {links.map(({ id, url, icon }) => (
                  <>
                    <Link to="contact" offset={-100} spy smooth>
                      <Button
                        icon="/new-ui/images/zap.svg"
                        onClick={() => {
                          window.open(
                            "https://calendly.com/yashkapure06/book-a-call-at-the-earliest?month=2024-10",
                            "_blank"
                          );
                        }}
                      >
                        Book&nbsp;a&nbsp;Free&nbsp;Call
                      </Button>
                    </Link>
                    <li
                      key={id}
                      className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                    >
                      <a
                        href="https://calendly.com/yashkapure06/book-a-call-at-the-earliest?month=2024-10"
                        target="_blank"
                        className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500 max-md:hidden"
                      >
                        <span className="absolute -top-2 rotate-90">
                          <Marker />
                        </span>
                        <img
                          src={"/new-ui/images/lines.svg"}
                          alt="lines"
                          className="absolute size-13/20 object-contain"
                        />

                        <span className="download_tech-icon">{icon}</span>
                        {/* shwo image  having path: /new-ui/images/detail-4.png */}
                        {/* <img
                        src={"/new-ui/images/detail-2.png"}
                        alt="icon"
                        className="absolute  object-contain"
                      /> */}
                      </a>
                    </li>
                  </>
                ))}
              </ul>
            </div>

            <div className="mb-10 max-md:hidden">
              <div className="download_preview-before download_preview-after rounded-40 relative w-[955px] border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />

                  <img
                    src="/images/final-year.png"
                    width={855}
                    height={655}
                    alt="screen"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Download;
