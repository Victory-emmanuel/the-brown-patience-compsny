import { Link } from "react-router-dom";

const MyStory = () => {
  return (
    <>
      <div id="my-story" aria-labelledby="my-story-heading">
        <section className="bg-extraClr dark:bg-[rgba(0,0,0,0.61)] xx:px-6 xs:px-6 px-12">
          <div className="gap-8 items-center py-24 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            {/* Heading for mobile */}
            <h4
              id="my-story-heading"
              style={{
                paddingBottom: "1rem",
              }}
              className="ss:mb-24 xs:mb-12 xx:mb-12 text-secondary xs:inline-block xx:inline-block ss:hidden dark:text-primary border-b-4 border-solid border-b-secondary dark:border-b-primary font-light"
            >
              My Story
            </h4>

            {/* Image section */}
            <div className="m-auto py-6 grid place-content-center">
              <img
                className="justify-self-start lg:mr-12 md:mr-0"
                src="https://i.postimg.cc/dQpzFDWb/20240511-231906.jpg"
                alt="Brown Patience"
                style={{
                  borderRadius: "10px",
                  boxShadow: " -8px 7px 31px 8px rgba(0,0,0,0.51)",
                }}
              />
            </div>

            {/* Story content */}
            <div className="mt-4 md:mt-0 text-center">
              {/* Heading for desktop */}
              <h4
                style={{
                  paddingBottom: "1rem",
                }}
                className="ss:my-12 xs:mb-12 text-secondary xs:hidden xx:hidden ss:inline-block dark:text-primary ss:text-secondary border-b-4 border-solid border-b-secondary dark:border-b-primary font-light"
              >
                My Story
              </h4>

              <h2 className="mb-12 xx:my-12 ss:text-4xl ss:text-center xx:text-2xl xx:text-left tracking-tight font-extrabold text-accent dark:text-white">
                Meet Brown Patience
              </h2>

              <p className="mb-6 font-light xx:text-left text-secondary xs:text-base md:text-lg dark:text-primary">
                As a teen, I wrote for fun. I wrote to relieve boredom. I could
                be sitting in a place and mentally remove myself from there by
                scribbling a letter to an imaginary cousin in Vienna. Nevermind
                that I had no idea if Vienna was actually a place. Writing was
                how I went to places I wished I could be.
              </p>
              <p className="mt-4 font-light xx:text-left text-secondary xs:text-base md:text-lg dark:text-primary">
                As soon as the English Language teacher said, “Write a letter to
                your uncle in London,” it was my lucky day! All these should
                have told me writing was the path for me, but I couldn't have
                known. I said I'd be a banker when I grew up; I set my mind on
                pursuing accounting in college. And that's precisely what I did.
                Yet purpose can and will find you.
              </p>

              <div className="xx:grid xx:place-content-start mt-6">
                <Link
                  to="/about"
                  title="Learn more about Brown Patience's story"
                  aria-label="Learn more about Brown Patience's story"
                >
                  <div className="btn-two-container">
                    <button className="text-xl font-extrabold btn-two mt-3 w-[9.375rem] h-[3.125rem]">
                      KNOW MORE
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MyStory;
