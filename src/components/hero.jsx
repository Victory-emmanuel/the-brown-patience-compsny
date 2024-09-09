import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section id="hero" aria-labelledby="hero-heading">
        <div className="lg:pb-32 xs:pb-12 ss:pb-16 ss:px-0 lg:px-12 bg-extraClr dark:bg-secondary">
          <div className="m-auto px-6 xx:pt-8 pt-24 ss:py-12 md:px-12 lg:pt-[4.8rem] lg:px-7">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center gap-12 px-2 md:px-0">
              {/* Image section */}
              <div className="col-span-1">
                <div className="relative w-full">
                  <img
                    src="https://i.postimg.cc/YSMKgSpT/untitled-1082-01-jpeg.jpg"
                    alt="Miss Brown Patience "
                    loading="lazy"
                    style={{
                      borderRadius: "10px",
                      boxShadow: "-12px 7px 31px 8px rgba(0,0,0,0.45)",
                    }}
                    className="sm:m-auto ss:m-auto"
                  />
                </div>
              </div>

              {/* Text section */}
              <div
                className="lg:text-left xx:mt-8 xs:mt-6 sm:text-center sm:mt-12 place-self-center lg:col-span-1"
                role="region"
                aria-labelledby="hero-heading"
              >
                <h1
                  id="hero-heading"
                  className="max-w-2xl sm:leading-[1.3] mb-8 font-extrabold tracking-tight ss:text-3xl xx:text-2xl sm:text-5xl dark:text-white"
                >
                  Get the help you need to write your book, to share your
                  message — clearly, compellingly.
                </h1>
                {/* Message button */}
                <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
                  <button
                    className="btn-one ss:mt-6 inline-flex items-center xx:mb-6 justify-center xx:px-5 xx:py-3 xx:mr-0 px-6 py-4 mr-3 xs:text-sm xx:text-xs text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                    aria-label="Message me on WhatsApp"
                  >
                    MESSAGE ME
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
