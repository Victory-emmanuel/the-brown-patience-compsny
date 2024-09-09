import { Link } from "react-router-dom";

const SubSect = () => {
  return (
    <section id="sub-sect" aria-labelledby="subscription-heading">
      <div className="py-16 xx:pt-0 dark:bg-[#111]">
        <div className="m-auto px-6 text-primary xx:px-0 md:px-12 lg:px-20">
          <div className="justify-center gap-6 text-center md:flex md:text-left lg:items-center lg:gap-16">
            {/* Subscription Package Info */}
            <div
              className="order-last mb-6 rounded-lg shadow-[#343434] bg-accent dark:bg-secondary md:mb-0 md:w-6/12 lg:w-6/12 p-12 xx:px-6"
              role="region"
              aria-labelledby="subscription-heading"
            >
              <div className="mb-6">
                <h2
                  id="subscription-heading"
                  className="font-bold mb-6 xx:text-2xl xs:text-3xl text-primary md:text-5xl dark:text-white"
                >
                  Monthly Subscription Packages
                </h2>
              </div>

              <div className="mt-12 xx:mb-4">
                <ul className="list-disc mt-4">
                  {/* Subscription Option 1 */}
                  <li className="text-xl mb-8 xx:text-lg xx:text-left xs:text-left ss:text-left text-primary">
                    <strong className="pl-2">
                      Guidance for Writing Solopreneurs -
                    </strong>
                    <del className="ml-2">N</del>15,000 / month
                    <div className="p-6 rounded mt-2 ml-6 bg-primary text-sm font-semibold text-secondary">
                      <p className="mt-4">
                        With this package, you get proofreading, editing, and
                        necessary revisions to your Christian content.
                        <Link
                          to="/guidianceForSolopreneur"
                          aria-label="Learn more about Guidance for Writing Solopreneurs"
                        >
                          <i className="font-bold ml-2 text-accent">
                            Learn More
                          </i>
                        </Link>
                      </p>
                    </div>
                  </li>

                  {/* Subscription Option 2 */}
                  <li className="text-xl xx:text-lg mb-4 xx:text-left xs:text-left ss:text-left text-primary">
                    <strong className="pl-2">Coaching For Authors -</strong>
                    <del className="ml-2">N</del>25,000 / month
                    <div className="p-6 rounded mt-2 ml-6 bg-primary text-sm font-semibold text-secondary">
                      <p>
                        The coaching package where I guide you as you author
                        your book, chapter by chapter.
                        <Link
                          to="/coachingForAuthors"
                          aria-label="Learn more about Coaching for Authors"
                        >
                          <i className="font-bold ml-2 text-accent">
                            Learn More
                          </i>
                        </Link>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image Section */}
            <div className="grid md:w-5/12 lg:w-6/12">
              <div className="py-6">
                <img
                  src="https://i.postimg.cc/4NhcQSxY/C4A-5.png"
                  className="rounded-lg inline-block xx:hidden md:block"
                  width="640"
                  height="960"
                  alt="Profile of Brown Patience guiding solopreneurs"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "-8px 7px 31px 8px rgba(0,0,0,0.51)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubSect;
