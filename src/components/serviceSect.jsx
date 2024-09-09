import { Link } from "react-router-dom";

const Servicesect = () => {
  return (
    <>
      <section id="service-sect" aria-labelledby="services-heading">
        <div className="py-24 xx:py-12 xx:px-6 xs:py-16 xs:px-8 px-12 grid place-content-center dark:bg-[#111] bg-primary">
          <div className="m-auto space-y-12 grid">
            {/* Service section heading */}
            <div className="text-center">
              <h2
                id="services-heading"
                style={{
                  display: "inline-block",
                  paddingBottom: "1rem",
                }}
                className="border-b-4 border-solid border-b-secondary dark:border-b-primary mb-12 xs:mb-8 text-center text-2xl xs:text-2xl font-bold text-secondary dark:text-primary md:text-4xl"
              >
                My Services
              </h2>
              <p className="text-secondary dark:text-primary">
                “If you have a great message or story to share. . . reach Brown
                Patience.” — Timi Oshinowo.
              </p>
            </div>

            {/* Services grid */}
            <div className="mt-16 grid place-self-center gap-8 sm:w-2/3 md:w-full md:grid-cols-2 md:-mx-8 lg:grid-cols-3">
              {/* Service 1 */}
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.75)" }}
                className="p-6 py-12 sm:p-12 rounded-3xl dark:bg-secondary dark:shadow-none"
              >
                <div className="space-y-12 text-center">
                  <Link
                    to={"/editing"}
                    title="Book Writing & Editing"
                    className="text-xs"
                  >
                    <img
                      src="https://i.postimg.cc/bvvgbxc4/pencil.png"
                      className="w-20 xs:w-16 mx-auto"
                      width="512"
                      height="512"
                      alt="Pencil icon representing book writing and editing services"
                    />
                  </Link>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-secondary transition dark:text-white">
                      Book Writing & Editing
                    </h3>
                    <p className="text-secondary dark:text-primary">
                      Have professional eyes go through your manuscript or get
                      help putting your thoughts together to create a book.
                    </p>
                    <Link
                      to={"/editing"}
                      className="group relative flex mx-auto h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-primary before:bg-primary before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-secondary dark:before:bg-secondary"
                      aria-label="Learn more about book writing and editing services"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="relative w-5 h-5 text-secondary dark:text-white transition duration-300 group-hover:translate-x-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.75)" }}
                className="p-6 py-12 sm:p-12 rounded-3xl dark:bg-secondary"
              >
                <div className="space-y-12 text-center">
                  <Link
                    to={"/contentWriting"}
                    title="Content Writing Services"
                    className="text-xs"
                  >
                    <img
                      src="https://i.postimg.cc/52XnRN1p/web-design.png"
                      className="w-20 xs:w-16 mx-auto"
                      width="512"
                      height="512"
                      alt="Icon representing content writing services"
                    />
                  </Link>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-secondary transition dark:text-white">
                      Content Writing
                    </h3>
                    <p className="text-secondary dark:text-primary">
                      Social media content, web copies, newsletters, blog posts
                      — tell me what you need, and you’ll get it.
                    </p>
                    <Link
                      to={"/contentWriting"}
                      className="group relative flex mx-auto h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-secondary dark:before:bg-secondary"
                      aria-label="Learn more about content writing services"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="relative w-5 h-5 text-secondary dark:text-white transition duration-300 group-hover:translate-x-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div
                style={{ boxShadow: "2px 2px 28px -1px rgba(0,0,0,0.75)" }}
                className="p-6 py-12 sm:p-12 rounded-3xl dark:bg-secondary dark:shadow-none"
              >
                <div className="space-y-12 text-center">
                  <Link
                    to={"/coachingForWriters"}
                    title="Coaching for Writers"
                    className="text-xs"
                  >
                    <img
                      src="https://i.postimg.cc/8zfmbKB0/training.png"
                      className="w-20 xx:w-16 xs:w-16 mx-auto"
                      width="512"
                      height="512"
                      alt="Icon representing coaching for writers"
                    />
                  </Link>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-secondary transition dark:text-white">
                      Coaching For Writers
                    </h3>
                    <p className="text-secondary dark:text-primary">
                      Learn to tell compelling stories that keep people hooked
                      through our writing class.
                    </p>
                    <Link
                      to={"/coachingForWriters"}
                      className="group relative flex mx-auto h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-primary before:bg-primary before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-secondary dark:before:bg-secondary"
                      aria-label="Learn more about coaching for writers"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="relative w-5 h-5 text-gray-600 dark:text-white transition duration-300 group-hover:translate-x-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicesect;
