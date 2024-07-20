import { Link } from "react-router-dom";

const SubSect = () => {
  return (
    <>
      <div id="sub-sect">
        <div className="py-16 xx:pt-0 dark:bg-[#111]">
          <div className=" m-auto  px-6 text-primary xx:px-0  md:px-12 lg:px-20">
            <div className="justify-center gap-6 text-center md:flex md:text-left lg:items-center lg:gap-16">
              <div
                className="order-last mb-6 rounded-lg xx:rounded-none shadow-[#343434] bg-accent dark:bg-secondary  md:mb-0 md:w-6/12 lg:w-6/12 p-12 xx:px-6"
                style={
                  {
                    // boxShadow: " 2px 2px 39px 0px rgba(240,0,0,0.50)",
                  }
                }
              >
                <div className="mb-6">
                  <h2 className=" font-bold mb-6 xx:text-2xl xs:text-3xl text-primary md:text-5xl dark:text-white">
                    Monthly Subscription Package
                  </h2>
                  <p className="text-2xl xx:text-left xs:text-left ss:text-left xx:text-lg xs:text-xl text-primary mt-4 dark:text-white">
                    Chooose your category as an author , a solo entreprenuer or
                    both.
                  </p>
                </div>
                <div className=" mt-12 xx:mb-4">
                  <p className="text-2xl xx:text-xl xx:text-left text-primary font-semibold dark:text-white">
                    Your investment:
                  </p>
                  <ul className=" list-disc mt-4">
                    <li className="text-xl mb-8 xx:text-lg xx:text-left xs:text-left ss:text-left text-primary ">
                      <del>N</del>15,000 / month -
                      <strong className="pl-2">
                        Guidance for Writing Solopreneurs.
                      </strong>
                      <p className=" p-6 rounded mt-2 ml-6  bg-primary text-sm font-semibold text-secondary">
                        {/* <del>N</del>12,000 / month if you're subscribing for 12
                        months at once - <strong>20% discount</strong>{" "} */}

                        <p className="mt-4">
                          With this package, you get proofreading, editing, and
                          necessary revisions to your Christian content.
                        </p>
                        <Link to="/guidianceForSolopreneur">
                          <i className="font-bold text-accent ">Learn More</i>
                        </Link>
                      </p>
                    </li>
                    <li className="text-xl xx:text-lg mb-4  xx:text-left xs:text-left ss:text-left text-primary ">
                      <del>N</del>25,000 / month -
                      <strong className="pl-2"> Coaching For Authors.</strong>
                      <p className="  p-6 rounded mt-2 ml-6  bg-primary text-sm font-semibold text-secondary">
                        The coaching package where I guide you as you author
                        your book, chapter by chapter.
                        <Link to="/coachingForAuthors">
                          <i className="font-bold text-accent ml-1">
                            Learn More
                          </i>
                        </Link>
                      </p>
                    </li>
                  </ul>
                </div>

                {/* <div className="mt-12 grid place-content-start ">
                  <Link className="" to={"/subs"}>
                    <button className="relative ml-6 px-6 py-4 text-secondary text-base font-bold nded-full overflow-hidden bg-white rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">
                      LEARN MORE
                    </button>
                  </Link>
                 
                </div> */}
              </div>
              <div className="grid  md:w-5/12 lg:w-6/12">
                <div className="py-6">
                  <img
                    src="https://i.postimg.cc/J7NtsV2v/IMG-20220722-WA0032-01-jpeg.jpg"
                    className="rounded-lg inline-block xx:hidden md:block "
                    width="640"
                    height="960"
                    alt="profile img"
                    style={{
                      borderRadius: "10px",
                      boxShadow: " -8px 7px 31px 8px rgba(0,0,0,0.51)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubSect;
